"use client"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { CallButton } from "@/components/call-button"
import { Badge } from "@/components/ui/badge"
import { plans } from "@/lib/constants"
import { siteConfig } from "@/lib/constants"

export function PlansSection() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our range of high-speed internet plans designed to fit your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-xl overflow-hidden border ${
                plan.popular ? "border-violet-500 shadow-lg" : "border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-violet-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">Best for: {plan.bestFor}</p>

                <div className="mb-6">
                  <span className="text-2xl font-bold">{plan.price}</span>
                </div>

                <div className="mb-6">
                  <Badge variant="outline" className="mb-2 bg-violet-50">
                    Internet Speed
                  </Badge>
                  <p className="font-semibold text-lg">{plan.speed}</p>
                </div>

                {plan.package && (
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-2 bg-violet-50">
                      Package
                    </Badge>
                    <p className="font-semibold text-lg">{plan.package}</p>
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <CallButton
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                  text={`Call Now ${siteConfig.phone}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
