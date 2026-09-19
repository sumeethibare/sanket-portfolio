"use client";

import { useState } from "react";
import type { PerformanceMetric } from "@/lib/data/performance";

export interface MetricCardProps {
  metric: PerformanceMetric;
  theme?: "light" | "dark";
  accentHeader?: boolean;
}

export function MetricCard({
  metric,
  theme = "light",
  accentHeader = false,
}: MetricCardProps) {
  const [showMethodology, setShowMethodology] = useState(false);
  const isDark = theme === "dark";

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-200 border ${
        accentHeader
          ? "bg-[#D4E79E] text-[#131E0E] border-[#C5DC8B] shadow-sm"
          : isDark
            ? "bg-[#131B1D] text-white border-white/10 hover:border-white/20 hover:bg-[#162124]"
            : "bg-white text-[#0F1516] border-black/[0.08] hover:border-black/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)]"
      }`}
    >
      {/* Card Header: Left Icon Chip & Right Action Chip */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div
            className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-105 ${
              accentHeader
                ? "bg-black/10 border-black/15 text-[#131E0E]"
                : isDark
                  ? "bg-white/5 border-white/10 text-[#D4E79E]"
                  : "bg-neutral-100 border-neutral-200 text-[#0F1516]"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                accentHeader
                  ? "bg-black/10 border-black/20 text-[#152210]"
                  : isDark
                    ? "bg-white/5 border-white/10 text-neutral-400"
                    : "bg-neutral-100 border-neutral-200 text-neutral-600"
              }`}
            >
              {metric.tag}
            </span>
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-colors ${
                accentHeader
                  ? "bg-black/10 border-black/15 text-[#131E0E]"
                  : isDark
                    ? "bg-white/5 border-white/10 text-white"
                    : "bg-neutral-50 border-neutral-200 text-neutral-700"
              }`}
              aria-hidden="true"
            >
              <span className="text-xs">↗</span>
            </div>
          </div>
        </div>

        {/* Metric Label & Title */}
        <div className="space-y-1">
          <div
            className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
              accentHeader
                ? "text-[#2F451F]"
                : isDark
                  ? "text-[#D4E79E]"
                  : "text-neutral-500"
            }`}
          >
            {metric.badge}
          </div>
          <h3
            className={`text-xl sm:text-2xl font-semibold tracking-tight leading-snug ${
              accentHeader
                ? "text-[#111C0C]"
                : isDark
                  ? "text-white"
                  : "text-[#0F1516]"
            }`}
          >
            {metric.title}
          </h3>
        </div>

        {/* Big Metric Display */}
        <div className="my-5 flex items-baseline gap-2">
          <span
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
              accentHeader
                ? "text-black"
                : isDark
                  ? "text-white"
                  : "text-[#0F1516]"
            }`}
          >
            {metric.value}
          </span>
          {metric.unit && (
            <span
              className={`text-base font-medium ${
                accentHeader
                  ? "text-[#2F451F]"
                  : isDark
                    ? "text-neutral-400"
                    : "text-neutral-500"
              }`}
            >
              {metric.unit}
            </span>
          )}
        </div>

        {/* Narrative Description */}
        <p
          className={`text-sm leading-relaxed ${
            accentHeader
              ? "text-[#243519]"
              : isDark
                ? "text-neutral-300"
                : "text-neutral-600"
          }`}
        >
          {metric.description}
        </p>

        {/* Observation note */}
        <div
          className={`mt-3.5 text-xs leading-relaxed p-3 rounded-xl border ${
            accentHeader
              ? "bg-black/[0.04] border-black/10 text-[#1F2E16]"
              : isDark
                ? "bg-white/[0.03] border-white/5 text-neutral-400"
                : "bg-neutral-50 border-neutral-200/80 text-neutral-600"
          }`}
        >
          <span className="font-semibold text-current">Context: </span>
          {metric.observationNote}
        </div>
      </div>

      {/* Card Footer: Date & Expandable Methodology */}
      <div className="mt-6 pt-4 border-t border-current/10">
        <div className="flex items-center justify-between text-xs">
          <span
            className={`font-mono text-[11px] ${
              accentHeader
                ? "text-[#2F451F]"
                : isDark
                  ? "text-neutral-400"
                  : "text-neutral-500"
            }`}
          >
            {metric.reportingDate}
          </span>
          <button
            type="button"
            onClick={() => setShowMethodology(!showMethodology)}
            className={`font-mono text-[11px] underline underline-offset-4 cursor-pointer font-medium transition-colors ${
              accentHeader
                ? "text-black hover:text-[#1F2E16]"
                : isDark
                  ? "text-[#D4E79E] hover:text-white"
                  : "text-neutral-700 hover:text-black"
            }`}
          >
            {showMethodology ? "Hide methodology" : "Methodology note"}
          </button>
        </div>

        {showMethodology && (
          <div
            className={`mt-3 p-3 rounded-xl text-xs font-mono leading-relaxed border ${
              accentHeader
                ? "bg-white/80 border-black/10 text-[#152210]"
                : isDark
                  ? "bg-black/60 border-white/10 text-neutral-300"
                  : "bg-neutral-100/80 border-neutral-300 text-neutral-700"
            }`}
          >
            <div className="font-semibold mb-1 text-current">
              Measurement Methodology:
            </div>
            {metric.methodologyNote}
          </div>
        )}
      </div>
    </div>
  );
}
