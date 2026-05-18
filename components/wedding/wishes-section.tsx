"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaUser, FaPaperPlane, FaQuoteLeft } from 'react-icons/fa'

interface Wish {
   id: number
   name: string
   message: string
   date: string
}

const initialWishes: Wish[] = [
   // {
   //    id: 1,
   //    name: "Emily & David",
   //    message: "Wishing you a lifetime of love and happiness! May your journey together be filled with beautiful moments and endless joy.",
   //    date: "2 days ago"
   // },
   // {
   //    id: 2,
   //    name: "Michael Thompson",
   //    message: "Congratulations to the most beautiful couple! Your love story inspires us all. Here's to forever!",
   //    date: "3 days ago"
   // },
   // {
   //    id: 3,
   //    name: "Jennifer Williams",
   //    message: "So happy for you both! May your love grow stronger with each passing day. Can't wait to celebrate with you!",
   //    date: "5 days ago"
   // }
]

function WishCard({ wish, index }: { wish: Wish; index: number }) {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-50px" })

   return (
      <motion.div
         ref={ref}
         className="relative p-6 border border-primary/10 bg-card/30"
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.6, delay: index * 0.1 }}
      >
         <FaQuoteLeft className="absolute top-4 right-4 w-6 h-6 text-primary/10" />
         
         <p className="text-muted-foreground leading-relaxed mb-4 italic">
         &ldquo;{wish.message}&rdquo;
         </p>
         
         <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
               <FaUser className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-foreground">{wish.name}</span>
         </div>
         <span className="text-xs text-muted-foreground/60">{wish.date}</span>
         </div>
      </motion.div>
   )
}

export function WishesSection() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, margin: "-100px" })
   const [wishes, setWishes] = useState<Wish[]>(initialWishes)
   const [formData, setFormData] = useState({ name: '', message: '' })
   const [isSubmitting, setIsSubmitting] = useState(false)

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!formData.name || !formData.message) return

      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1000))

      const newWish: Wish = {
         id: wishes.length + 1,
         name: formData.name,
         message: formData.message,
         date: "Just now"
      }

      setWishes([newWish, ...wishes])
      setFormData({ name: '', message: '' })
      setIsSubmitting(false)
   }

   return (
      <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
         <div className="max-w-4xl mx-auto">
         <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
         >
            <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
               Bagikan Cinta Anda
            </p>
            <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary mb-6">
               Ucapan & Doa
            </h2>
            <p className="text-muted-foreground">
               Tinggalkan ucapan dan doa terbaik Anda untuk pengantin
            </p>
         </motion.div>

         {/* Form */}
         <motion.form
            onSubmit={handleSubmit}
            className="mb-12 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
         >
            <div className="grid md:grid-cols-2 gap-4">
               <div className="relative">
               <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">
                  <FaUser className="w-4 h-4" />
               </div>
               <input
                  type="text"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full pl-12 pr-4 py-3 bg-transparent border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
               />
               </div>
               <div className="md:hidden" />
            </div>

            <textarea
               placeholder="Tulis ucapan Anda..."
               value={formData.message}
               onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
               rows={3}
               className="w-full px-4 py-3 bg-transparent border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
            />

            <button
               type="submit"
               disabled={isSubmitting || !formData.name || !formData.message}
               className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wider"
            >
               <FaPaperPlane className="w-3 h-3" />
               {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
            </button>
         </motion.form>

         {/* Wishes Grid */}
         <div className="grid md:grid-cols-2 gap-6">
            {wishes.map((wish, index) => (
               <WishCard key={wish.id} wish={wish} index={index} />
            ))}
         </div>
         </div>
      </section>
   )
}
