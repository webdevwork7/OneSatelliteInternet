export const siteConfig = {
  name: "OneSatelliteInternet",
  description: "Find your perfect internet connection with the best deals online",
  phone: "+1 (888) 368-9983",
  phoneRaw: "+18883689983",
  address: "12 John F Kennedy Blvd, Somerset, NJ 08873, United States",
  email: "support@onesatelliteinternet.site",
  socialLinks: {
    facebook: "https://facebook.com/onesatelliteinternet",
    twitter: "https://twitter.com/onesatelliteinternet",
    instagram: "https://instagram.com/onesatelliteinternet",
  },
  features: [
    {
      title: "Seamless Connectivity",
      description: "Reliable satellite coverage across the nation",
      icon: "Wifi",
    },
    {
      title: "Exclusive $100 Reward",
      description: "Limited time offer for new customers",
      icon: "Gift",
    },
    {
      title: "Lightning-Fast Internet",
      description: "High-speed connections for all your needs",
      icon: "Zap",
    },
  ],
  providers: ["Starlink", "AT&T", "Viasat", "HughesNet", "T-Mobile"],
  stats: {
    customers: "2+ million",
    coverage: "99% of America",
    satisfaction: "98%",
  },
}

export type PlanFeature = {
  included: boolean
  name: string
}

export type Plan = {
  id: string
  name: string
  price: string
  speed: string
  package?: string
  bestFor: string
  popular?: boolean
  features: string[]
  setupFee?: number
  equipmentFee?: number
}

export const plans: Plan[] = [
  {
    id: "residential",
    name: "Residential Plan",
    price: "$120/mo + taxes",
    speed: "Low Latency Unlimited Speed",
    bestFor: "Home internet users",
    features: [
      "No data caps",
      "Stable and secure connectivity for your residence",
      "Enjoy seamless streaming and browsing",
      "Round-the-clock customer support",
      "99.9% reliability",
    ],
    setupFee: 0,
    equipmentFee: 0,
  },
  {
    id: "roam",
    name: "Roam Plans",
    price: "ROAM-50GB: $50/mo | Unlimited: $165/mo",
    speed: "Up to 500 Mbps",
    package: "Unlimited",
    bestFor: "Travelers & remote workers",
    popular: true,
    features: [
      "Reliable high-speed connectivity at sea",
      "24/7 onboard technical support",
      "Smooth streaming and seamless navigation",
      "Multi-device connectivity with secure encryption",
      "99.9% reliability",
    ],
    setupFee: 0,
    equipmentFee: 0,
  },
  {
    id: "boat",
    name: "Boat Plans",
    price: "Mobile 50GB: $50/mo | 1024GB: $165/mo",
    speed: "Up to 300 Mbps",
    package: "1024GB: $165/mo",
    bestFor: "Maritime users",
    features: [
      "Stable and secure connectivity on open waters",
      "Enjoy seamless streaming and browsing while offshore",
      "Round-the-clock customer support",
      "Weather-resistant equipment with easy installation",
      "End-to-end encryption for secure communications",
    ],
    setupFee: 0,
    equipmentFee: 0,
  },
]

export const planComparisonFeatures = ["Monthly Price", "Download Speed", "Package", "Best For", "Features"]

export const faqs = [
  {
    question: "How does satellite internet work?",
    answer:
      "Satellite internet works by transmitting data between your home, a satellite in space, and a ground station. The data travels up to the satellite and back down to Earth, allowing you to connect to the internet even in remote locations where traditional services aren't available.",
  },
  {
    question: "Is satellite internet available in my area?",
    answer:
      "Satellite internet is available virtually anywhere in the United States with a clear view of the southern sky. Unlike cable or fiber, satellite internet doesn't require infrastructure in your neighborhood, making it ideal for rural and remote areas.",
  },
  {
    question: "How fast is satellite internet?",
    answer:
      "Modern satellite internet can provide download speeds ranging from 25 Mbps to 500+ Mbps depending on the plan and provider. While not as fast as fiber in urban areas, today's satellite internet is significantly faster than older satellite technology and can support streaming, gaming, and video calls.",
  },
  {
    question: "Is there a data cap with satellite internet?",
    answer:
      "Some satellite internet plans come with data allowances, while others offer unlimited data. Basic plans typically offer 50GB per month, while premium plans may offer 1024GB or unlimited data. When you exceed your data allowance, your speed may be reduced for the remainder of the billing cycle.",
  },
  {
    question: "How much does satellite internet cost?",
    answer:
      "Satellite internet plans typically range from $50 to $165 per month depending on the speed and data allowance. There may also be equipment and installation fees, though many providers offer promotions that reduce or eliminate these costs.",
  },
]
