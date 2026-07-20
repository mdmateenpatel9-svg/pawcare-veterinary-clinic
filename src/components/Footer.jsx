import { PawPrint, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { business, navLinks, services } from '../data/content.js'

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-px max-w-7xl mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <span className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-accent-400" strokeWidth={2.4} />
              </span>
              <span className="font-display font-bold text-lg">
                Paw<span className="text-accent-400">Care</span>
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-5">{business.tagline}</p>
            <div className="flex items-center gap-3">
              {Object.entries(business.social).map(([key, href]) => {
                const Icon = socialIcons[key]
                return (
                  <a
                    key={key}
                    href={href}
                    aria-label={key}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-5 text-white/90">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-accent-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-5 text-white/90">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-white/60 hover:text-accent-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-5 text-white/90">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-[1.125rem] h-[1.125rem] mt-0.5 text-accent-400 shrink-0" />
                {business.address.full}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-[1.125rem] h-[1.125rem] text-accent-400 shrink-0" />
                <a href={business.phoneHref} className="hover:text-accent-400 transition-colors">{business.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-[1.125rem] h-[1.125rem] text-accent-400 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-accent-400 transition-colors">{business.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} PawCare Veterinary Clinic. All rights reserved.
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right max-w-md">
            Demo Notice: This is a portfolio demo created by <span className="text-accent-400 font-medium">Mateen Sites</span>. This is NOT a real veterinary clinic.
          </p>
        </div>
      </div>
    </footer>
  )
}
