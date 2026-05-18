"use client"

import { motion } from 'framer-motion'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useMusicPlayer } from '@/components/providers/music-provider'

export function MusicToggle() {
   const { isPlaying, toggle } = useMusicPlayer()

   return (
      <motion.button
         onClick={toggle}
         className="fixed top-6 right-6 z-40 w-12 h-12 flex items-center justify-center border border-primary/30 bg-card/80 backdrop-blur-sm text-primary hover:bg-primary/10 transition-colors"
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 1 }}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         title={isPlaying ? 'Mute music' : 'Play music'}
      >
         {isPlaying ? (
         <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative"
         >
            <FaVolumeUp className="w-5 h-5" />
            {/* Sound wave animation */}
            <motion.span
               className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary"
               animate={{ 
               scale: [1, 1.5, 1],
               opacity: [1, 0.5, 1]
               }}
               transition={{ duration: 1, repeat: Infinity }}
            />
         </motion.div>
         ) : (
         <FaVolumeMute className="w-5 h-5" />
         )}
      </motion.button>
   )
}
