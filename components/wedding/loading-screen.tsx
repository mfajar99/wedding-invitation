"use client"

import { motion } from 'framer-motion'

export function LoadingScreen() {
   return (
      <motion.div 
         className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
         exit={{ opacity: 0 }}
         transition={{ duration: 0.8 }}
      >
         <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="text-center"
         >
         <motion.div
            className="mb-8"
            animate={{ 
               scale: [1, 1.1, 1],
               opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
               duration: 2, 
               repeat: Infinity,
               ease: "easeInOut"
            }}
         >
            <svg 
               className="w-16 h-16 mx-auto text-primary"
               viewBox="0 0 100 100" 
               fill="currentColor"
            >
               <path d="M50 90 C25 65, 10 45, 10 30 C10 15, 25 5, 50 25 C75 5, 90 15, 90 30 C90 45, 75 65, 50 90Z"/>
            </svg>
         </motion.div>
         
         <motion.h2 
            className="text-2xl md:text-3xl font-light tracking-[0.3em] text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
         >
            S & I
         </motion.h2>
         
         <motion.div 
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
         >
            <motion.span
               className="w-2 h-2 rounded-full bg-primary"
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.span
               className="w-2 h-2 rounded-full bg-primary"
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
               className="w-2 h-2 rounded-full bg-primary"
               animate={{ opacity: [0.3, 1, 0.3] }}
               transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
         </motion.div>
         </motion.div>
      </motion.div>
   )
}
