"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CallButton } from "@/components/call-button"
import { siteConfig } from "@/lib/constants"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 p-8 md:p-12">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/10 rounded-full"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0.1, scale: 0 }}
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.2, 1],
                  x: [0, Math.random() * 50 - 25, 0],
                  y: [0, Math.random() * 50 - 25, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Experience Better Internet?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get started today and enjoy high-speed internet no matter where you live
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CallButton
                text={`Call Now ${siteConfig.phone}`}
                className="text-lg px-6 py-6 bg-white text-violet-700 hover:bg-white/90 rounded-lg"
                variant="outline"
              />

              <Button
                variant="secondary"
                className="text-lg px-6 py-6 bg-white/20 text-white hover:bg-white/30 rounded-lg"
                asChild
              >
                <a href="#plans">
                  Compare Plans <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
