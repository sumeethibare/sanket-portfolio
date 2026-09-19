"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { calculateSWP } from "@/lib/calculations/swp";
import { formatINR, formatPercent, formatYears } from "@/lib/utils/formatters";

export function SWPCalculator() {
  // Calculator inputs with sensible defaults
  const [initialInvestment, setInitialInvestment] = useState<number>(1000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<number>(5000);
  const [annualReturn, setAnnualReturn] = useState<number>(8);
  const [years, setYears] = useState<number>(10);

  // Compute results dynamically using pure math engine
  const result = useMemo(() => {
    return calculateSWP({
      initialInvestment,
      monthlyWithdrawal,
      annualReturn,
      years,
    });
  }, [initialInvestment, monthlyWithdrawal, annualReturn, years]);

  // Quick preset handlers
  const returnPresets = [8, 10, 12, 14];
  const yearPresets = [5, 10, 15, 20];

  return (
    <section
      id="calculator"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#0C1214] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <SectionHeading
            theme="dark"
            tag="INTERACTIVE TOOL"
            tagVariant="lime"
            title="Interactive SWP Calculator"
            subtitle="Simulate monthly withdrawals and corpus compounding under customizable educational return assumptions."
          />
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Input Controls Panel (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#131A1C] border border-white/10 p-6 sm:p-8 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                Simulation Inputs
              </span>
              <button
                type="button"
                onClick={() => {
                  setInitialInvestment(1000000);
                  setMonthlyWithdrawal(5000);
                  setAnnualReturn(8);
                  setYears(10);
                }}
                className="text-xs font-mono text-[#D4E79E] hover:underline cursor-pointer"
              >
                Reset to default
              </button>
            </div>

            {/* Input 1: Initial Investment */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="initial-investment-range"
                  className="text-sm font-semibold text-neutral-200"
                >
                  Initial Investment Amount
                </label>
                <span className="text-lg font-bold font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
                  {formatINR(initialInvestment)}
                </span>
              </div>
              <input
                id="initial-investment-range"
                type="range"
                min={100000}
                max={10000000}
                step={50000}
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="cursor-pointer"
                aria-label="Initial Investment Amount"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500">
                <span>₹1,00,000 (1 Lakh)</span>
                <span>₹50,00,000</span>
                <span>₹1,00,00,000 (1 Crore)</span>
              </div>
            </div>

            {/* Input 2: Monthly Withdrawal */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="monthly-withdrawal-range"
                  className="text-sm font-semibold text-neutral-200"
                >
                  Monthly Withdrawal Amount (SWP)
                </label>
                <div className="text-right">
                  <span className="text-lg font-bold font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
                    {formatINR(monthlyWithdrawal)}
                  </span>
                  <div className="text-[11px] font-mono text-neutral-400 mt-1">
                    Annual: {formatINR(monthlyWithdrawal * 12)}
                  </div>
                </div>
              </div>
              <input
                id="monthly-withdrawal-range"
                type="range"
                min={1000}
                max={200000}
                step={1000}
                value={monthlyWithdrawal}
                onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                className="cursor-pointer"
                aria-label="Monthly Withdrawal Amount"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500">
                <span>₹1,000 / mo</span>
                <span>₹1,00,000 / mo</span>
                <span>₹2,00,000 / mo</span>
              </div>
            </div>

            {/* Input 3: Assumed Annual Return */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <label
                    htmlFor="annual-return-range"
                    className="text-sm font-semibold text-neutral-200"
                  >
                    Assumed Annual Return
                  </label>
                  <p className="text-[11px] font-mono text-neutral-400">
                    Converted to nominal monthly rate (r / 12)
                  </p>
                </div>
                <span className="text-lg font-bold font-mono text-[#D4E79E] bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
                  {formatPercent(annualReturn)}
                </span>
              </div>

              <input
                id="annual-return-range"
                type="range"
                min={1}
                max={20}
                step={0.5}
                value={annualReturn}
                onChange={(e) => setAnnualReturn(Number(e.target.value))}
                className="cursor-pointer"
                aria-label="Assumed Annual Return"
              />

              {/* Quick Presets */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-neutral-500 mr-1">
                  Presets:
                </span>
                {returnPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAnnualReturn(preset)}
                    className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                      annualReturn === preset
                        ? "bg-[#D4E79E] text-black border-[#D4E79E] font-semibold"
                        : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {preset}%
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Investment Duration */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="duration-years-range"
                  className="text-sm font-semibold text-neutral-200"
                >
                  Investment Horizon (Years)
                </label>
                <span className="text-lg font-bold font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
                  {formatYears(years)}
                </span>
              </div>

              <input
                id="duration-years-range"
                type="range"
                min={1}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="cursor-pointer"
                aria-label="Investment Duration in Years"
              />

              {/* Quick Presets */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-neutral-500 mr-1">
                  Presets:
                </span>
                {yearPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setYears(preset)}
                    className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                      years === preset
                        ? "bg-[#D4E79E] text-black border-[#D4E79E] font-semibold"
                        : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {preset}Y
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Output & Milestone Dashboard (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Output Display Card */}
            <div className="rounded-3xl bg-[#12191B] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Badge variant={result.isExhausted ? "outline" : "lime"}>
                    {result.isExhausted
                      ? "DEPLETION ALERT"
                      : "SUSTAINABLE RATE"}
                  </Badge>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  Illustrative Estimate
                </span>
              </div>

              {/* Big Metric: Remaining Corpus */}
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Estimated Remaining Corpus (After {years} Years)
                </div>
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
                    result.isExhausted ? "text-amber-400" : "text-[#D4E79E]"
                  }`}
                >
                  {formatINR(result.remainingCorpus)}
                </div>
              </div>

              {/* Secondary Metric: Total Withdrawn */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">
                    Total Amount Withdrawn
                  </span>
                  <span className="text-white font-bold text-base">
                    {formatINR(result.totalWithdrawn)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Initial Capital</span>
                  <span className="text-neutral-300">
                    {formatINR(result.initialInvestment)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono pt-1 border-t border-white/5">
                  <span className="text-neutral-400">
                    Annual Withdrawal Rate
                  </span>
                  <span
                    className={`font-semibold ${
                      result.withdrawalRate > 8
                        ? "text-amber-400"
                        : "text-[#D4E79E]"
                    }`}
                  >
                    {result.withdrawalRate}% / year
                  </span>
                </div>
              </div>

              {/* Corpus Exhaustion Warning Banner */}
              {result.isExhausted && result.exhaustedAt && (
                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 leading-relaxed space-y-1">
                  <div className="font-semibold flex items-center gap-1.5 text-amber-300">
                    <span>⚠</span>
                    <span>
                      Corpus Depleted in Year {result.exhaustedAt.year}, Month{" "}
                      {result.exhaustedAt.month}
                    </span>
                  </div>
                  <p>
                    Under an assumed {annualReturn}% return, a monthly
                    withdrawal of {formatINR(monthlyWithdrawal)} (
                    {result.withdrawalRate}% annual rate) exhausted the corpus
                    before the end of the {years}-year period. Consider lowering
                    the monthly withdrawal or increasing the initial investment.
                  </p>
                </div>
              )}

              {/* Milestone Summary Preview */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase text-neutral-400">
                  Year-by-Year Milestone Checkpoints
                </div>
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1 text-xs font-mono">
                  {result.yearlyMilestones
                    .filter((m) => m.year % 5 === 0 || m.year === years)
                    .map((milestone) => (
                      <div
                        key={milestone.year}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <span className="text-neutral-400">
                          Year {milestone.year}
                        </span>
                        <div className="text-right">
                          <div className="text-white font-semibold">
                            Corpus: {formatINR(milestone.remainingCorpus)}
                          </div>
                          <div className="text-[10px] text-neutral-500">
                            Withdrawn: {formatINR(milestone.totalWithdrawn)}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Visible Section 17 & Section 9 SWP Disclaimer */}
            <div className="p-5 rounded-3xl bg-[#101719] border border-white/10 text-xs text-neutral-400 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 text-neutral-200 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4E79E]" />
                <span>Educational Model Disclaimer:</span>
              </div>
              <p>
                SWP illustrations are based on assumed rates of return and
                withdrawal amounts and are provided for educational purposes
                only. They do not guarantee regular income, capital protection,
                or future investment performance. Actual results may vary
                depending on market conditions, withdrawal timing, inflation,
                taxes, expenses, asset allocation, and investment duration.
              </p>
              <p className="text-neutral-300 font-mono text-[11px] pt-1 border-t border-white/5">
                Important: Actual markets do not deliver returns evenly every
                month. This model assumes uniform monthly compounding as a
                mathematical illustration and does not simulate real-world
                sequence-of-returns volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
