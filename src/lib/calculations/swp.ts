/**
 * Pure mathematical calculation engine for Systematic Withdrawal Plan (SWP).
 *
 * Methodology:
 * Assumed annual return is converted to a monthly nominal interest rate: r = (annualReturn / 100) / 12.
 * For each month:
 *   1. Calculate monthly growth on current corpus: growth = corpus * r
 *   2. If (corpus + growth) < monthlyWithdrawal:
 *      Corpus is exhausted. Final partial withdrawal equals (corpus + growth).
 *      Corpus becomes 0. Further withdrawals cease.
 *   3. Otherwise:
 *      Corpus becomes (corpus + growth - monthlyWithdrawal)
 *      Total withdrawn increases by monthlyWithdrawal.
 *
 * This represents a mathematical illustration under uniform returns, not a prediction of market volatility.
 */

export interface SWPCalculationParams {
  initialInvestment: number; // in INR
  monthlyWithdrawal: number; // in INR
  annualReturn: number; // in percentage, e.g., 8 for 8%
  years: number; // in whole years
}

export interface SWPYearlyMilestone {
  year: number;
  totalWithdrawn: number;
  remainingCorpus: number;
  isExhausted: boolean;
}

export interface SWPResult {
  initialInvestment: number;
  monthlyWithdrawal: number;
  annualWithdrawal: number;
  annualReturn: number;
  years: number;
  totalWithdrawn: number;
  remainingCorpus: number;
  totalGrowthGenerated: number;
  withdrawalRate: number; // Annual withdrawal as % of initial investment
  isExhausted: boolean;
  exhaustedAt?: {
    year: number;
    month: number;
  };
  yearlyMilestones: SWPYearlyMilestone[];
}

export function calculateSWP(params: SWPCalculationParams): SWPResult {
  // Validate and clamp input values safely
  const initialInvestment = Math.max(0, Number(params.initialInvestment) || 0);
  const monthlyWithdrawal = Math.max(0, Number(params.monthlyWithdrawal) || 0);
  const annualReturn = Math.max(0, Number(params.annualReturn) || 0);
  const years = Math.max(
    1,
    Math.min(50, Math.floor(Number(params.years) || 1)),
  );

  const annualWithdrawal = monthlyWithdrawal * 12;
  const withdrawalRate =
    initialInvestment > 0 ? (annualWithdrawal / initialInvestment) * 100 : 0;

  const totalMonths = years * 12;
  const monthlyRate = annualReturn > 0 ? annualReturn / 100 / 12 : 0;

  let currentCorpus = initialInvestment;
  let totalWithdrawn = 0;
  let totalGrowthGenerated = 0;
  let isExhausted = false;
  let exhaustedAt: { year: number; month: number } | undefined;

  const yearlyMilestones: SWPYearlyMilestone[] = [];

  for (let m = 1; m <= totalMonths; m++) {
    if (isExhausted) {
      if (m % 12 === 0) {
        yearlyMilestones.push({
          year: m / 12,
          totalWithdrawn,
          remainingCorpus: 0,
          isExhausted: true,
        });
      }
      continue;
    }

    // Apply monthly growth assumption
    const monthlyGrowth = currentCorpus * monthlyRate;
    totalGrowthGenerated += monthlyGrowth;
    const availableBalance = currentCorpus + monthlyGrowth;

    if (availableBalance <= monthlyWithdrawal) {
      // Corpus runs out this month
      totalWithdrawn += availableBalance;
      currentCorpus = 0;
      isExhausted = true;
      const yr = Math.ceil(m / 12);
      const mo = ((m - 1) % 12) + 1;
      exhaustedAt = { year: yr, month: mo };
    } else {
      currentCorpus = availableBalance - monthlyWithdrawal;
      totalWithdrawn += monthlyWithdrawal;
    }

    // Record yearly milestone
    if (m % 12 === 0) {
      yearlyMilestones.push({
        year: m / 12,
        totalWithdrawn: Math.round(totalWithdrawn),
        remainingCorpus: Math.round(currentCorpus),
        isExhausted,
      });
    }
  }

  return {
    initialInvestment,
    monthlyWithdrawal,
    annualWithdrawal,
    annualReturn,
    years,
    totalWithdrawn: Math.round(totalWithdrawn),
    remainingCorpus: Math.round(currentCorpus),
    totalGrowthGenerated: Math.round(totalGrowthGenerated),
    withdrawalRate: Number(withdrawalRate.toFixed(2)),
    isExhausted,
    exhaustedAt,
    yearlyMilestones,
  };
}
