/**
 * Currency and numerical formatters adhering to the Indian Numbering System (en-IN).
 */

/**
 * Formats numbers into standard Indian Rupee notation (e.g., ₹10,00,000).
 */
export function formatINR(value: number, includeSymbol = true): string {
  const rounded = Math.round(value);
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(rounded);

  return includeSymbol ? `₹${formatted}` : formatted;
}

/**
 * Formats large amounts into Lakhs or Crores for compact badges and high-level cards.
 */
export function formatCompactINR(value: number): string {
  if (value >= 10000000) {
    const cr = value / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (value >= 100000) {
    const lk = value / 100000;
    return `₹${lk % 1 === 0 ? lk.toFixed(0) : lk.toFixed(1)} Lakhs`;
  }
  return formatINR(value);
}

/**
 * Formats a percentage rate.
 */
export function formatPercent(value: number, decimals = 0): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Formats duration in years.
 */
export function formatYears(years: number): string {
  return years === 1 ? "1 Year" : `${years} Years`;
}
