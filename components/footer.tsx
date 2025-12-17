"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-primary/10 to-transparent py-12 px-4 mt-12 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-lg text-muted-foreground mb-4">Thambi Website ah tholacha sangu thaan unnakku.</p>
        <div className="flex justify-center gap-3 text-3xl">
          <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            💕
          </motion.span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
          >
            ✨
          </motion.span>
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
          >
            💖
          </motion.span>
        </div>
      </motion.div>
    </footer>
  )
}
