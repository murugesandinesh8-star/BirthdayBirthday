"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Heart {
  id: number
  x: number
  y: number
}

export default function HeartCursor() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    let lastX = 0
    let lastY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Create a heart every 10px movement
      const distance = Math.hypot(clientX - lastX, clientY - lastY)
      if (distance > 10) {
        const newHeart: Heart = {
          id: nextId,
          x: clientX,
          y: clientY,
        }
        setHearts((prev) => [...prev, newHeart])
        setNextId((prev) => prev + 1)
        lastX = clientX
        lastY = clientY

        // Remove heart after animation completes
        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
        }, 1000)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [nextId])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 1, scale: 1, x: heart.x, y: heart.y }}
          animate={{ opacity: 0, scale: 0.5, y: heart.y - 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed text-2xl"
        >
          💕
        </motion.div>
      ))}
    </div>
  )
}
