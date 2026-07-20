import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/content.js'
import { SectionHeading } from './Reveal.jsx'

const imageSeeds = {
  'testimonial-1': 'pawcare-owner-sarah',
  'testimonial-2': 'pawcare-owner-james',
  'testimonial-3': 'pawcare-owner-priya'
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-gradient-to-b from-primary-50/50 to-white">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Pets and Their People"
          description="Real stories from Austin families who trust us with the health of their pets."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-7 relative"
            >
              <Quote className="w-9 h-9 text-primary-100 absolute top-6 right-6" fill="currentColor" strokeWidth={0} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-400" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-ink/65 leading-relaxed mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${imageSeeds[t.image]}/100/100`}
                  alt={`${t.name}, happy pet owner`}
                  className="w-11 h-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display font-semibold text-sm text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
