import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faqs } from '../data/content.js'
import { SectionHeading } from './Reveal.jsx'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section bg-mist">
      <div className="container-px max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything pet parents usually ask before their first PawCare visit."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`card overflow-hidden transition-shadow ${isOpen ? 'shadow-soft' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-display font-semibold text-ink text-sm sm:text-base">{faq.question}</span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary rotate-45' : 'bg-primary-50'}`}>
                    <Plus className={`w-4 h-4 ${isOpen ? 'text-white' : 'text-primary'}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-ink/55 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
