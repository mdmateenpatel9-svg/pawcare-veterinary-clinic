import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold leading-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-ink/60 leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}

export default function Reveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
