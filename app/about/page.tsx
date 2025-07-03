"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CallButton } from "@/components/call-button"
import { siteConfig } from "@/lib/constants"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About {siteConfig.name}</h1>
            <p className="text-lg text-gray-600 mb-8">Connecting America with reliable satellite internet solutions</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At {siteConfig.name}, our mission is to bridge the digital divide by providing high-quality internet
                access to every household in America, regardless of location.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that reliable internet is no longer a luxury—it's a necessity for education, work,
                healthcare, and staying connected with loved ones. That's why we're committed to delivering dependable
                satellite internet solutions that empower communities and individuals across the nation.
              </p>
              <p className="text-lg text-gray-600">
                Our team of experts works tirelessly to ensure you receive the best service, support, and value for your
                investment in satellite internet technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/rural-home-satellite.png"
                  alt="Satellite dish installation"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reliability",
                description: "We deliver consistent, dependable service that our customers can count on day after day.",
              },
              {
                title: "Innovation",
                description: "We continuously seek cutting-edge solutions to improve internet access and quality.",
              },
              {
                title: "Customer Focus",
                description: "We put our customers first, providing exceptional support and tailored solutions.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                {siteConfig.name} was founded in 2015 with a simple goal: to make high-speed internet accessible to
                everyone, everywhere. We recognized that millions of Americans in rural and remote areas were being left
                behind in the digital age due to limited internet options.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Starting with just a small team of telecommunications experts, we've grown to become a trusted provider
                serving customers across all 50 states. Our partnerships with leading satellite technology companies
                allow us to offer cutting-edge solutions that deliver reliable connectivity even in the most challenging
                locations.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped over {siteConfig.stats.customers} households connect to the digital
                world, and we're just getting started.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/abstract-geometric-shapes.png"
                  alt="OneSatelliteInternet team working together"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Get Connected?
            </motion.h2>

            <motion.p
              className="text-lg text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Speak with our experts today to find the perfect internet solution for your needs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CallButton
                text={`Call Now ${siteConfig.phone}`}
                className="text-lg px-6 py-6 bg-white text-primary hover:bg-white/90"
                variant="outline"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
