"use client"

import { motion } from "framer-motion"
import { Wifi, Gift, Zap } from "lucide-react"
import { siteConfig } from "@/lib/constants"

const iconMap = {
  Wifi: Wifi,
  Gift: Gift,
  Zap: Zap,
}

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose {siteConfig.name}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best satellite internet solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-16 w-16 rounded-full bg-violet-100 flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
