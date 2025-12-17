"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Shape = {
  x: number
  y: number
  rotate: number
  duration: number
  delay: number
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    const w = window.innerWidth
    const h = window.innerHeight

    setShapes(
      Array.from({ length: 14 }).map(() => ({
        x: Math.random() * w,
        y: h + 50,
        rotate: Math.random() * 360,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 5,
      }))
    )
  }, [])

  if (shapes.length === 0) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          initial={{
            x: s.x,
            y: s.y,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            rotate: s.rotate,
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        >
          {i % 2 === 0 ? "💖" : "✨"}
        </motion.div>
      ))}
    </div>
  )
}
