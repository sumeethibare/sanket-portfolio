import { Navbar } from "@/components/navigation/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DisclaimerSection } from "@/components/sections/DisclaimerSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarketUpdatesSection } from "@/components/sections/MarketUpdatesSection";
import { PerformanceDashboard } from "@/components/sections/PerformanceDashboard";
import { PerformanceDisclosure } from "@/components/sections/PerformanceDisclosure";
import { PhilosophyTicker } from "@/components/sections/PhilosophyTicker";
import { SWPEducationSection } from "@/components/sections/SWPEducationSection";
import { SWPScenariosSection } from "@/components/sections/SWPScenariosSection";
import { SWPCalculator } from "@/components/swp/SWPCalculator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#111719]">
      {/* Fixed / Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Philosophy Ticker Ribbon */}
        <PhilosophyTicker />

        {/* 3. Investment Performance Dashboard (Dated: 31 Aug 2026) */}
        <PerformanceDashboard />

        {/* 4. Performance Disclosure ("How to Read These Numbers") */}
        <PerformanceDisclosure />

        {/* 5. About / Investment Philosophy & Mission */}
        <AboutSection />

        {/* 6. SWP Awareness & Conceptual Foundation */}
        <SWPEducationSection />

        {/* 7. SWP Pre-Calculated Scenarios (Scenario 1 & 2) */}
        <SWPScenariosSection />

        {/* 8. Interactive SWP Calculator */}
        <SWPCalculator />

        {/* 9. Market Updates & WhatsApp Channel CTA */}
        <MarketUpdatesSection />

        {/* 10. Direct Contact with Sanket */}
        <ContactSection />

        {/* 11. Statutory & Financial Disclaimers */}
        <DisclaimerSection />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
