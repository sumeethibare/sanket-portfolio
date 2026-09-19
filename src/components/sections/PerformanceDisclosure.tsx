import { Badge } from "@/components/ui/Badge";
import { PERFORMANCE_SNAPSHOT } from "@/lib/data/performance";

export function PerformanceDisclosure() {
  return (
    <section
      id="performance-disclosure"
      className="scroll-mt-20 py-16 sm:py-20 bg-white text-[#0F1516] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#F7F8F5] border border-black/[0.08] p-8 sm:p-12">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <Badge variant="dark">REGULATORY & EDUCATIONAL DISCLOSURE</Badge>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F1516] mt-3">
              {PERFORMANCE_SNAPSHOT.disclaimerHeading}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
              {PERFORMANCE_SNAPSHOT.disclaimerSubtitle}
            </p>
          </div>

          {/* 3-Column Comparative Educational Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERFORMANCE_SNAPSHOT.disclosures.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-black/[0.08] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-neutral-500 font-semibold uppercase">
                      Category 0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-[#0F1516] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4E79E]" />
                  <span>Educational Principle</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Regulatory Guidance Note */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#D4E79E]/30 border border-[#D4E79E] text-[#243818] flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                ℹ
              </div>
              <p className="text-xs text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-900">
                  Regulatory Framework:{" "}
                </span>
                Neither SEBI nor any authorized entity promises, validates, or
                endorses any rate of return. 8%, 10%, and 12% figures are used
                exclusively as illustrative mathematical benchmarks for scenario
                comparisons.
              </p>
            </div>
            <span className="text-[11px] font-mono uppercase text-neutral-500 shrink-0">
              STATUTORY CLARIFICATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
