"use client"

import { motion } from 'framer-motion'
import { useMusicPlayer } from '@/components/providers/music-provider'

interface OpeningScreenProps {
   guestName: string
   onOpen: () => void
}

export function OpeningScreen({ guestName, onOpen }: OpeningScreenProps) {
   const { play } = useMusicPlayer()

   const handleOpen = () => {
      play()
      onOpen()
}

return (
      <motion.div 
         className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background overflow-hidden"
         exit={{ opacity: 0, scale: 1.1 }}
         transition={{ duration: 1 }}
      >
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5">
         <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
         }} />
         </div>

         {/* Decorative Lines */}
         <motion.div 
         className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
         initial={{ scaleY: 0 }}
         animate={{ scaleY: 1 }}
         transition={{ delay: 0.5, duration: 1 }}
         />
         
         <motion.div 
         className="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
         initial={{ scaleY: 0 }}
         animate={{ scaleY: 1 }}
         transition={{ delay: 0.5, duration: 1 }}
         />

         <div className="relative z-10 text-center px-6 max-w-lg">
         <motion.p
            className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
         >
            Undangan Pernikahan
         </motion.p>

         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
         >
            <h1 className="font-[var(--font-great-vibes)] text-6xl md:text-7xl lg:text-8xl text-primary mb-2">
               Syamsul 
            </h1>
            <div className="flex items-center justify-center gap-4 my-4">
               <span className="w-16 h-px bg-primary/50" />
               <span className="text-primary text-2xl">&</span>
               <span className="w-16 h-px bg-primary/50" />
            </div>
            <h1 className="font-[var(--font-great-vibes)] text-6xl md:text-7xl lg:text-8xl text-primary">
               Iim
            </h1>
         </motion.div>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
         >
            <p className="text-muted-foreground mb-2 tracking-wider">Kepada Yth.</p>
            <p className="text-2xl md:text-3xl text-foreground font-light">
               {guestName || "Tamu Undangan"}
            </p>
            <p className="text-muted-foreground mt-2 tracking-wider text-sm">
               Anda diundang untuk menghadiri
            </p>
         </motion.div>

         <motion.button
            onClick={handleOpen}
            className="group relative px-12 py-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
         >
            <span className="absolute inset-0 border border-primary/50 transition-colors group-hover:border-primary" />
            <span className="absolute inset-[1px] bg-primary/5 transition-colors group-hover:bg-primary/10" />
            <span className="relative text-sm tracking-[0.3em] text-primary uppercase">
               Buka Undangan
            </span>
         </motion.button>

         <motion.p
            className="mt-6 text-xs text-muted-foreground/60 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
         >
            Klik untuk membuka dengan musik
         </motion.p>
         </div>

         {/* Corner Decorations */}
         <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-primary/30" />
         <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-primary/30" />
         <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-primary/30" />
         <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-primary/30" />
      </motion.div>
   )
}
