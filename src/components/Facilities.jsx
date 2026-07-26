import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { facilities } from '../data/content.js'
import { SectionHeading } from './Reveal.jsx'

export default function Facilities() {
  return (
    <section id="facilities" className="section bg-white">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Inside PawCare"
          title="Modern Facilities, Built for Precise Care"
          description="Every room is designed around two priorities: accurate diagnostics and a calm, low-stress experience for your pet."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative rounded-4xl overflow-hidden shadow-premium aspect-[16/11] lg:aspect-auto lg:h-full min-h-[340px]"
          >
            <img
              src="https://cdn.postimage.me/2026/07/26/file_00000000b178820ea72a9f9278fb99b4.png"
              alt="Modern veterinary surgery room with premium medical equipment and clean interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-white font-display font-semibold text-xl">Sterile Surgical Suite</p>
              <p className="text-white/70 text-sm mt-1">Positive-pressure, fully monitored operating room</p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 flex gap-4 flex-1"
              >
                <CheckCircle2 className="w-[1.375rem] h-[1.375rem] text-accent-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-ink mb-1.5">{f.title}</h3>
                  <p className="text-sm text-ink/55 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
