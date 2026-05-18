"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaUser, FaEnvelope, FaUsers, FaCheck, FaTimes } from 'react-icons/fa'

interface RSVPFormData {
  name: string
  email: string
  attendance: 'yes' | 'no' | ''
  guests: string
  message: string
}

export function RSVPSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attendance: '',
    guests: '1',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <section ref={ref} className="py-24 md:py-32 px-6 bg-card/30 relative overflow-hidden">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 border border-primary/50 flex items-center justify-center">
              <FaCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-[var(--font-great-vibes)] text-5xl text-primary mb-4">
              Terima Kasih!
            </h2>
            <p className="text-muted-foreground">
              RSVP Anda telah diterima. Kami menantikan kehadiran Anda!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-card/30 relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.4em] text-primary/70 uppercase mb-4">
            Apakah Anda Akan Hadir?
          </p>
          <h2 className="font-[var(--font-great-vibes)] text-5xl md:text-6xl text-primary mb-6">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-muted-foreground">
            Mohon konfirmasi kehadiran Anda pada hari istimewa kami
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">
              <FaUser className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap Anda"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4 bg-transparent border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">
              <FaEnvelope className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Alamat Email Anda"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-4 bg-transparent border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Attendance */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, attendance: 'yes' }))}
              className={`flex items-center justify-center gap-3 py-4 border transition-all ${
                formData.attendance === 'yes'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-primary/20 text-muted-foreground hover:border-primary/40'
              }`}
            >
              <FaCheck className="w-4 h-4" />
              Dengan Senang Hati Hadir
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, attendance: 'no' }))}
              className={`flex items-center justify-center gap-3 py-4 border transition-all ${
                formData.attendance === 'no'
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-primary/20 text-muted-foreground hover:border-primary/40'
              }`}
            >
              <FaTimes className="w-4 h-4" />
              Maaf Tidak Bisa Hadir
            </button>
          </div>

          {/* Number of Guests */}
          {formData.attendance === 'yes' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50">
                <FaUsers className="w-4 h-4" />
              </div>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-transparent border border-primary/20 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="1">1 Tamu</option>
                <option value="2">2 Tamu</option>
                <option value="3">3 Tamu</option>
                <option value="4">4 Tamu</option>
              </select>
            </motion.div>
          )}

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Pesan Anda untuk pengantin (opsional)"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 bg-transparent border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!formData.attendance || isSubmitting}
            className="w-full py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed tracking-wider uppercase text-sm"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim RSVP'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
