"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGift, FaCopy, FaCheck } from 'react-icons/fa'
import { weddingConfig } from '@/lib/wedding-config'

export function GiftSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })
   const [copied, setCopied] = useState(false)

   const copyToClipboard = () => {
         navigator.clipboard.writeText(weddingConfig.gift.accountNumber)
         setCopied(true)
         setTimeout(() => setCopied(false), 2000)
   }

   return (
      <section ref={ref} className="py-24 md:py-32 px-6 bg-card/30 relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rotate-45" />
         <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary/10 rotate-45" />

         <div className="max-w-2xl mx-auto text-center relative">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 border border-primary/30">
               <FaGift className="w-8 h-8 text-primary" />
            </div>

            <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
               Amplop Digital
            </p>
            <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary mb-8">
               Hadiah Pernikahan
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg mx-auto">
               {weddingConfig.gift.message}
            </p>
         </motion.div>

         <motion.div
            className="relative p-8 border border-primary/20 bg-card/50"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-background">
               <span className="text-xs tracking-[0.2em] text-primary uppercase">Transfer Bank</span>
            </div>

            <div className="space-y-4">
               <div>
               <p className="text-sm text-muted-foreground mb-1">Nama Bank</p>
               <p className="text-lg text-foreground">{weddingConfig.gift.bankName}</p>
               </div>

               <div>
               <p className="text-sm text-muted-foreground mb-1">Atas Nama</p>
               <p className="text-lg text-foreground">{weddingConfig.gift.accountName}</p>
               </div>

               <div>
               <p className="text-sm text-muted-foreground mb-1">Nomor Rekening</p>
               <div className="flex items-center justify-center gap-3">
                  <p className="text-lg text-foreground font-mono">{weddingConfig.gift.accountNumber}</p>
                  <button
                     onClick={copyToClipboard}
                     className="p-2 text-primary/70 hover:text-primary transition-colors"
                     title="Copy to clipboard"
                  >
                     {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
                  </button>
               </div>
               </div>
            </div>
         </motion.div>

         <motion.div
            className="relative p-8 border border-primary/20 bg-card/50 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-background">
               <span className="text-xs tracking-[0.2em] text-primary uppercase">Transfer Bank</span>
            </div>

            <div className="space-y-4">
               <div>
               <p className="text-sm text-muted-foreground mb-1">Nama Bank</p>
               <p className="text-lg text-foreground">{weddingConfig.gift_2.bankName}</p>
               </div>

               <div>
               <p className="text-sm text-muted-foreground mb-1">Atas Nama</p>
               <p className="text-lg text-foreground">{weddingConfig.gift_2.accountName}</p>
               </div>

               <div>
               <p className="text-sm text-muted-foreground mb-1">Nomor Rekening</p>
               <div className="flex items-center justify-center gap-3">
                  <p className="text-lg text-foreground font-mono">{weddingConfig.gift_2.accountNumber}</p>
                  <button
                     onClick={() => {
                        navigator.clipboard.writeText(weddingConfig.gift_2.accountNumber)
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                     }}
                     className="p-2 text-primary/70 hover:text-primary transition-colors"
                     title="Salin ke clipboard"
                  >
                     {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
                  </button>
               </div>
               </div>
            </div>
         </motion.div>

         <motion.p
            className="mt-8 text-sm text-muted-foreground/60"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
         >
            Terima kasih atas cinta dan kebaikan Anda
         </motion.p>
         </div>
      </section>
   )
}
