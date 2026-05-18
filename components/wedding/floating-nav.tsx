"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaHeart, FaUsers, FaCalendar, FaGift, FaMapMarkerAlt } from 'react-icons/fa'

const navItems = [
   { id: 'hero', icon: FaHeart, label: 'Beranda' },
   { id: 'couple', icon: FaUsers, label: 'Mempelai' },
   { id: 'events', icon: FaCalendar, label: 'Acara' },
   { id: 'gift', icon: FaGift, label: 'Hadiah' },
   { id: 'location', icon: FaMapMarkerAlt, label: 'Lokasi' },
]

export function FloatingNav() {
   const [isVisible, setIsVisible] = useState(false)
   const [activeSection, setActiveSection] = useState('hero')

   useEffect(() => {
      const handleScroll = () => {
         setIsVisible(window.scrollY > 500)
         
         // Find active section
         const sections = navItems.map(item => document.getElementById(item.id))
         const scrollPosition = window.scrollY + window.innerHeight / 2

         for (let i = sections.length - 1; i >= 0; i--) {
         const section = sections[i]
         if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id)
            break
         }
         }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const scrollToSection = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <AnimatePresence>
         {isVisible && (
         <motion.nav
            className="fixed bottom-6 left-1/2 z-40 hidden md:flex"
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            transition={{ duration: 0.3 }}
         >
            <div className="flex items-center gap-1 px-4 py-3 bg-card/90 backdrop-blur-md border border-primary/20 shadow-2xl">
               {navItems.map((item) => {
               const Icon = item.icon
               const isActive = activeSection === item.id
               
               return (
                  <button
                     key={item.id}
                     onClick={() => scrollToSection(item.id)}
                     className={`relative p-3 transition-colors ${
                     isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                     }`}
                     title={item.label}
                  >
                     <Icon className="w-4 h-4" />
                     {isActive && (
                     <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 border border-primary/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                     )}
                  </button>
               )
               })}
            </div>
         </motion.nav>
         )}
      </AnimatePresence>
   )
}
