import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SWP_EDUCATION_CONTENT } from "@/lib/data/swp";

export function SWPEducationSection() {
  return (
    <section
      id="swp-education"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#F7F8F5] text-[#0F1516] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <SectionHeading
            tag="SWP FRAMEWORK"
            tagVariant="lime"
            title="Systematic Withdrawal Plan (SWP)"
            subtitle="How structured cash flows work alongside potential corpus compounding in personal finance."
          />
        </div>

        {/* Central Key Message Banner (Section 12) */}
        <div className="rounded-3xl bg-[#101719] text-white p-8 sm:p-12 border border-white/10 shadow-lg relative overflow-hidden mb-14">
          <div
            className="absolute -right-12 -top-12 w-64 h-64 bg-[#D4E79E]/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="lime">THE CORE SWP EQUILIBRIUM</Badge>
              <span className="text-[11px] font-mono uppercase text-neutral-400">
                Strategic Balance
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug">
              &ldquo;{SWP_EDUCATION_CONTENT.keyMessageQuote}&rdquo;
            </blockquote>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm font-mono text-[#D4E79E]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4E79E]" />
                Regular Cash Flow
              </span>
              <span className="text-neutral-500">+</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4E79E]" />
                Potential Growth
              </span>
              <span className="text-neutral-500">+</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4E79E]" />
                Capital Management
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {SWP_EDUCATION_CONTENT.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="rounded-3xl bg-white border border-black/[0.08] p-7 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-10 h-10 rounded-2xl bg-neutral-100 border border-neutral-200 text-[#0F1516] flex items-center justify-center font-mono font-semibold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F1516] mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs font-mono text-neutral-500">
                Essential SWP Component
              </div>
            </div>
          ))}
        </div>

        {/* 9 Critical Withdrawal Planning Factors Grid */}
        <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
              PRUDENT PORTFOLIO PLANNING
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F1516] mt-1">
              9 Factors That Determine SWP Sustainability
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Withdrawal planning cannot rely on a single constant return
              assumption. It is governed by multiple real-world personal and
              market dynamics:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SWP_EDUCATION_CONTENT.variables.map((item, index) => (
              <div
                key={item.name}
                className="p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col justify-start"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A2612]" />
                  <span className="font-semibold text-sm text-[#0F1516]">
                    {index + 1}. {item.name}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-3.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Educational Disclaimer Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#F4F6F0] border border-[#E2E6D8] text-xs text-neutral-700 leading-relaxed">
            <span className="font-semibold text-neutral-900">
              Educational Notice:{" "}
            </span>
            {SWP_EDUCATION_CONTENT.disclaimerText}
          </div>
        </div>
      </div>
    </section>
  );
}
