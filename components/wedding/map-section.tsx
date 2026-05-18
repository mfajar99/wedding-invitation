"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa'
import { weddingConfig } from '@/lib/wedding-config'

export function MapSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })

   const { lat, lng } = weddingConfig.wedding.coordinates
   
   const mapUrl = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d579.8933198220041!2d113.21685650371865!3d-6.897909290642527!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1778376919698!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`

   return (
      <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
         <div className="max-w-5xl mx-auto">
         <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
               Temukan Jalannya
            </p>
            <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary mb-6">
               Lokasi
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
               Bergabunglah bersama kami di lokasi pernikahan yang indah di Sampang, Madura
            </p>
         </motion.div>

         {/* Map */}
         <motion.div
            className="relative aspect-video w-full mb-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <div className="absolute inset-0 border border-primary/20" />
            <iframe
               src={mapUrl}
               className="w-full h-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Wedding Location Map"
            />
         </motion.div>

         {/* Location Cards */}
         <div className="grid md:grid-cols-2 gap-6">
            <motion.div
               className="p-6 border border-primary/20 bg-card/30"
               initial={{ opacity: 0, x: -30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
            >
               <div className="flex items-start gap-4">
               <div className="w-10 h-10 flex items-center justify-center border border-primary/30 flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
               </div>
               <div>
                  <h3 className="text-sm tracking-[0.2em] text-primary uppercase mb-2">AKAD NIKAH</h3>
                  <p className="text-lg text-foreground mb-1">{weddingConfig.wedding.venue.ceremony.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{weddingConfig.wedding.venue.ceremony.address}</p>
                  <a
                     href={weddingConfig.wedding.venue.ceremony.mapUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                     <FaDirections className="w-3 h-3" />
                     Petunjuk Arah
                  </a>
               </div>
               </div>
            </motion.div>

            <motion.div
               className="p-6 border border-primary/20 bg-card/30"
               initial={{ opacity: 0, x: 30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.5 }}
            >
               <div className="flex items-start gap-4">
               <div className="w-10 h-10 flex items-center justify-center border border-primary/30 flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
               </div>
               <div>
                  <h3 className="text-sm tracking-[0.2em] text-primary uppercase mb-2">MENGANTAR MEMPELAI PRIA</h3>
                  <p className="text-lg text-foreground mb-1">{weddingConfig.wedding.venue.reception.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">{weddingConfig.wedding.venue.reception.address}</p>
                  <a
                     href={weddingConfig.wedding.venue.reception.mapUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                     <FaDirections className="w-3 h-3" />
                     Petunjuk Arah
                  </a>
               </div>
               </div>
            </motion.div>
         </div>
         </div>
      </section>
   )
}
