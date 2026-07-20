import { motion } from 'framer-motion'
import {
  GraduationCap, Cpu, CalendarCheck, ShieldPlus, PawPrint, BadgeDollarSign
} from 'lucide-react'
import { whyChooseUs } from '../data/content.js'
import Reveal from './Reveal.jsx'

const iconMap = { GraduationCap, Cpu, CalendarCheck, ShieldPlus, PawPrint, BadgeDollarSign }

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <span className="eyebrow mb-4">Why PawCare</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold leading-tight text-ink mb-6">
              Care That Feels Personal, Backed by Real Expertise
            </h2>
            <p className="text-base sm:text-lg text-ink/60 leading-relaxed mb-10 max-w-xl">
              We built PawCare around what pet parents actually worry about: being seen quickly, understood clearly, and treated by people who genuinely know their pet.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <Reveal className="relative">
          <div className="relative rounded-4xl overflow-hidden shadow-premium aspect-[4/5]">
            <img
              src="https://picsum.photos/seed/pawcare-cat-exam/900/1100"
              alt="Professional veterinarian examining a healthy cat inside a modern treatment room"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="glass absolute top-6 -left-6 sm:-left-8 rounded-3xl shadow-glow px-5 py-4 max-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((n) => (
                  <span key={n} className="w-6 h-6 rounded-full bg-primary-200 border-2 border-white" />
                ))}
              </div>
              <span className="text-xs font-semibold text-ink/70">480+ reviews</span>
            </div>
            <p className="text-xs text-ink/50 leading-snug">Rated 4.9/5 by Austin pet parents</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
