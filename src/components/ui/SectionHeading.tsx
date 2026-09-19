import { Badge } from "./Badge";

export interface SectionHeadingProps {
  tag?: string;
  tagVariant?: "lime" | "dark" | "light" | "outline";
  title: string;
  subtitle?: string;
  dateBadge?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  tag,
  tagVariant = "lime",
  title,
  subtitle,
  dateBadge,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const alignClass =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignClass} ${className}`}>
      <div className="flex flex-wrap items-center gap-2.5">
        {tag && <Badge variant={tagVariant}>{tag}</Badge>}
        {dateBadge && (
          <span
            className={`text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
              isDark
                ? "text-neutral-400 bg-white/5 border-white/10"
                : "text-neutral-500 bg-black/5 border-black/10"
            }`}
          >
            {dateBadge}
          </span>
        )}
      </div>

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.12] ${
          isDark ? "text-white" : "text-[#0F1516]"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
