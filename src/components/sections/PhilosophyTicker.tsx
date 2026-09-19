export function PhilosophyTicker() {
  const items = [
    "FINANCIAL CLARITY",
    "DISCIPLINED INVESTING",
    "CAPITAL PRESERVATION",
    "SYSTEMATIC WITHDRAWALS (SWP)",
    "LONG-TERM COMPOUNDING",
    "REALISTIC EXPECTATIONS",
    "WHERE MIND MEETS CLARITY",
    "TRANSPARENT METHODOLOGY",
  ];

  const repeatedItems = [
    ...items.map((text) => ({ id: `primary-${text}`, text })),
    ...items.map((text) => ({ id: `secondary-${text}`, text })),
  ];

  return (
    <div
      className="w-full bg-[#0F1516] text-[#D4E79E] border-b border-white/10 py-3.5 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-8 text-xs font-mono tracking-widest uppercase">
        {/* Render twice for seamless infinite scrolling */}
        {repeatedItems.map((item) => (
          <span key={item.id} className="inline-flex items-center gap-8">
            <span className="text-white/90 font-medium">{item.text}</span>
            <span className="text-[#D4E79E]/60 text-[10px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
