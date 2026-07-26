import { motion } from 'framer-motion'
import { Heart, Target, Eye } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative rounded-4xl overflow-hidden shadow-premium aspect-[4/3]">
            <img
              src="https://cdn.postimage.me/2026/07/26/file_000000001314820ea9e9deef43f6ebf3.png"
              alt="Modern veterinary clinic reception with an elegant waiting area and indoor plants"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass absolute -bottom-6 -right-4 sm:-right-8 rounded-3xl shadow-glow px-6 py-5 flex items-center gap-3"
          >
            <span className="w-11 h-11 rounded-2xl bg-accent-500 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </span>
            <div>
              <p className="font-display font-bold text-ink text-sm">Since 2012</p>
              <p className="text-xs text-ink/55">Serving Austin families</p>
            </div>
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-4">About PawCare</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold leading-tight text-ink mb-6">
              A Clinic Built Around Trust, Not Just Treatment
            </h2>
            <p className="text-base sm:text-lg text-ink/60 leading-relaxed mb-4">
              PawCare Veterinary Clinic opened its doors in 2012 with a simple belief: veterinary visits shouldn&apos;t be stressful for pets or their people. What started as a two-room practice has grown into a full-service animal hospital, but our fear-free, unhurried approach to every appointment hasn&apos;t changed.
            </p>
            <p className="text-base sm:text-lg text-ink/60 leading-relaxed mb-8">
              Today our team of licensed veterinarians and certified technicians treats thousands of dogs, cats, birds and exotic companions each year, combining modern diagnostic technology with the kind of patience that keeps tails wagging on the way out the door.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            <Reveal delay={0.1} className="card p-6">
              <span className="w-11 h-11 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-primary" />
              </span>
              <h3 className="font-display font-semibold text-ink mb-2">Our Mission</h3>
              <p className="text-sm text-ink/55 leading-relaxed">
                To deliver compassionate, evidence-based veterinary care that keeps pets healthy and families at ease.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="card p-6">
              <span className="w-11 h-11 rounded-2xl bg-secondary-50 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-secondary" />
              </span>
              <h3 className="font-display font-semibold text-ink mb-2">Our Vision</h3>
              <p className="text-sm text-ink/55 leading-relaxed">
                A community where every pet has access to gentle, modern healthcare — and every owner feels heard.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
