"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/constants"

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to {siteConfig.name}. By accessing or using our website, you agree to be bound by these Terms and
              Conditions.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the {siteConfig.name} website, you agree to be bound by these Terms and Conditions
              and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
              from using or accessing this site.
            </p>

            <h2>2. Service Description</h2>
            <p>
              {siteConfig.name} provides information about satellite internet services and facilitates connections
              between potential customers and service providers. We do not directly provide internet services but act as
              an authorized reseller and information resource.
            </p>

            <h2>3. User Obligations</h2>
            <p>Users of this website agree to:</p>
            <ul>
              <li>
                Provide accurate and complete information when using our contact forms or calling our representatives
              </li>
              <li>Use the website for lawful purposes only</li>
              <li>Not attempt to interfere with the proper working of the website</li>
              <li>Not attempt to circumvent any security measures</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of{" "}
              {siteConfig.name} or its content suppliers and is protected by United States and international copyright
              laws.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              This website is provided "as is" without any representations or warranties, express or implied.{" "}
              {siteConfig.name} makes no representations or warranties in relation to this website or the information
              and materials provided on this website.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              {siteConfig.name} will not be liable to you in relation to the contents of, or use of, or otherwise in
              connection with, this website for any indirect, special or consequential loss; or for any business losses,
              loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss
              of reputation or goodwill, or loss or corruption of information or data.
            </p>

            <h2>7. Service Availability</h2>
            <p>
              Service availability, speeds, and pricing may vary by location. All service details provided on this
              website are subject to verification of availability at your specific address. Final pricing, speeds, and
              terms will be confirmed during the ordering process.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              {siteConfig.name} reserves the right to modify these terms at any time. We will notify users of any
              changes by updating the date at the top of these Terms and Conditions.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the United States,
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at {siteConfig.email} or
              call us at {siteConfig.phone}.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: May 21, 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
