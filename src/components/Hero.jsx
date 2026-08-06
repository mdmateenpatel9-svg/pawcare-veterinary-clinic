import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { heroStats } from '../data/content.js'
import AnimatedCounter from './AnimatedCounter.jsx'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-white to-white" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-primary-100/60 blur-3xl -z-10" />
      <div className="absolute top-1/3 -left-32 w-[360px] h-[360px] rounded-full bg-secondary-100/50 blur-3xl -z-10" />

      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Copy column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Austin, Texas — Fear-Free Certified Clinic
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.08] tracking-tight text-ink"
          >
            Compassionate Veterinary Care for <span className="text-gradient">Your Beloved Pets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-ink/60 leading-relaxed max-w-xl"
          >
            Trusted veterinary care for dogs, cats, birds and exotic pets using modern technology and experienced veterinarians — because every paw deserves gentle, expert attention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="btn-secondary">
              <PlayCircle className="w-[1.125rem] h-[1.125rem]" />
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center gap-2 text-sm text-ink/50"
          >
            <ShieldCheck className="w-[1.125rem] h-[1.125rem] text-accent-500" />
            Licensed, insured &amp; AAHA-standard facility
          </motion.div>
        </div>

        {/* Image + glass stat card column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative rounded-4xl overflow-hidden shadow-premium aspect-[4/5] sm:aspect-[5/4.2]">
            <img
              src="https://cdn.postimage.me/2026/07/21/IMG_20260719_224455.png"
              alt="A smiling veterinarian examining a happy golden retriever inside a bright, modern clinic"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          {/* Floating glass stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass absolute -bottom-8 inset-x-4 sm:inset-x-auto sm:left-auto sm:-right-6 rounded-3xl shadow-glow p-4 sm:p-6 sm:w-72 animate-float"
          >
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-bold text-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-ink/55 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="hidden sm:flex absolute -top-6 -left-6 items-center gap-2 bg-white rounded-2xl shadow-soft px-4 py-3 animate-floatSlow"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-500 animate-pulse" />
            <span className="text-xs font-semibold text-ink/70">Same-Day Slots Open</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
