import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Menu, X, PawPrint, Phone } from 'lucide-react'
import { business, navLinks } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-px flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="PawCare home">
          <span className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-premium group-hover:scale-105 transition-transform">
            <PawPrint className="w-5 h-5 text-white" strokeWidth={2.4} />
          </span>
          <span className="font-display font-bold text-lg sm:text-xl text-ink">
            Paw<span className="text-primary">Care</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="text-sm font-medium text-ink/70 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-ink/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            {business.phone}
          </a>
          <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
            Book Appointment
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-xl hover:bg-primary-50 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-ink" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm shadow-2xl flex flex-col p-6 z-[70]" style={{ backgroundColor: '#ffffff', opacity: 1 }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-lg">
                  Paw<span className="text-primary">Care</span>
                </span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-xl hover:bg-primary-50">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-3 rounded-xl text-base font-medium text-ink/80 hover:bg-primary-50 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-ink/80">
                  <Phone className="w-4 h-4 text-primary" />
                  {business.phone}
                </a>
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
