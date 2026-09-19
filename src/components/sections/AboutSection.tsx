import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/data/site";

export function AboutSection() {
  const pillars = [
    {
      number: "01",
      title: "Clarity Before Capital",
      tag: "KNOWLEDGE FIRST",
      description:
        "Never deploy hard-earned capital into complex financial instruments you cannot explain simply. Genuine financial education precedes every allocation decision.",
    },
    {
      number: "02",
      title: "Patience Over Speculation",
      tag: "TIME HORIZON",
      description:
        "True compounding is an exercise in quiet discipline over multi-year periods. Reject rapid trading temptations, noise, and speculative short-term gambling.",
    },
    {
      number: "03",
      title: "Downside & Risk Architecture",
      tag: "CAPITAL DEFENSE",
      description:
        "Long-term wealth creation begins with avoiding unrecoverable losses. Managing sequence risk, asset allocation, and emergency reserves forms the immutable foundation.",
    },
    {
      number: "04",
      title: "Realistic Expectations",
      tag: "MARKET TRUTH",
      description:
        "Sustainable wealth is built with realistic return expectations that withstand inflation and taxes. We reject get-rich-quick narratives and pseudo-expert promises.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="scroll-mt-20 relative py-24 sm:py-32 bg-[#0A0E0F] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 mosaic-grid-light opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <SectionHeading
            theme="dark"
            tag="ABOUT & MISSION"
            tagVariant="lime"
            title="Why Money Matters"
            subtitle="Helping individuals approach personal finance and investing with ease, clarity, and structural discipline."
          />

          <div className="max-w-md border-l-2 border-[#D4E79E] pl-5 py-1 text-sm text-neutral-300 italic">
            &ldquo;{SITE_CONFIG.tagline} — investing should feel like a
            disciplined, thoughtful journey, never a high-stress gamble.&rdquo;
          </div>
        </div>

        {/* Dual Panel Layout: Mission Narrative + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Editorial Narrative Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#12181A] border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="dark">THE MISSION</Badge>
                <span className="text-[11px] font-mono text-neutral-400 uppercase">
                  FOUNDATION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug">
                Demystifying wealth creation through transparent principles.
              </h3>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>
                  Most financial anxiety stems not from a lack of opportunities,
                  but from an overload of conflicting advice, aggressive sales
                  pitches, and opaque terminology.
                </p>
                <p>
                  <strong className="text-white font-medium">
                    Money Matters with Sanket
                  </strong>{" "}
                  was established to provide an unbiased, educational reference
                  point. Sanket&apos;s personal investing journey is documented
                  here to illustrate how consistent monthly habits, structured
                  systematic withdrawals, and clear-eyed patience produce
                  durable financial peace of mind.
                </p>
                <p className="text-xs text-neutral-400 pt-2 border-t border-white/5">
                  Disclaimer: Content published across this platform is purely
                  educational and does not constitute personalized investment
                  advice or fiduciary portfolio management.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Author & Creator</span>
              <span className="text-[#D4E79E] font-medium">Sanket</span>
            </div>
          </div>

          {/* Right 4 Pillars Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-3xl bg-[#12181A] border border-white/10 hover:border-white/20 p-6 sm:p-7 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-bold text-[#D4E79E]">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2.5 group-hover:text-[#D4E79E] transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Core Pillar</span>
                  <span className="group-hover:translate-x-1 transition-transform text-white">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
