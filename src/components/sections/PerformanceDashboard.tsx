import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERFORMANCE_SNAPSHOT } from "@/lib/data/performance";

export function PerformanceDashboard() {
  return (
    <section
      id="performance"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#F7F8F5] text-[#0F1516] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-black/[0.08]">
          <SectionHeading
            tag="PORTFOLIO DASHBOARD"
            tagVariant="lime"
            dateBadge={`Reporting Cut-Off: ${PERFORMANCE_SNAPSHOT.asOfDate}`}
            title={PERFORMANCE_SNAPSHOT.headline}
            subtitle={PERFORMANCE_SNAPSHOT.subheadline}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-black/10 text-xs font-mono text-neutral-600 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Snapshot Date: {PERFORMANCE_SNAPSHOT.asOfDate}</span>
            </div>
            <a
              href="#performance-disclosure"
              className="text-xs font-mono text-neutral-700 underline underline-offset-4 hover:text-black"
            >
              How to read these numbers →
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {PERFORMANCE_SNAPSHOT.metrics.map((metric, index) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              theme="light"
              accentHeader={index === 0}
            />
          ))}
        </div>

        {/* Verified Performance Visualization Container */}
        <div className="mt-12 rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-[0_4px_24px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-black/[0.06]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                HISTORICAL PORTFOLIO TRAJECTORY
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F1516] mt-1">
                Portfolio Growth & Asset Allocation
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Audited Time-Series Reporting</span>
            </div>
          </div>

          {/* Elegant Verified Empty State */}
          <div className="relative rounded-2xl border border-dashed border-neutral-300 bg-neutral-50/70 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[240px] overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 shadow-sm mb-4">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Portfolio visualization chart icon"
              >
                <title>Portfolio visualization chart icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>

            <h4 className="text-base font-semibold text-neutral-800 mb-1">
              Time-Series Growth & Allocation Visualization
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg leading-relaxed">
              Portfolio growth visualization will be added as verified
              historical data becomes available.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4E79E]" />
              <span>Grounded in verified historical statements only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
