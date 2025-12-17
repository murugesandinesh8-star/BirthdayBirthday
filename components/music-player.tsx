"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <>
              <Pause className="w-6 h-6" />
              <motion.div
                animate={{ scaleY: [1, 0.5, 1, 0.8, 1] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                className="flex gap-1"
              >
                <div className="w-1 h-4 bg-primary-foreground rounded-full"></div>
                <div className="w-1 h-6 bg-primary-foreground rounded-full"></div>
                <div className="w-1 h-4 bg-primary-foreground rounded-full"></div>
              </motion.div>
            </>
          ) : (
            <Play className="w-6 h-6" />
          )}
        </div>
      </motion.button>
    </>
  )
}
