import { Badge } from "@/components/ui/Badge";
import { PERFORMANCE_SNAPSHOT } from "@/lib/data/performance";
import { SITE_CONFIG } from "@/lib/data/site";

export function HeroSection() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#090D0E] text-white overflow-hidden border-b border-white/10">
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 mosaic-grid-light opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4E79E]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand, Headline, Value Props & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Tag Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="lime">FINANCIAL CLARITY</Badge>
              <Badge variant="dark">DISCIPLINED INVESTING</Badge>
              <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 border border-white/10 px-2.5 py-0.5 rounded-full bg-white/5">
                INDEPENDENT TRACKING
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-[#D4E79E]">
                {SITE_CONFIG.brandName}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
                Make your money <br className="hidden sm:inline" />
                decisions with <span className="text-[#D4E79E]">clarity.</span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
              Where mind meets clarity. An educational investment journey
              focused on disciplined capital allocation, realistic expectations,
              systematic withdrawal planning (SWP), and verified portfolio
              tracking — free from marketing hype.
            </p>

            {/* Value Pillars List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
              <div className="border border-white/10 rounded-2xl p-3 bg-white/[0.03]">
                <div className="text-[11px] font-mono text-[#D4E79E] uppercase">
                  Focus 01
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  Capital Awareness
                </div>
              </div>
              <div className="border border-white/10 rounded-2xl p-3 bg-white/[0.03]">
                <div className="text-[11px] font-mono text-[#D4E79E] uppercase">
                  Focus 02
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  SWP Frameworks
                </div>
              </div>
              <div className="border border-white/10 rounded-2xl p-3 bg-white/[0.03] col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono text-[#D4E79E] uppercase">
                  Focus 03
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  Patience & Risk
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#performance"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#0A0E0F] hover:bg-neutral-100 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 active:scale-95 shadow-md group"
              >
                <span>Explore Investments</span>
                <span className="w-5 h-5 rounded-lg bg-black text-white flex items-center justify-center text-xs transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2.5 bg-[#141B1D] hover:bg-[#1B2527] text-white border border-white/15 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 active:scale-95"
              >
                <span>Try SWP Calculator</span>
                <span className="text-[#D4E79E] text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Metric Cards Stack (Adapting Reference Design) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Top Sage Accent Card: Portfolio Overview */}
            <div className="relative overflow-hidden rounded-3xl bg-[#D4E79E] text-[#121E0E] p-7 sm:p-8 border border-[#C5DC8B] shadow-xl">
              {/* Mosaic Decorative Corner Pattern */}
              <div
                className="absolute -right-8 -bottom-8 w-44 h-44 mosaic-diamond opacity-30 pointer-events-none rounded-full"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#182B12] animate-pulse" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#2B401C]">
                    PORTFOLIO SNAPSHOT
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-black/10 border border-black/15 flex items-center justify-center text-xs">
                  ↗
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-[#2B401C]">
                  Tracked Investment Value
                </div>
                <div className="text-3xl sm:text-5xl font-bold tracking-tight text-black">
                  ₹17.5+ Lakhs
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-[#2B401C]">
                <span>Reporting Baseline</span>
                <span className="font-semibold text-black">
                  As of {PERFORMANCE_SNAPSHOT.asOfDate}
                </span>
              </div>
            </div>

            {/* Bottom Dark Card: Active SIP & Brand Discipline */}
            <div className="relative rounded-3xl bg-[#12181A] border border-white/10 p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="dark">MONTHLY DISCIPLINE</Badge>
                <span className="text-xs font-mono text-neutral-400">
                  Recurring Allocation
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-white">
                  ₹1 Lakh+
                </span>
                <span className="text-sm font-medium text-[#D4E79E]">
                  / Month Active SIP
                </span>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed pt-1 border-t border-white/5">
                &ldquo;Where mind meets clarity — wealth creation requires
                continuous discipline, capital preservation, and realistic
                market expectations.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
