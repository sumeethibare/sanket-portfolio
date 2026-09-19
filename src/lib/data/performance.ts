/**
 * Tracked portfolio figures, measurement definitions, and disclosure notes.
 * Figures are strictly dated and explicitly categorized as historical records.
 */

export interface PerformanceMetric {
  id: string;
  badge: string;
  title: string;
  value: string;
  unit?: string;
  tag: string;
  description: string;
  observationNote: string;
  methodologyNote: string;
  reportingDate: string;
}

export const PERFORMANCE_SNAPSHOT = {
  asOfDate: "31 August 2026",
  headline: "Investment Performance",
  subheadline:
    "Audited snapshot of personally tracked investments, systematic monthly contributions, and historical observation milestones.",

  disclaimerHeading: "How to Read These Numbers",
  disclaimerSubtitle:
    "Understanding the essential distinctions between historical data, scenario assumptions, and market reality.",

  disclosures: [
    {
      title: "Historical Performance",
      badge: "PAST RECORD",
      body: "Past performance reflects realized or tracked outcomes during specific previous economic and market cycles. It is strictly historical context and does not constitute a forecast, projection, or guarantee of future returns.",
    },
    {
      title: "Illustrative Assumptions",
      badge: "MODEL BENCHMARK",
      body: "Rates such as 8%, 10%, and 12% utilized in SWP scenarios and calculators are mathematical illustrations for educational comparison. They do not represent fixed or assured returns from any financial institution or regulatory body.",
    },
    {
      title: "Future Market Realities",
      badge: "RISK FACTORS",
      body: "Future outcomes are inherently variable and subject to market volatility, inflation, expense ratios, asset allocation shifts, withdrawal sequencing, and tax laws. Capital is subject to market risk at all times.",
    },
  ],

  metrics: [
    {
      id: "portfolio-value",
      badge: "PORTFOLIO TRACKING",
      title: "Tracked Investment Value",
      value: "₹17.5+",
      unit: "Lakhs",
      tag: "Verified Corpus",
      description:
        "Total cumulative valuation of active, tracked personal investment portfolios across diversified asset classes.",
      observationNote:
        "Reflects the consolidated valuation of tracked holdings as of the stated reporting cut-off date.",
      methodologyNote:
        "Measurement methodology to be finalized before publication. Past performance is historical information, not a promise of future performance.",
      reportingDate: "As of 31 August 2026",
    },
    {
      id: "active-sip",
      badge: "MONTHLY DISCIPLINE",
      title: "Active / Live SIP Investments",
      value: "₹1+",
      unit: "Lakh / month",
      tag: "Live Contributions",
      description:
        "Current recurring monthly systematic investment plan (SIP) allocations executing systematic rupee-cost averaging.",
      observationNote:
        "Demonstrates active ongoing commitment to disciplined monthly capital deployment across diversified market instruments.",
      methodologyNote:
        "Measurement methodology to be finalized before publication. Active SIP commitment represents monthly capital allocation and not guaranteed returns.",
      reportingDate: "As of 31 August 2026",
    },
    {
      id: "historical-high",
      badge: "CYCLE HIGH-WATER",
      title: "Historical Performance Highs",
      value: "25–30%+",
      unit: "Historic Peak",
      tag: "Selected Assets",
      description:
        "Certain tracked investments have historically delivered annualized returns in the 25–30%+ range during selective favorable market bull phases.",
      observationNote:
        "Historical observation from specific investment tenures. These elevated returns represent exceptional past cycle periods and cannot be expected as standard or recurring baselines.",
      methodologyNote:
        "Measurement methodology to be finalized before publication. Specific historical returns do not predict future cycle performance.",
      reportingDate:
        "Historical Measurement Tenure (Recorded as of 31 Aug 2026)",
    },
    {
      id: "return-threshold",
      badge: "BENCHMARK OBSERVATION",
      title: "12%+ Historical Return Observation",
      value: "90%+",
      unit: "Tracked Dataset",
      tag: "Threshold Crossing",
      description:
        "90%+ of the relevant tracked investments in the selected historical dataset crossed a 12% return threshold during the stated measurement period.",
      observationNote:
        "Strictly an observation of historical holding periods within the specified tracked dataset, not an assurance of future market results.",
      methodologyNote:
        "Measurement methodology to be finalized before publication. Defines exact investments included, measurement periods, CAGR/XIRR computation criteria, and SIP cash-flow handling before formal publishing.",
      reportingDate:
        "Historical Measurement Tenure (Recorded as of 31 Aug 2026)",
    },
  ] as PerformanceMetric[],
};
