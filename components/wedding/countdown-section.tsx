"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { weddingConfig } from '@/lib/wedding-config'

interface TimeUnit {
   value: number
   label: string
}

function CountdownUnit({ value, label, delay }: TimeUnit & { delay: number }) {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

return (
   <motion.div
   ref={ref}
   className="flex flex-col items-center"
   initial={{ opacity: 0, scale: 0.8 }}
   animate={isInView ? { opacity: 1, scale: 1 } : {}}
   transition={{ duration: 0.6, delay }}
   >
   <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border border-primary/30">
      <span className="text-3xl md:text-5xl font-light text-foreground">
         {String(value).padStart(2, '0')}
      </span>
   </div>
   <span className="mt-3 text-xs tracking-[0.3em] text-primary uppercase">
      {label}
   </span>
   </motion.div>
   )
}

export function CountdownSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })
   const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
   })

   useEffect(() => {
      // const weddingDate = new Date(weddingConfig.wedding.date).getTime()
      const weddingDate = new Date("2026-05-31T07:00:00").getTime()

      const calculateTimeLeft = () => {
         const now = new Date().getTime()
         const difference = weddingDate - now

         if (difference > 0) {
         setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
         })
         } else {
            setTimeLeft({
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0
            })
         }
      }

      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)

      return () => clearInterval(timer)
   }, [])

   return (
      <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute inset-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
         </div>

         <div className="max-w-4xl mx-auto text-center relative">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
               Hitung Setiap Detik
            </p>
            <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary mb-12">
               Hitung Mundur
            </h2>
         </motion.div>

         <div className="flex justify-center gap-4 md:gap-8">
            <CountdownUnit value={timeLeft.days} label="Hari" delay={0.2} />
            <CountdownUnit value={timeLeft.hours} label="Jam" delay={0.3} />
            <CountdownUnit value={timeLeft.minutes} label="Menit" delay={0.4} />
            <CountdownUnit value={timeLeft.seconds} label="Detik" delay={0.5} />
         </div>

         <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
         >
            <p className="text-muted-foreground">
               Menuju hari bahagia kami
            </p>
         </motion.div>
         </div>
      </section>
   )
}
