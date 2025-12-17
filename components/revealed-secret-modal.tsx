"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import Confetti from "./confetti"

interface RevealedSecretModalProps {
  onClose: () => void
}

export default function RevealedSecretModal({ onClose }: RevealedSecretModalProps) {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const secretMessage = `
Dear birthday girl,
This message is from Everyone. We wanted this day to be as special as you are.
You have the most beautiful heart, the brightest smile. Your kindness knows no bounds, your laugh is contagious, and your presence makes every day better.
Thank you for the memories we've shared and all the ones yet to come.

Actually the thing is, i dont know how many of us are going to post stories in insta, and thats why we placed a image as if like your dramatic and comedy photos in the left part.

And from Dinesh, ""Sorry kid, i didnt buy any gift for you, i will definitely buy you one thing which you would like""
Happy Birthday to the most special girl. 💕`

  return (
    <AnimatePresence>
      {showConfetti && <Confetti />}

      {/* FULLSCREEN OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"

      >
        {/* FULLSCREEN MODAL */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          className="grid h-[96vh] w-[96vw] grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* LEFT: IMAGE (FULLY VISIBLE) */}
          {/* <div className="h-screen flex items-center justify-center bg-white/30 backdrop-blur-xl">
            <img
              src="/potrait.jpeg"
              alt="Portrait"
              className="max-h-full max-w-full object-contain py-8"
            />
          </div> */}
          <div className="relative h-full flex items-center justify-center bg-white/40 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20" />
            <img
              src="/potrait.jpeg"
              alt="Portrait"
              className="h-screen z-10 max-h-full max-w-full object-contain py-8"
            />
          </div>



          {/* RIGHT: MESSAGE */}
          <div className="relative h-screen flex flex-col">
            <header className="shrink-0 px-16 py-10">
              <h1 className="text-5xl font-bold">Sorry Message</h1>
            </header>

            <div className="flex-1 overflow-y-auto px-16 pb-10">
              <p className="whitespace-pre-line text-xl leading-relaxed text-muted-foreground">
                {secretMessage}
              </p>
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-50 rounded-full bg-black/10 p-2 hover:bg-black/20 transition"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
