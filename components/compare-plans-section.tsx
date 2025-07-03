"use client"
import { motion } from "framer-motion"
import { plans } from "@/lib/constants"
import { CallButton } from "@/components/call-button"
import { Check } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export function ComparePlansSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Our Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See which plan is right for you with our side-by-side comparison
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-white border-b-2 border-gray-200"></th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={`p-4 text-center border-b-2 ${
                      plan.popular ? "bg-violet-50 border-violet-500" : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="text-xl font-bold">{plan.name}</div>
                    <div className="text-lg font-medium mt-2 text-violet-600">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 bg-white border-b border-gray-200 font-medium">Internet Speed</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`p-4 text-center border-b ${
                      plan.popular ? "bg-violet-50 border-violet-100" : "bg-white border-gray-200"
                    }`}
                  >
                    {plan.speed}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 bg-white border-b border-gray-200 font-medium">Package</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`p-4 text-center border-b ${
                      plan.popular ? "bg-violet-50 border-violet-100" : "bg-white border-gray-200"
                    }`}
                  >
                    {plan.package || "Not included"}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 bg-white border-b border-gray-200 font-medium">Best For</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`p-4 text-center border-b ${
                      plan.popular ? "bg-violet-50 border-violet-100" : "bg-white border-gray-200"
                    }`}
                  >
                    {plan.bestFor}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 bg-white border-b border-gray-200 font-medium align-top">Features</td>
                {plans.map((plan) => (
                  <td
                    key={plan.id}
                    className={`p-4 text-left border-b ${
                      plan.popular ? "bg-violet-50 border-violet-100" : "bg-white border-gray-200"
                    }`}
                  >
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-violet-600 shrink-0 mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 bg-white"></td>
                {plans.map((plan) => (
                  <td key={plan.id} className={`p-4 text-center ${plan.popular ? "bg-violet-50" : "bg-white"}`}>
                    <CallButton
                      text={`Call Now ${siteConfig.phone}`}
                      className="w-full bg-violet-600 hover:bg-violet-700 text-white"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
