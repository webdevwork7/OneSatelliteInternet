"use client"

import { motion } from "framer-motion"
import { PlansSection } from "@/components/plans-section"
import { ComparePlansSection } from "@/components/compare-plans-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"

export default function PlansPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plans & Pricing</h1>
            <p className="text-lg text-gray-600 mb-8">Find the perfect satellite internet plan for your needs</p>
          </motion.div>
        </div>
      </section>

      <PlansSection />
      <ComparePlansSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
