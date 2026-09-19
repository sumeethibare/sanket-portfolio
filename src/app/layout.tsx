import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090d0e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Money Matters with Sanket | Where Mind Meets Clarity",
  description:
    "A dedicated personal financial education and investment portfolio platform focusing on disciplined investing, portfolio tracking, and systematic withdrawal planning (SWP).",
  keywords: [
    "Money Matters with Sanket",
    "Where Mind Meets Clarity",
    "Sanket investment journey",
    "SWP calculator",
    "Systematic Withdrawal Plan",
    "personal finance education",
    "financial literacy India",
    "disciplined investing",
    "portfolio tracking",
  ],
  authors: [{ name: "Sanket" }],
  creator: "Sanket",
  openGraph: {
    title: "Money Matters with Sanket | Where Mind Meets Clarity",
    description:
      "A dedicated personal financial education and investment portfolio platform focusing on disciplined investing, portfolio tracking, and systematic withdrawal planning.",
    type: "website",
    locale: "en_IN",
    siteName: "Money Matters with Sanket",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F8F5] text-[#111719] selection:bg-[#D4E79E] selection:text-[#0F1516]">
        {children}
      </body>
    </html>
  );
}
