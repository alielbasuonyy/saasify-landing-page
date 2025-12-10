import ComparisonSection from "@/src/components/ComparisonSection";
import FAQSection from "@/src/components/FAQSection";
import FeaturesSection from "@/src/components/FeaturesSection";
import Header from "@/src/components/Header";
import HeroSection from "@/src/components/HeroSection";
import PricingSection from "@/src/components/PricingSection";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <HeroSection />
          <FeaturesSection />
          <ComparisonSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </main>
  );
}
