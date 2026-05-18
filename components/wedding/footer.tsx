"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHeart } from 'react-icons/fa'

export function Footer() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-50px" })

   return (
      <footer ref={ref} className="py-16 px-6 border-t border-primary/10 relative overflow-hidden">
         <div className="max-w-4xl mx-auto text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <h2 className="font-[var(--font-great-vibes)] text-4xl md:text-5xl text-primary mb-6">
               Syamsul & Iim
            </h2>
            
            <p className="text-2xl text-foreground font-light tracking-wider mb-8">
               31 . 05 . 2026
            </p>

            <p className="text-muted-foreground text-sm mb-4">
               Kami sangat senang dapat berbagi hari istimewa ini dengan Anda
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground/60 text-xs">
               <span>Dibuat dengan</span>
               <FaHeart className="w-3 h-3 text-primary" />
               <span>untuk Syamsul & Iim</span>
            </div>
         </motion.div>
         </div>

         {/* Decorative bottom line */}
         <motion.div
         className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
         initial={{ scaleX: 0 }}
         animate={isInView ? { scaleX: 1 } : {}}
         transition={{ duration: 1, delay: 0.5 }}
         />
      </footer>
   )
}
