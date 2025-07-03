import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { CallButton } from "@/components/call-button"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Return Policy", href: "/returns" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
    {
      title: "Support",
      links: [{ label: "FAQs", href: "/faqs" }],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-white font-bold text-2xl">{siteConfig.name}</span>
            </Link>

            <p className="mb-4 text-gray-400 max-w-md">
              Providing high-speed satellite internet solutions nationwide. Connect from anywhere with reliable service
              and expert support.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <a href={siteConfig.socialLinks.facebook} className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={siteConfig.socialLinks.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href={siteConfig.socialLinks.instagram} className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-violet-400" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-violet-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white text-lg mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <CallButton variant="outline" className="bg-gray-800 hover:bg-gray-700 text-white" />
        </div>
      </div>
    </footer>
  )
}
