import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/data/site";

export function MarketUpdatesSection() {
  return (
    <section
      id="market-updates"
      className="scroll-mt-20 py-20 sm:py-24 bg-[#F7F8F5] text-[#0F1516] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0E1517] text-white p-8 sm:p-14 border border-white/10 relative overflow-hidden shadow-xl">
          {/* Subtle Grid Lines */}
          <div
            className="absolute inset-0 mosaic-grid-light opacity-15 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="lime">MARKET PERSPECTIVES</Badge>
              <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400">
                WHATSAPP UPDATES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Future Insights & Market Updates
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              Periodic macroeconomic perspectives, disciplined investing
              reflections, and educational breakdowns of market cycles —
              delivered with a long-term focus, not daily trading noise.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={SITE_CONFIG.WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D4E79E] hover:bg-[#c6db8b] text-[#111D0E] font-semibold text-sm px-6 py-3.5 rounded-2xl transition-transform active:scale-95 shadow-md group"
              >
                <span>Follow Market Updates</span>
                <span className="w-5 h-5 rounded-lg bg-black/15 flex items-center justify-center text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <span className="text-xs font-mono text-neutral-400">
                Direct external link • Updates delivered to WhatsApp
              </span>
            </div>

            {/* Professional Broadcast Notice */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4E79E]" />
              <span>
                Official Broadcast • Direct periodic insights, macro
                observations, and disciplined investing principles.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
