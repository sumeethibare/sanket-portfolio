/**
 * Site-wide configuration and brand constants.
 * Note: External URLs without verified destinations use clearly marked placeholders.
 */

export const SITE_CONFIG = {
  brandName: "Money Matters with Sanket",
  shortName: "Money Matters",
  tagline: "Where Mind Meets Clarity",
  description:
    "A dedicated personal financial education and investment portfolio platform focusing on disciplined investing, portfolio tracking, and systematic withdrawal planning.",
  author: "Sanket",
  email: "sanketkatapurmath@gmail.com",

  /**
   * Official WhatsApp channel URL for community updates and market reflections.
   */
  WHATSAPP_CHANNEL_URL: "https://whatsapp.com/channel/0029VbDHAnZKmCPO4bmOio25",

  navLinks: [
    { label: "Performance", href: "#performance" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "SWP Guide", href: "#swp-education" },
    { label: "Calculator", href: "#calculator" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
