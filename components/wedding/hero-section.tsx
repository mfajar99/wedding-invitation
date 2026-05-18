"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function HeroSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

   return (
      <section 
         ref={ref}
         className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
         {/* Background with overlay */}
         <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-fixed" />
         <div className="absolute inset-0 bg-background/85" />
         
         {/* Decorative elements */}
         <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`
         }} />
         </div>

         <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
         >
            <p className="text-sm tracking-[0.5em] text-primary/80 uppercase mb-6">
               Kami Akan Menikah
            </p>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
         >
            <h1 className="font-[var(--font-great-vibes)] text-7xl md:text-8xl lg:text-9xl text-primary leading-none">
               Syamsul
            </h1>
            
            <div className="flex items-center justify-center gap-6 my-6">
               <motion.span 
               className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
               initial={{ scaleX: 0 }}
               animate={isInView ? { scaleX: 1 } : {}}
               transition={{ duration: 1, delay: 0.5 }}
               />
               <motion.span 
               className="text-primary text-3xl font-light"
               initial={{ opacity: 0, rotate: -180 }}
               animate={isInView ? { opacity: 1, rotate: 0 } : {}}
               transition={{ duration: 1, delay: 0.6 }}
               >
               &
               </motion.span>
               <motion.span 
               className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
               initial={{ scaleX: 0 }}
               animate={isInView ? { scaleX: 1 } : {}}
               transition={{ duration: 1, delay: 0.5 }}
               />
            </div>
            
            <h1 className="font-[var(--font-great-vibes)] text-7xl md:text-8xl lg:text-9xl text-primary leading-none">
               Iim
            </h1>
         </motion.div>

         <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
         >
            <div className="inline-flex flex-col items-center px-8 py-6 border border-primary/20 bg-card/30 backdrop-blur-sm">
               <p className="text-xs tracking-[0.4em] text-muted-foreground uppercase mb-3">
               Simpan Tanggalnya
               </p>
               <p className="text-3xl md:text-4xl font-light text-foreground tracking-wider">
               31 . 05 . 2026
               </p>
               <p className="mt-3 text-muted-foreground tracking-wider">
               Masaran
               </p>
            </div>
         </motion.div>

         {/* Scroll indicator */}
         <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
         >
            <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="flex flex-col items-center gap-2"
            >
               <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Gulir</span>
               <svg 
               className="w-5 h-5 text-primary/60" 
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor"
               >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
            </motion.div>
         </motion.div>
         </div>

         {/* Corner decorations */}
         <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-primary/20" />
         <div className="absolute top-10 right-10 w-20 h-20 border-r border-t border-primary/20" />
         <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-primary/20" />
         <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-primary/20" />
      </section>
   )
}
