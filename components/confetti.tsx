"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Confetti {
  id: number
  x: number
  y: number
  delay: number
  duration: number
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const pieces = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }))
    setConfetti(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            x: `${piece.x}%`,
            y: `-10%`,
            opacity: 1,
            rotate: 0,
          }}
          animate={{
            y: "110%",
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
          className="absolute text-2xl"
        >
          {"💕✨💖".charAt(Math.floor(Math.random() * 3))}
        </motion.div>
      ))}
    </div>
  )
}
