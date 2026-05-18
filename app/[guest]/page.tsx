"use client"

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import { MusicProvider } from '@/components/providers/music-provider'
import { LoadingScreen } from '@/components/wedding/loading-screen'
import { OpeningScreen } from '@/components/wedding/opening-screen'
import { HeroSection } from '@/components/wedding/hero-section'
import { CoupleSection } from '@/components/wedding/couple-section'
import { EventSection } from '@/components/wedding/event-section'
import { CountdownSection } from '@/components/wedding/countdown-section'
import { GiftSection } from '@/components/wedding/gift-section'
import { MapSection } from '@/components/wedding/map-section'
import { Footer } from '@/components/wedding/footer'
import { FloatingNav } from '@/components/wedding/floating-nav'
import { MusicToggle } from '@/components/wedding/music-toggle'

export default function GuestPage() {
   const params = useParams()
   // Decode the guest name from URL and replace dashes/underscores with spaces
   const guestName = params.guest 
      ? decodeURIComponent(params.guest as string).replace(/[-_]/g, ' ')
      : ''
   
   const [isLoading, setIsLoading] = useState(true)
   const [isOpened, setIsOpened] = useState(false)

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false)
      }, 2500)

      return () => clearTimeout(timer)
   }, [])

   return (
      <MusicProvider>
         <AnimatePresence mode="wait">
         {isLoading ? (
            <LoadingScreen key="loading" />
         ) : !isOpened ? (
            <OpeningScreen 
               key="opening"
               guestName={guestName} 
               onOpen={() => setIsOpened(true)} 
            />
         ) : (
            <main key="main" className="relative">
               <MusicToggle />
               <FloatingNav />
               
               <div id="hero">
               <HeroSection />
               </div>
               
               <div id="couple">
               <CoupleSection />
               </div>
               
               <div id="events">
               <EventSection />
               </div>
               
               <div id="countdown">
               <CountdownSection />
               </div>
               
               <div id="gift">
               <GiftSection />
               </div>
               
               <div id="location">
               <MapSection />
               </div>
               
               <Footer />
            </main>
         )}
         </AnimatePresence>
      </MusicProvider>
   )
}
