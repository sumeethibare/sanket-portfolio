import { SITE_CONFIG } from "@/lib/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#090D0E] text-white py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#141E20] border border-white/15 flex items-center justify-center text-[#D4E79E]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                {SITE_CONFIG.brandName}
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-[#D4E79E]">
              {SITE_CONFIG.tagline}
            </p>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Dedicated to financial literacy, disciplined investing habits,
              transparent portfolio tracking, and systematic cash-flow planning.
            </p>
          </div>

          {/* Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#performance-disclosure"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Disclosures
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Direct Contact
            </div>
            <p className="text-xs text-neutral-400">
              For educational inquiries and portfolio discussions:
            </p>
            <div className="space-y-1">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="block text-xs font-mono text-[#D4E79E] hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-[#D4E79E] transition-colors pt-1"
              >
                <span>WhatsApp Channel</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
          </div>
          <div>
            Educational platform • Not a SEBI registered investment advisory
            service
          </div>
        </div>
      </div>
    </footer>
  );
}
