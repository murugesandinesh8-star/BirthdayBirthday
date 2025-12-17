"use client"

import { motion } from "framer-motion"

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          {"💖".charAt(Math.floor(Math.random() * 1))}
        </motion.div>
      ))}

      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-3xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 6,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}
