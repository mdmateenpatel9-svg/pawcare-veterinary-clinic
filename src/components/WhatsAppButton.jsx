import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { business } from '../data/content.js'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: 'backOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] shadow-premium"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <MessageCircle className="w-7 h-7 text-white relative z-10" fill="white" strokeWidth={0} />
    </motion.a>
  )
}
