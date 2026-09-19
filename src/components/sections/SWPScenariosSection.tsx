"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SWP_SCENARIO_1,
  SWP_SCENARIO_2,
  type SWPScenarioData,
} from "@/lib/data/swp";
import { formatINR } from "@/lib/utils/formatters";

export function SWPScenariosSection() {
  const [activeScenarioId, setActiveScenarioId] = useState<
    "scenario-1" | "scenario-2"
  >("scenario-1");

  const currentScenario: SWPScenarioData =
    activeScenarioId === "scenario-1" ? SWP_SCENARIO_1 : SWP_SCENARIO_2;

  return (
    <section
      id="scenarios"
      className="scroll-mt-20 py-20 sm:py-28 bg-white text-[#0F1516] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-black/[0.08]">
          <SectionHeading
            tag="SCENARIO MODELING"
            tagVariant="lime"
            title="Pre-Calculated SWP Case Studies"
            subtitle="Comparing 8%, 10%, and 12% illustrative annual returns across 5, 10, and 15-year time horizons."
          />

          {/* Scenario Selector Tabs */}
          <div className="grid grid-cols-2 sm:flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveScenarioId("scenario-1")}
              className={`text-center px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer ${
                activeScenarioId === "scenario-1"
                  ? "bg-white text-black shadow-sm font-semibold border border-black/10"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Scenario 1 (₹10L)
            </button>
            <button
              type="button"
              onClick={() => setActiveScenarioId("scenario-2")}
              className={`text-center px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-mono font-medium transition-all cursor-pointer ${
                activeScenarioId === "scenario-2"
                  ? "bg-white text-black shadow-sm font-semibold border border-black/10"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Scenario 2 (₹20L)
            </button>
          </div>
        </div>

        {/* Active Scenario Overview Header Banner */}
        <div className="rounded-3xl bg-[#F7F8F5] border border-black/[0.08] p-5 sm:p-8 mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-[11px] font-mono text-neutral-500 uppercase">
                Initial Corpus
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#0F1516] mt-0.5">
                {formatINR(currentScenario.initialInvestment)}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-neutral-500 uppercase">
                Monthly Withdrawal
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#0F1516] mt-0.5">
                {formatINR(currentScenario.monthlyWithdrawal)}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-neutral-500 uppercase">
                Annual Withdrawal
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#0F1516] mt-0.5">
                {formatINR(currentScenario.annualWithdrawal)}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono text-neutral-500 uppercase">
                Annual Withdrawal Rate
              </div>
              <div className="text-lg sm:text-2xl font-bold text-[#2A421A] mt-0.5">
                {currentScenario.withdrawalRatePercentage}% / year
              </div>
            </div>
          </div>
        </div>

        {/* 3 Rate Columns Comparison Cards (8%, 10%, 12%) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {currentScenario.cases.map((caseItem) => (
            <div
              key={caseItem.annualReturnRate}
              className="rounded-3xl bg-[#FBFBFB] border border-black/[0.08] hover:border-black/20 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div>
                {/* Rate Header */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-black/[0.08]">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                      ASSUMED RETURN CASE
                    </span>
                    <h3 className="text-3xl font-bold text-[#0F1516]">
                      {caseItem.annualReturnRate}%{" "}
                      <span className="text-xs font-normal font-mono text-neutral-500">
                        p.a.
                      </span>
                    </h3>
                  </div>

                  <Badge
                    variant={caseItem.annualReturnRate === 10 ? "lime" : "dark"}
                  >
                    {caseItem.annualReturnRate === 10
                      ? "BENCHMARK"
                      : "ILLUSTRATIVE"}
                  </Badge>
                </div>

                <div className="text-xs text-neutral-600 mb-6 font-mono">
                  {caseItem.annualReturnRate}% |{" "}
                  {formatINR(currentScenario.initialInvestment)} |{" "}
                  {formatINR(currentScenario.monthlyWithdrawal)}/mo |{" "}
                  {formatINR(currentScenario.annualWithdrawal)}/yr
                </div>

                {/* Milestones Stack */}
                <div className="space-y-4">
                  {caseItem.milestones.map((milestone) => (
                    <div
                      key={milestone.years}
                      className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs"
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className="font-semibold text-neutral-800">
                          After {milestone.years} Years
                        </span>
                        <span className="text-neutral-500">
                          {milestone.years * 12} Months
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100">
                        <div>
                          <div className="text-[10px] font-mono uppercase text-neutral-500">
                            Total Withdrawn
                          </div>
                          <div className="text-sm font-semibold text-[#0F1516]">
                            {formatINR(milestone.totalWithdrawn)}
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono uppercase text-neutral-500">
                            Estimated Corpus
                          </div>
                          <div className="text-sm font-semibold text-[#182C0F]">
                            {formatINR(milestone.remainingCorpus)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Footnote */}
              <div className="mt-6 pt-4 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Monthly compounding illustration • Not guaranteed
              </div>
            </div>
          ))}
        </div>

        {/* Educational Disclaimer for Scenarios */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
          <span className="font-semibold text-neutral-900">
            Important Distinction:{" "}
          </span>
          The figures above are mathematical illustrations derived from
          consistent monthly compounding at assumed annual return rates of 8%,
          10%, and 12%. They do not reflect actual mutual fund, equity, or debt
          fund investment records and do not account for real-world market
          volatility, negative cycle drawdowns, taxation, or expense ratios.
        </div>
      </div>
    </section>
  );
}
