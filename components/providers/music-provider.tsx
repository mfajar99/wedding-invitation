"use client"

import { createContext, useContext, useRef, useState, useEffect, useCallback, type ReactNode } from 'react'

interface MusicContextType {
   isPlaying: boolean
   toggle: () => void
   play: () => void
}

const MusicContext = createContext<MusicContextType | null>(null)

export function useMusicPlayer() {
   const context = useContext(MusicContext)
   if (!context) {
      throw new Error('useMusicPlayer must be used within MusicProvider')
   }
   return context
}

interface MusicProviderProps {
   children: ReactNode
   src?: string
}

export function MusicProvider({ children, src = "/music/wedding-song.mp3" }: MusicProviderProps) {
   const audioRef = useRef<HTMLAudioElement | null>(null)
   const [isPlaying, setIsPlaying] = useState(false)
   const [isReady, setIsReady] = useState(false)

   useEffect(() => {
      const audio = new Audio(src)
      audio.loop = true
      audio.volume = 0.5
      audio.preload = 'auto'
      
      audio.addEventListener('canplaythrough', () => {
         setIsReady(true)
      })

      audio.addEventListener('ended', () => {
         // Loop is enabled, but just in case
         audio.currentTime = 0
         audio.play()
      })

      audioRef.current = audio
      
      return () => {
         if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current = null
         }
      }
   }, [src])

   const play = useCallback(() => {
      if (audioRef.current && !isPlaying) {
         // Reset to beginning if needed
         audioRef.current.currentTime = 0
         
         const playPromise = audioRef.current.play()
         
         if (playPromise !== undefined) {
            playPromise
               .then(() => {
                  setIsPlaying(true)
               })
               .catch((error) => {
                  console.log('[v0] Audio play failed:', error)
                  // Try again after a short delay (user interaction should allow it)
                  setTimeout(() => {
                     if (audioRef.current) {
                        audioRef.current.play()
                           .then(() => setIsPlaying(true))
                           .catch(() => {})
                     }
                  }, 100)
               })
         }
      }
   }, [isPlaying])

   const toggle = useCallback(() => {
      if (audioRef.current) {
         if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
         } else {
            audioRef.current.play().then(() => {
               setIsPlaying(true)
            }).catch(() => {
               // Autoplay blocked
            })
         }
      }
   }, [isPlaying])

   return (
      <MusicContext.Provider value={{ isPlaying, toggle, play }}>
         {children}
      </MusicContext.Provider>
   )
}
