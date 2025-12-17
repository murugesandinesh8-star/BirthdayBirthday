"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import RevealedSecretModal from "./revealed-secret-modal"

interface PasswordModalProps {
  onClose: () => void
}

export default function PasswordModal({ onClose }: PasswordModalProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "18/12/2005") {
      setShowSecret(true)
      setPassword("")
      setError(false)
    } else {
      setError(true)
      setPassword("")
      setTimeout(() => setError(false), 500)
    }
  }

  if (showSecret) {
    return <RevealedSecretModal onClose={onClose} />
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl ${error ? "animate-shake" : ""}`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-foreground">Unlock</h3>
            <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-muted-foreground mb-8">Enter your special date to unlock the message (hint: DD/MM/YYYY)</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter date"
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-destructive mt-2 text-sm font-medium"
                >
                  Wrong password, try again!
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Unlock
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
