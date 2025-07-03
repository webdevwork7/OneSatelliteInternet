"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/constants"

export default function DisclaimerPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

          <div className="prose prose-lg max-w-none">
            <p>This disclaimer applies to the {siteConfig.name} website.</p>

            <h2>1. Information Accuracy</h2>
            <p>
              {siteConfig.name} makes every effort to ensure that the information on this website is accurate and
              up-to-date. However, we cannot guarantee that all information is completely accurate or current at all
              times. Pricing, promotions, and service availability are subject to change without notice.
            </p>

            <h2>2. Service Provider Relationship</h2>
            <p>
              {siteConfig.name} acts as an authorized reseller and information resource for various satellite internet
              service providers. We are not the direct provider of internet services. The actual services will be
              provided by the satellite internet company selected during the ordering process.
            </p>

            <h2>3. Service Availability and Performance</h2>
            <p>
              Satellite internet service availability, speeds, and performance may vary based on your specific location,
              weather conditions, and other factors. The information provided on this website regarding speeds, data
              allowances, and other service features represents typical performance but may not reflect the exact
              experience at your location.
            </p>

            <h2>4. External Links</h2>
            <p>
              This website may contain links to external websites that are not operated by {siteConfig.name}. We have no
              control over the content and practices of these sites and cannot accept responsibility for their
              respective privacy policies or content.
            </p>

            <h2>5. Professional Advice</h2>
            <p>
              The information on this website is provided for general informational purposes only and should not be
              construed as professional advice. Consult with appropriate professionals for advice specific to your
              situation.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {siteConfig.name} disclaims all liability for any
              damages whatsoever (including, without limitation, damages for loss of business profits, business
              interruption, loss of business information, or any other pecuniary loss) arising out of the use or
              inability to use the information on this website.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              If you have any questions about this disclaimer, please contact us at {siteConfig.email} or call us at{" "}
              {siteConfig.phone}.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: May 21, 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
