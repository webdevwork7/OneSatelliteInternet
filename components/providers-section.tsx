"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Globe, Shield, Award } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export function ProvidersSection() {
  const stats = [
    {
      icon: Users,
      number: "2+ Million",
      label: "Happy Customers",
    },
    {
      icon: Globe,
      number: "99%",
      label: "Coverage Area",
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Uptime Reliability",
    },
    {
      icon: Award,
      number: "24/7",
      label: "Expert Support",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-200 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Trusted by Over {siteConfig.stats.customers} Households Across America
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join millions of satisfied customers who have transformed their internet experience with our reliable
            satellite solutions
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Provider Logos */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-8">Partnered with leading satellite technology providers</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {siteConfig.providers.map((provider, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md group-hover:shadow-lg transition-all">
                <Image
                  src={`/abstract-geometric-shapes.png?height=40&width=120&query=${provider} logo`}
                  alt={`${provider} logo`}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
