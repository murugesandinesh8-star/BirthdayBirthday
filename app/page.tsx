"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import MessageCards from "@/components/message-cards"
import SecretCard from "@/components/secret-card"
import FloatingShapes from "@/components/floating-shapes"
import HeartCursor from "@/components/heart-cursor"
import Footer from "@/components/footer"
import Confetti from "@/components/confetti"

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-secondary to-background overflow-x-hidden">
      <HeartCursor />
      {showConfetti && <Confetti />}
      <FloatingShapes />
      <Hero />
      <MessageCards />
      <SecretCard />
      <Footer />
    </main>
  )
}
