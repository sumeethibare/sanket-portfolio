/**
 * SWP (Systematic Withdrawal Plan) educational copy, scenarios, and metadata.
 */

export interface SWPScenarioMilestone {
  years: number;
  totalWithdrawn: number;
  remainingCorpus: number;
}

export interface SWPScenarioRateCase {
  annualReturnRate: number; // e.g., 8, 10, 12
  milestones: SWPScenarioMilestone[];
}

export interface SWPScenarioData {
  id: string;
  title: string;
  badge: string;
  initialInvestment: number;
  monthlyWithdrawal: number;
  annualWithdrawal: number;
  withdrawalRatePercentage: number; // Annual withdrawal / initial investment
  cases: SWPScenarioRateCase[];
}

export const SWP_EDUCATION_CONTENT = {
  tag: "SYSTEMATIC WITHDRAWAL PLAN",
  title: "Understanding Systematic Withdrawal Plans",
  subtitle:
    "How structured withdrawals balance periodic cash flow with potential long-term corpus growth.",

  keyMessageQuote:
    "The idea of SWP is not simply to withdraw money. It is about balancing regular cash flow with the potential growth of the remaining investment corpus and managing capital according to individual financial requirements.",

  pillars: [
    {
      title: "Regular Cash Flow",
      badge: "LIQUIDITY",
      description:
        "Withdraw a pre-determined, disciplined sum at chosen monthly intervals to fulfill living expenses, lifestyle needs, or post-career requirements.",
    },
    {
      title: "Potential Corpus Growth",
      badge: "COMPOUNDING",
      description:
        "The undeployed balance remains invested in market-linked instruments, continuing to participate in potential compounding and market appreciation.",
    },
    {
      title: "Capital Management",
      badge: "SUSTAINABILITY",
      description:
        "Calibrate withdrawal rates in alignment with risk tolerance, realistic expected returns, and time horizon to safeguard long-term corpus longevity.",
    },
  ],

  variables: [
    {
      name: "Financial Requirements",
      desc: "Your actual baseline living and discretionary cash needs.",
    },
    {
      name: "Investment Horizon",
      desc: "How many years or decades the corpus is designed to sustain withdrawals.",
    },
    {
      name: "Withdrawal Rate",
      desc: "The percentage of the portfolio withdrawn annually (e.g. 4–6% vs higher).",
    },
    {
      name: "Risk Profile",
      desc: "Your personal ability to withstand equity market volatility.",
    },
    {
      name: "Market Conditions",
      desc: "Sequencing of returns during early withdrawal years (sequence-of-returns risk).",
    },
    {
      name: "Inflation Impact",
      desc: "The erosion of purchasing power over 10, 20, or 30-year retirement horizons.",
    },
    {
      name: "Taxation Rules",
      desc: "Capital gains taxes applicable upon systematic redemption of units.",
    },
    {
      name: "Expense Ratios",
      desc: "Underlying scheme management fees and platform expenses.",
    },
    {
      name: "Asset Allocation",
      desc: "The strategic balance between equity, debt, and cash equivalents.",
    },
  ],

  disclaimerText:
    "SWP illustrations are based on assumed rates of return and withdrawal amounts and are provided for educational purposes only. They do not guarantee regular income, capital protection, or future investment performance. Actual results may vary depending on market conditions, withdrawal timing, inflation, taxes, expenses, asset allocation, and investment duration.",
};

/**
 * Pre-calculated Scenarios 1 & 2 computed using monthly compounding:
 * Monthly nominal rate: r = annualReturn / 12
 * Each month: corpus = corpus * (1 + r) - withdrawal
 */
export const SWP_SCENARIO_1: SWPScenarioData = {
  id: "scenario-1",
  title: "Scenario 1: ₹10 Lakhs Corpus",
  badge: "MODERATE CASH FLOW",
  initialInvestment: 1000000,
  monthlyWithdrawal: 5000,
  annualWithdrawal: 60000,
  withdrawalRatePercentage: 6.0,
  cases: [
    {
      annualReturnRate: 8,
      milestones: [
        { years: 5, totalWithdrawn: 300000, remainingCorpus: 1122461 },
        { years: 10, totalWithdrawn: 600000, remainingCorpus: 1304910 },
        { years: 15, totalWithdrawn: 900000, remainingCorpus: 1576730 },
      ],
    },
    {
      annualReturnRate: 10,
      milestones: [
        { years: 5, totalWithdrawn: 300000, remainingCorpus: 1258124 },
        { years: 10, totalWithdrawn: 600000, remainingCorpus: 1682817 },
        { years: 15, totalWithdrawn: 900000, remainingCorpus: 2381568 },
      ],
    },
    {
      annualReturnRate: 12,
      milestones: [
        { years: 5, totalWithdrawn: 300000, remainingCorpus: 1408348 },
        { years: 10, totalWithdrawn: 600000, remainingCorpus: 2150193 },
        { years: 15, totalWithdrawn: 900000, remainingCorpus: 3497901 },
      ],
    },
  ],
};

export const SWP_SCENARIO_2: SWPScenarioData = {
  id: "scenario-2",
  title: "Scenario 2: ₹20 Lakhs Corpus",
  badge: "EXPANDED CASH FLOW",
  initialInvestment: 2000000,
  monthlyWithdrawal: 10000,
  annualWithdrawal: 120000,
  withdrawalRatePercentage: 6.0,
  cases: [
    {
      annualReturnRate: 8,
      milestones: [
        { years: 5, totalWithdrawn: 600000, remainingCorpus: 2244923 },
        { years: 10, totalWithdrawn: 1200000, remainingCorpus: 2609820 },
        { years: 15, totalWithdrawn: 1800000, remainingCorpus: 3153461 },
      ],
    },
    {
      annualReturnRate: 10,
      milestones: [
        { years: 5, totalWithdrawn: 600000, remainingCorpus: 2516247 },
        { years: 10, totalWithdrawn: 1200000, remainingCorpus: 3365633 },
        { years: 15, totalWithdrawn: 1800000, remainingCorpus: 4763136 },
      ],
    },
    {
      annualReturnRate: 12,
      milestones: [
        { years: 5, totalWithdrawn: 600000, remainingCorpus: 2816697 },
        { years: 10, totalWithdrawn: 1200000, remainingCorpus: 4300387 },
        { years: 15, totalWithdrawn: 1800000, remainingCorpus: 6995802 },
      ],
    },
  ],
};
