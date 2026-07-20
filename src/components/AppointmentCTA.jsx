import { motion } from 'framer-motion'
import { ArrowRight, PawPrint } from 'lucide-react'

export default function AppointmentCTA() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-4xl sm:rounded-5xl overflow-hidden bg-primary-900 shadow-premium"
        >
          <img
            src="https://picsum.photos/seed/pawcare-family-dog-cta/1600/700"
            alt="A happy family walking with their healthy dog outside a modern veterinary clinic at golden hour"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/95 to-primary-900/60" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 flex flex-col items-start max-w-2xl">
            <span className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <PawPrint className="w-6 h-6 text-accent-400" />
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-5">
              Give Your Pet The Best Care Today
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-9">
              Same-day slots are open this week. Book online in under a minute, or call and we&apos;ll find a time that works.
            </p>
            <a href="#contact" className="btn-primary bg-accent-500 hover:bg-accent-600 shadow-none">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
