"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/constants"

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p>
              At {siteConfig.name}, we are committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our website or contact us.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and address when you fill out
                contact forms or call us
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including IP address, browser
                type, pages visited, and time spent on the site
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your device that help us improve your experience on
                our website
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Connect you with appropriate satellite internet service providers</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send you information about promotions or offers (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Satellite internet service providers to fulfill your service requests</li>
              <li>Third-party service providers who assist us in operating our website and business</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>6. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 16 years of age, and we do not knowingly collect personal
              information from children.
            </p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at {siteConfig.email} or call us at{" "}
              {siteConfig.phone}.
            </p>

            <p className="text-sm text-gray-500 mt-8">Last updated: May 21, 2025</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
