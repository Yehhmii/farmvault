import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollStory from "@/components/ScrollStory";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ScrollStory />
        <FeaturesSection />
        <StatsSection />
        <HowItWorks />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </LenisProvider>
  );
}
