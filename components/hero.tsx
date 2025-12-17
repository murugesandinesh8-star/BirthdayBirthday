"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">🥳🥳Happy Birthday Mathi</h1>
              <div className="flex items-center gap-3 mt-4">
                <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  You are just as stupid as you are always, Brain lost kid😂😂
                </p>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-md leading-relaxed">
              This page is to celebrate the most special day and this is a technical way 😅😅 of the A4 sheet full of emotions you have asked for.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex gap-3 text-3xl">
                <span className="animate-float">💕</span>
                <span className="animate-float" style={{ animationDelay: "0.5s" }}>
                  ✨
                </span>
                <span className="animate-float" style={{ animationDelay: "1s" }}>
                  💖
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Profile picture frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-60 animate-float"></div>

              {/* Profile image frame */}
              <div className="absolute inset-2 bg-white rounded-full shadow-2xl overflow-hidden">
                <img src="/beautiful-girl-birthday-celebration.jpeg" alt="Birthday girl" className="w-full h-full object-cover" />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 text-4xl animate-float">✨</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-float" style={{ animationDelay: "1s" }}>
                💖
              </div>
              <div className="absolute top-1/2 -right-12 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>
                💕
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
