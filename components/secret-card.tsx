"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"
import PasswordModal from "./password-modal"

export default function SecretCard() {
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Something Special</h2>
        <p className="text-muted-foreground text-lg">Not so special and all😅, its a apology😅...</p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div whileHover={{ scale: 1.05 }} onClick={() => setShowPasswordModal(true)} className="w-full md:w-96">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 shadow-2xl cursor-pointer hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-7xl"
              >
                <Lock className="w-20 h-20 text-primary-foreground" />
              </motion.div>
              <h3 className="text-3xl font-bold text-primary-foreground text-center">Open and Watch</h3>
              <p className="text-primary-foreground/80 text-center">Click to unlock a Sorry message</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {showPasswordModal && <PasswordModal onClose={() => setShowPasswordModal(false)} />}
    </section>
  )
}
