"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Wifi, Zap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CallButton } from "@/components/call-button"
import { siteConfig } from "@/lib/constants"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-400/20" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            <div className="w-2 h-2 bg-white/20 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-10 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <Wifi className="h-8 w-8 text-violet-300" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <Zap className="h-8 w-8 text-cyan-300" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-20 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <Globe className="h-8 w-8 text-pink-300" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                #1 Satellite Internet Provider in America
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Connect to the</span>
            <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Future of Internet
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience lightning-fast satellite internet with unlimited connectivity. Stay connected anywhere on Earth
            with our cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CallButton
              text={`Call Now ${siteConfig.phone}`}
              className="text-lg px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105"
            />

            <Button
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 rounded-xl shadow-lg transition-all duration-300"
              asChild
            >
              <a href="#plans" className="inline-flex items-center gap-2">
                Explore Plans
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "2M+", label: "Happy Customers", icon: "👥" },
              { number: "99.9%", label: "Uptime Reliability", icon: "⚡" },
              { number: "24/7", label: "Expert Support", icon: "🛡️" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Direct contact info */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 inline-block">
              <p className="flex items-center justify-center gap-3 text-white text-lg">
                <Phone className="h-5 w-5 text-violet-400" />
                <span className="font-medium">Direct Line:</span>
                <span className="font-bold text-violet-300">{siteConfig.phone}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
