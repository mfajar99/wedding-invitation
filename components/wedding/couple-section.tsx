"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { weddingConfig } from '@/lib/wedding-config'

// Elegant male silhouette illustration
function MaleIllustration() {
   return (
      <svg viewBox="0 0 200 280" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Decorative circle background */}
         <circle cx="100" cy="140" r="95" className="stroke-primary/10" strokeWidth="1" fill="none" />
         <circle cx="100" cy="140" r="85" className="stroke-primary/5" strokeWidth="1" fill="none" />
         
         {/* Head */}
         <ellipse cx="100" cy="65" rx="28" ry="32" className="fill-primary/20 stroke-primary/40" strokeWidth="1.5" />
         
         {/* Hair */}
         <path d="M72 55 Q72 35 100 33 Q128 35 128 55 Q125 45 100 43 Q75 45 72 55" className="fill-primary/30" />
         
         {/* Neck */}
         <path d="M92 95 L92 105 Q92 110 100 110 Q108 110 108 105 L108 95" className="fill-primary/15 stroke-primary/30" strokeWidth="1" />
         
         {/* Suit/Shoulders */}
         <path d="M55 180 Q55 120 75 115 L92 110 Q100 115 108 110 L125 115 Q145 120 145 180" className="fill-primary/15 stroke-primary/30" strokeWidth="1.5" />
         
         {/* Suit lapels */}
         <path d="M85 115 L95 145 L100 140 L105 145 L115 115" className="stroke-primary/40" strokeWidth="1.5" fill="none" />
         
         {/* Tie */}
         <path d="M97 118 L100 125 L103 118 M100 125 L97 160 L100 165 L103 160 L100 125" className="fill-primary/25 stroke-primary/40" strokeWidth="1" />
         
         {/* Shirt collar */}
         <path d="M92 112 L97 118 L100 115 L103 118 L108 112" className="stroke-primary/40" strokeWidth="1.5" fill="none" />
         
         {/* Suit buttons */}
         <circle cx="100" cy="175" r="2" className="fill-primary/40" />
         <circle cx="100" cy="185" r="2" className="fill-primary/40" />
         
         {/* Decorative flourish bottom */}
         <path d="M60 220 Q80 210 100 215 Q120 210 140 220" className="stroke-primary/20" strokeWidth="1" fill="none" />
         <path d="M70 230 Q85 225 100 228 Q115 225 130 230" className="stroke-primary/15" strokeWidth="1" fill="none" />
      </svg>
   )
}

// Elegant female silhouette illustration with hijab
function FemaleIllustration() {
   return (
      <svg viewBox="0 0 200 280" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Decorative circle background */}
         <circle cx="100" cy="140" r="95" className="stroke-primary/10" strokeWidth="1" fill="none" />
         <circle cx="100" cy="140" r="85" className="stroke-primary/5" strokeWidth="1" fill="none" />
         
         {/* Hijab outer */}
         <path d="M55 80 Q55 40 100 35 Q145 40 145 80 Q150 100 145 130 Q140 160 130 170 L70 170 Q60 160 55 130 Q50 100 55 80" className="fill-primary/15 stroke-primary/30" strokeWidth="1.5" />
         
         {/* Face */}
         <ellipse cx="100" cy="75" rx="25" ry="28" className="fill-primary/20 stroke-primary/40" strokeWidth="1.5" />
         
         {/* Hijab inner frame */}
         <path d="M75 55 Q75 45 100 42 Q125 45 125 55 Q128 70 125 90 Q120 100 100 102 Q80 100 75 90 Q72 70 75 55" className="stroke-primary/25" strokeWidth="1" fill="none" />
         
         {/* Dress/Body */}
         <path d="M50 240 Q50 180 70 170 Q85 165 100 168 Q115 165 130 170 Q150 180 150 240" className="fill-primary/15 stroke-primary/30" strokeWidth="1.5" />
         
         {/* Dress neckline decoration */}
         <path d="M80 172 Q90 178 100 175 Q110 178 120 172" className="stroke-primary/40" strokeWidth="1.5" fill="none" />
         
         {/* Elegant brooch/decoration */}
         <circle cx="100" cy="178" r="4" className="fill-primary/30 stroke-primary/50" strokeWidth="1" />
         <circle cx="100" cy="178" r="2" className="fill-primary/50" />
         
         {/* Hijab draping lines */}
         <path d="M70 130 Q65 150 68 170" className="stroke-primary/20" strokeWidth="1" fill="none" />
         <path d="M130 130 Q135 150 132 170" className="stroke-primary/20" strokeWidth="1" fill="none" />
         
         {/* Dress pattern lines */}
         <path d="M75 200 Q88 195 100 198 Q112 195 125 200" className="stroke-primary/15" strokeWidth="1" fill="none" />
         <path d="M70 220 Q85 215 100 218 Q115 215 130 220" className="stroke-primary/15" strokeWidth="1" fill="none" />
         
         {/* Decorative flourish bottom */}
         <path d="M60 250 Q80 245 100 248 Q120 245 140 250" className="stroke-primary/20" strokeWidth="1" fill="none" />
      </svg>
   )
}

function CoupleCard({ 
   name, 
   fullName, 
   parents, 
   gender,
   delay = 0 
}: { 
   name: string
   fullName: string
   parents: string
   gender: 'male' | 'female'
   delay?: number
}) {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

   return (
      <motion.div
         ref={ref}
         className="flex flex-col items-center text-center"
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8, delay }}
      >
         <div className="relative mb-8">
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-primary/10 rounded-full" />
            
            <div className="relative w-40 h-56 md:w-48 md:h-64 overflow-hidden flex items-center justify-center">
               {gender === 'male' ? <MaleIllustration /> : <FemaleIllustration />}
            </div>
         </div>

         <h3 className="font-[var(--font-great-vibes)] text-4xl md:text-5xl text-primary mb-3">
            {name}
         </h3>
         
         <p className="text-lg text-foreground font-light tracking-wide mb-2">
            {fullName}
         </p>
         
         <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-4 whitespace-pre-line">
            {parents}
         </p>
      </motion.div>
   )
}

export function CoupleSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

   return (
      <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute inset-0 opacity-5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary" />
         </div>

         <div className="max-w-5xl mx-auto">
         <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
               Pasangan Bahagia
            </p>
            <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary">
               Mempelai
            </h2>
         </motion.div>

         <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
            <CoupleCard 
               name={weddingConfig.bride.name}
               fullName={weddingConfig.bride.fullName}
               parents={weddingConfig.bride.parents}
               gender="male"
               delay={0.2}
            />
            
            {/* Ampersand in the middle for large screens */}
            <motion.div 
               className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
            >
               <span className="text-6xl text-primary/30 font-[var(--font-great-vibes)]">&</span>
            </motion.div>

            <CoupleCard 
               name={weddingConfig.groom.name}
               fullName={weddingConfig.groom.fullName}
               parents={weddingConfig.groom.parents}
               gender="female"
               delay={0.4}
            />
         </div>

         {/* Quote */}
         <motion.blockquote
            className="text-center mt-20 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
         >
            <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
               &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-primary/60 not-italic tracking-wider">
               — QS. Ar-Rum: 21
            </cite>
         </motion.blockquote>
         </div>
      </section>
   )
}
