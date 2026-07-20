import { motion } from 'framer-motion'

/**
 * Signature brand motif: an EKG / vitals trace that resolves into a paw print.
 * Used sparingly as a section divider to tie "veterinary monitoring" to "pet identity".
 */
export default function VitalsDivider({ className = '', flip = false }) {
  return (
    <div className={`w-full flex justify-center py-2 ${className}`} aria-hidden="true">
      <svg
        width="220"
        height="40"
        viewBox="0 0 220 40"
        fill="none"
        className={flip ? 'scale-y-[-1]' : ''}
      >
        <motion.path
          d="M0 20 H60 L70 4 L82 36 L92 12 L100 20 H130"
          stroke="#0F766E"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1, ease: 'backOut' }}
        >
          <circle cx="150" cy="20" r="4.2" fill="#10B981" />
          <circle cx="164" cy="12" r="3.4" fill="#10B981" />
          <circle cx="178" cy="14" r="3.4" fill="#10B981" />
          <ellipse cx="167" cy="27" rx="9" ry="7.5" fill="#10B981" />
        </motion.g>
        <path d="M130 20 H220" stroke="#0F766E" strokeWidth="2.5" strokeOpacity="0.15" strokeLinecap="round" />
      </svg>
    </div>
  )
}
