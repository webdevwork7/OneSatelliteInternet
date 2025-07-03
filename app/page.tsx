import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PlansSection } from "@/components/plans-section"
import { ComparePlansSection } from "@/components/compare-plans-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { ProvidersSection } from "@/components/providers-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PlansSection />
      <ComparePlansSection />
      <TestimonialsSection />
      <ProvidersSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
