import { motion } from 'framer-motion'
import {
  Stethoscope, Syringe, Smile, HeartPulse, Siren, ScanLine, Activity, Apple, ArrowUpRight
} from 'lucide-react'
import { services } from '../data/content.js'
import { SectionHeading } from './Reveal.jsx'
import VitalsDivider from './VitalsDivider.jsx'

const iconMap = { Stethoscope, Syringe, Smile, HeartPulse, Siren, ScanLine, Activity, Apple }

export default function Services() {
  return (
    <section id="services" className="section bg-mist relative">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What We Offer"
          title="Complete Veterinary Services Under One Roof"
          description="From routine wellness checks to urgent surgical care, every service is delivered by the same trusted team your pet already knows. Most visits start at $45 - no hidden fees."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -8 }}
                className="group card p-7 relative overflow-hidden cursor-default"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary-50 group-hover:bg-primary-100 group-hover:scale-125 transition-all duration-500" />
                <span className="relative w-[3.25rem] h-[3.25rem] rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-premium group-hover:-rotate-6 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </span>
                <h3 className="relative font-display font-semibold text-lg text-ink mb-2">{service.title}</h3>
                <p className="relative text-sm text-ink/55 leading-relaxed mb-4">{service.description}</p>
                <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.div>
            )
          })}
        </div>

        <VitalsDivider className="mt-16" />
      </div>
    </section>
  )
}
