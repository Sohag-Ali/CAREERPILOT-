import AIBenefitsSection from "@/components/home/AIBenefitsSection";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import LogoBarSection from "@/components/home/LogoBarSection";
import StatisticsSection from "@/components/home/StatisticsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function HomePage() {
  return (
    <>
    

      <main>
        <section>
          <HeroSection></HeroSection>
          <LogoBarSection></LogoBarSection>
          <FeaturesSection></FeaturesSection>
          <HowItWorksSection></HowItWorksSection>
          <AIBenefitsSection />
          <TestimonialsSection></TestimonialsSection>
          <StatisticsSection></StatisticsSection>
          <FAQSection></FAQSection>
          <CTASection></CTASection>
        </section>
      </main>

        
    </>
  );
}