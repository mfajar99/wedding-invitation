"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaChurch, FaGlassCheers, FaMapMarkerAlt, FaClock, FaHome, FaCalendar } from 'react-icons/fa'
import { weddingConfig } from '@/lib/wedding-config'
import { FaCar } from 'react-icons/fa6';

interface EventCardProps {
   icon: React.ReactNode
   title: string
   venue: string
   address: string
   time: string
   date: string
   mapUrl: string
   delay?: number
}

function EventCard({ icon, title, venue, address, time, date, mapUrl, delay = 0 }: EventCardProps) {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

   return (
      <motion.div
         ref={ref}
         className="relative group"
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8, delay }}
      >
         <div className="absolute inset-0 border border-primary/10 group-hover:border-primary/30 transition-colors" />
         <div className="p-8 md:p-10 text-center">
         <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-primary/30 text-primary">
            {icon}
         </div>
         
         <h3 className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
            {title}
         </h3>
         
         <h4 className="text-2xl md:text-3xl font-light text-foreground mb-4">
            {venue}
         </h4>
         
         <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <FaMapMarkerAlt className="w-4 h-4 text-primary/50" />
            <p className="text-sm">{address}</p>
         </div>
         
         <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <FaClock className="w-4 h-4 text-primary/50" />
            <p className="text-sm">{time}</p>
             <FaCalendar className="w-4 h-4 text-primary/50" />
            <p className="text-sm">{date}</p>
         </div>

         <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 border border-primary/30 text-primary text-sm tracking-wider hover:bg-primary/10 transition-colors"
         >
            <FaMapMarkerAlt className="w-3 h-3" />
            Lihat Peta
         </a>
         </div>
      </motion.div>
   )
}

export function EventSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

   return (
      <section ref={ref} className="py-24 md:py-32 px-6 bg-card/30 relative overflow-hidden">
         {/* Decorative background */}
         <div className="absolute inset-0 opacity-5">
         <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="eventPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="10" cy="10" r="1" fill="currentColor" className="text-primary" />
            </pattern>
            <rect width="100" height="100" fill="url(#eventPattern)" />
         </svg>
         </div>

         <div className="max-w-5xl mx-auto relative">
         <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
               Detail Acara
            </p>
            <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary mb-6">
               Acara Pernikahan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
               Bergabunglah bersama kami dalam merayakan cinta dengan dua acara yang indah
            </p>
         </motion.div>

         <div className="grid md:grid-cols-2 gap-8">
            <EventCard
               icon={<FaHome className="w-6 h-6" />}
               title="Akad Nikah"
               venue={weddingConfig.wedding.venue.ceremony.name}
               address={weddingConfig.wedding.venue.ceremony.address}
               time={weddingConfig.wedding.venue.ceremony.time}
               date={weddingConfig.wedding.venue.ceremony.date}
               mapUrl={weddingConfig.wedding.venue.ceremony.mapUrl}
               delay={0.2}
            />
            
            <EventCard
               icon={<FaHome className="w-6 h-6" />}
               title="Mengantar Mempelai Pria"
               venue={weddingConfig.wedding.venue.reception.name}
               address={weddingConfig.wedding.venue.reception.address}
               time={weddingConfig.wedding.venue.reception.time}
               date={weddingConfig.wedding.venue.reception.date}
               mapUrl={weddingConfig.wedding.venue.reception.mapUrl}
               delay={0.4}
            />
         </div>

         {/* Dress code note */}
         <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
         >
            <p className="text-sm text-muted-foreground">
               <span className="text-primary">Dresscode:</span> Bebas Rapi / Formal
            </p>
         </motion.div>
         </div>
      </section>
   )
}
