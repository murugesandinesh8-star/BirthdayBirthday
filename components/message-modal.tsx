"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface MessageModalProps {
  message: {
    id: number
    name: string
    message: string
    image: string
  }
  onClose: () => void
}

export default function MessageModal({ message, onClose }: MessageModalProps) {
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
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl w-full md:w-[70vw] h-[60vh] md:h-[70vh] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row h-full">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-2/5 h-auto md:h-full">
              <img
                src={message.image || "/placeholder.svg"}
                alt={message.name}
                className="w-full h-full object-cover rounded-t-3xl md:rounded-none md:rounded-l-3xl"
              />
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto smooth-scroll p-6 md:p-10 flex flex-col justify-start">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              >
                {message.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-wrap"
              >
                {message.message}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
