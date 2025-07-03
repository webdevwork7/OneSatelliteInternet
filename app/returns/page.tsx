"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/constants"

export default function ReturnsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Return Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              This Return Policy outlines the terms and conditions for returns and cancellations of satellite internet
              services ordered through {siteConfig.name}.
            </p>

            <h2>1. Service Cancellation</h2>
            <p>
              Most satellite internet services include a trial period during which you can cancel your service without
              incurring long-term contract penalties. The specific trial period varies by provider and plan, typically
              ranging from 14 to 30 days from the date of installation.
            </p>
            <p>
              To cancel your service during the trial period, contact our customer service team at {siteConfig.phone} or
              email {siteConfig.email}. We will guide you through the cancellation process with your specific provider.
            </p>

            <h2>2. Equipment Returns</h2>
            <p>
              If you cancel your service during the trial period, you will need to return any equipment provided by the
              satellite internet service provider. The following conditions apply:
            </p>
            <ul>
              <li>Equipment must be returned in its original packaging if possible</li>
              <li>All components, accessories, and documentation must be included</li>
              <li>Equipment must be in good working condition with no physical damage</li>
              <li>Returns must be initiated within the specified timeframe provided by the service provider</li>
            </ul>
            <p>Return shipping instructions will be provided when you initiate the cancellation process.</p>

            <h2>3. Refunds</h2>
            <p>
              Refund policies vary by service provider. Generally, if you cancel during the trial period and return all
              equipment as required:
            </p>
            <ul>
              <li>Service fees paid will be refunded, potentially prorated based on days of service used</li>
              <li>Equipment fees may be refunded if the equipment is returned in proper condition</li>
              <li>Installation fees are typically non-refundable</li>
              <li>Shipping fees are typically non-refundable</li>
            </ul>
            <p>
              Refunds are typically processed within 14-30 business days after the returned equipment has been received
              and inspected by the service provider.
            </p>

            <h2>4. Cancellation After Trial Period</h2>
            <p>
              If you cancel your service after the trial period has ended, early termination fees may apply according to
              the terms of your service agreement with the provider. These fees vary by provider and the remaining
              length of your contract.
            </p>

            <h2>5. Service Issues</h2>
            <p>
              If you experience technical issues with your satellite internet service, please contact customer support
              before initiating a return. In many cases, technical issues can be resolved without cancellation.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              For questions about returns or cancellations, please contact our customer service team at{" "}
              {siteConfig.phone} or email {siteConfig.email}.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: May 21, 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
