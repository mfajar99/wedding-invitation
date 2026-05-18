"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHeart } from 'react-icons/fa'
import { weddingConfig } from '@/lib/wedding-config'

interface TimelineItemProps {
  date: string
  title: string
  description: string
  index: number
  isLast: boolean
}

function TimelineItem({ date, title, description, index, isLast }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'} text-center mb-4 md:mb-0`}>
        <span className="text-sm tracking-[0.2em] text-primary uppercase">{date}</span>
        <h3 className="text-2xl font-light text-foreground mt-2 mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
      </div>

      {/* Center line and icon */}
      <div className="relative flex flex-col items-center md:w-2/12">
        <motion.div
          className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-background z-10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <FaHeart className="w-4 h-4 text-primary" />
        </motion.div>
        {!isLast && (
          <motion.div
            className="w-px h-24 md:h-32 bg-primary/30"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            style={{ transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  )
}

export function LoveStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-card/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
            How It All Began
          </p>
          <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary">
            Our Love Story
          </h2>
        </motion.div>

        <div className="relative">
          {weddingConfig.loveStory.map((story, index) => (
            <TimelineItem
              key={index}
              date={story.date}
              title={story.title}
              description={story.description}
              index={index}
              isLast={index === weddingConfig.loveStory.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
