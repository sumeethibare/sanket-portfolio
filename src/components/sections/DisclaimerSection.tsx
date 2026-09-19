import { Badge } from "@/components/ui/Badge";

export function DisclaimerSection() {
  const disclaimers = [
    {
      title: "Market Risk & Volatility",
      body: "Investments in securities, mutual funds, and market-linked instruments are subject to market risks, including the potential loss of principal. Past performance is historical information and does not guarantee, predict, or indicate future performance.",
    },
    {
      title: "Educational Purpose Only",
      body: "All materials, data points, calculations, and perspectives published on Money Matters with Sanket are strictly for educational and illustrative purposes. Nothing contained herein constitutes personal financial, legal, investment, or tax advice.",
    },
    {
      title: "No Return Guarantees",
      body: "Neither Sanket, this platform, nor any regulatory authority (including SEBI) offers or validates guaranteed returns, assured regular income, or capital protection. Historical figures (e.g. 25–30%+ or 90% crossing 12%) reflect specific historical holding periods, not forward-looking guarantees.",
    },
    {
      title: "Real-World SWP Variables",
      body: "SWP illustrations assume uniform periodic returns. In real markets, sequence-of-returns risk, market drawdowns, platform fees, expense ratios, and capital gains taxation can substantially alter remaining portfolio corpus and withdrawal longevity.",
    },
    {
      title: "Independent Due Diligence",
      body: "Visitors and investors must conduct independent due diligence and evaluate their personal financial position, liquidity requirements, tax obligations, and risk tolerance, or consult a SEBI-registered investment adviser (RIA) before making capital commitments.",
    },
    {
      title: "Regulatory Context",
      body: "References to return rates such as 8%, 10%, and 12% represent standard hypothetical scenario benchmarks and must not be construed as regulatory benchmarks, promised yields, or guaranteed mutual fund returns.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F2F4EF] text-[#0F1516] border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <Badge variant="dark">STATUTORY & REGULATORY NOTICE</Badge>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0F1516] mt-3">
            Financial & Legal Disclaimers
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
            Please review these critical disclosures before evaluating any
            information or mathematical model presented on this website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {disclaimers.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-black/[0.08] p-5 flex flex-col justify-start"
            >
              <h4 className="text-sm font-semibold text-[#0F1516] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                {item.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
