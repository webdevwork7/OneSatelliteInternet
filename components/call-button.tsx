"use client"

import { Phone } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface CallButtonProps extends ButtonProps {
  showIcon?: boolean
  showText?: boolean
  text?: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
}

export function CallButton({
  showIcon = true,
  showText = true,
  text = "Call Now",
  className,
  variant = "default",
  ...props
}: CallButtonProps) {
  const handleCall = () => {
    window.location.href = `tel:${siteConfig.phoneRaw}`
  }

  // Update the CallButton component to ensure white text on purple buttons
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={variant}
        onClick={handleCall}
        className={cn("font-medium text-white", showIcon && showText ? "gap-2" : "", className)}
        {...props}
      >
        {showIcon && <Phone className="h-4 w-4" />}
        {showText && text}
      </Button>
    </motion.div>
  )
}
