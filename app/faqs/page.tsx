"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CallButton } from "@/components/call-button"
import { faqs } from "@/lib/constants"
import { siteConfig } from "@/lib/constants"

export default function FaqsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-violet-100 to-transparent">
        <div className="container px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common questions about satellite internet services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left font-medium py-4 hover:text-violet-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Additional FAQs */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Additional Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-additional-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-violet-600">
                    What equipment do I need for satellite internet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Satellite internet typically requires a satellite dish installed outside your home, a modem, and
                    sometimes a Wi-Fi router. The equipment needed may vary depending on the provider and plan you
                    choose. Most providers include professional installation to ensure optimal placement and setup of
                    your equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-additional-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-violet-600">
                    Does weather affect satellite internet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Severe weather conditions like heavy rain, snow, or thunderstorms can temporarily affect satellite
                    internet performance. However, modern satellite technology has significantly improved weather
                    resistance. Most users experience minimal disruptions, and service typically returns to normal
                    quickly once the severe weather passes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-additional-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-violet-600">
                    Can I use streaming services with satellite internet?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Yes, you can use streaming services like Netflix, Hulu, Amazon Prime Video, and others with
                    satellite internet. For standard definition (SD) streaming, speeds of 3-5 Mbps are typically
                    sufficient. For high definition (HD) streaming, 5-10 Mbps is recommended. For 4K streaming, speeds
                    of 25 Mbps or higher are ideal. Our plans offer speeds that can accommodate various streaming needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-additional-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-violet-600">
                    How long does installation take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Satellite internet installation typically takes 2-3 hours to complete. This includes mounting the
                    dish, running cables, setting up the modem and router, and ensuring everything is working properly.
                    Our professional installers will find the optimal location for your satellite dish to ensure the
                    best possible signal strength and reliability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-additional-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-violet-600">
                    Can I take my satellite internet service with me if I move?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    Yes, most satellite internet services can be moved to a new location. You'll need to contact
                    customer service to arrange for professional de-installation and re-installation at your new
                    address. Some providers may charge a relocation fee. For our mobile and boat plans, the service is
                    designed to be portable within the coverage area.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <div className="bg-violet-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our satellite internet experts are ready to answer any questions you may have about our services,
                pricing, or installation process.
              </p>
              <CallButton
                text={`Call Now ${siteConfig.phone}`}
                className="bg-violet-600 hover:bg-violet-700 text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
