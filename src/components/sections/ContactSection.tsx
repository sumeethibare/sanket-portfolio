"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/lib/data/site";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API unavailable
    }
  };

  const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
    "Inquiry from Money Matters with Sanket",
  )}&body=${encodeURIComponent(
    "Hello Sanket,\n\nI was reviewing the Money Matters platform and would like to connect regarding...",
  )}`;

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 sm:py-28 bg-[#F7F8F5] text-[#0F1516] border-b border-black/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Context & Invitation */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="lime">DIRECT COMMUNICATION</Badge>
                <span className="text-[11px] font-mono text-neutral-500 uppercase">
                  VERIFIED CHANNEL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F1516] leading-tight">
                Connect with Sanket
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                Have questions about financial literacy, disciplined investing,
                or SWP methodology? I welcome constructive discussions on
                long-term wealth planning and portfolio thinking.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-3 bg-[#0F1516] hover:bg-[#1C2628] text-white px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all active:scale-95 shadow-sm group"
                >
                  <span>Get in Touch</span>
                  <span className="w-5 h-5 rounded-lg bg-white/15 text-white flex items-center justify-center text-xs transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-black/10 bg-neutral-50 hover:bg-neutral-100 text-xs font-mono font-medium text-neutral-800 transition-colors cursor-pointer"
                >
                  <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
                  <span className="text-neutral-500">📋</span>
                </button>
              </div>
            </div>

            {/* Right Column: Direct Email Card (Inspired by Reference Form aesthetic) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#0E1517] text-white p-7 sm:p-8 space-y-5 border border-white/10 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Primary Contact
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#D4E79E]/20 text-[#D4E79E] border border-[#D4E79E]/40">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-mono text-neutral-400">
                  Official Email Address
                </div>
                <a
                  href={mailtoUrl}
                  className="block text-lg sm:text-xl font-mono font-semibold text-[#D4E79E] hover:underline break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-neutral-400">
                  Community & Market Updates
                </div>
                <a
                  href={SITE_CONFIG.WHATSAPP_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#D4E79E]/40 hover:bg-white/[0.08] transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-white font-medium">
                      Join WhatsApp Channel
                    </span>
                  </div>
                  <span className="text-xs text-[#D4E79E] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 leading-relaxed">
                Response timeframe: Typically within 24–48 business hours for
                educational and constructive portfolio discussions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
