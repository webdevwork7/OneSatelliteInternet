"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Rural Montana",
    avatar: "/woman-portrait.png",
    rating: 5,
    text: "After struggling with slow DSL for years, switching to OneSatelliteInternet has been life-changing. I can finally work from home effectively and my kids can do their homework online without frustration.",
  },
  {
    name: "Michael Rodriguez",
    location: "Arizona",
    avatar: "/thoughtful-man-portrait.png",
    rating: 5,
    text: "OneSatelliteInternet's installation was quick and professional. The speeds are consistently good, even during peak hours. Customer service has been responsive whenever I've had questions.",
  },
  {
    name: "Emily Chen",
    location: "Remote Alaska",
    avatar: "/asian-woman-portrait.png",
    rating: 4,
    text: "Living in such a remote area, I never thought I'd have reliable internet. OneSatelliteInternet has been a game-changer - now I can video call my family and stream movies just like anyone else.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who have transformed their internet experience with OneSatelliteInternet
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
