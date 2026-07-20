import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { business } from '../data/content.js'
import { SectionHeading } from './Reveal.jsx'

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

const initialForm = { name: '', petName: '', phone: '', email: '', service: 'General Wellness Exam', date: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'appointment', ...form })
      })
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your Pet's Appointment"
          description="Fill out the form and our team will confirm your slot within one business day — or call us directly for urgent care."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 card p-7 sm:p-9"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-accent-500 mb-4" />
                <h3 className="font-display font-bold text-xl text-ink mb-2">Request Received!</h3>
                <p className="text-sm text-ink/55 max-w-sm">
                  Thank you for reaching out. Our front desk will call or email you shortly to confirm your appointment time.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-6 text-sm">
                  Send another request
                </button>
              </div>
            ) : (
              <form
                name="appointment"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="grid sm:grid-cols-2 gap-5"
              >
                <input type="hidden" name="form-name" value="appointment" />
                <p className="hidden">
                  <label>Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} /></label>
                </p>

                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Your Name *</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Cooper"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Pet's Name *</label>
                  <input
                    required
                    name="petName"
                    value={form.petName}
                    onChange={handleChange}
                    placeholder="Bailey"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Email Address *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition bg-white"
                  >
                    <option>General Wellness Exam</option>
                    <option>Vaccinations</option>
                    <option>Dental Care</option>
                    <option>Pet Surgery</option>
                    <option>Emergency Care</option>
                    <option>Diagnostics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-ink/60 mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about your pet's needs..."
                    className="w-full rounded-xl border border-ink/10 px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
                    {status === 'sending' ? 'Sending...' : 'Request Appointment'}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="card p-6 flex flex-col gap-5">
              <div className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs text-ink/50 mb-0.5">Call us</p>
                  <a href={business.phoneHref} className="font-display font-semibold text-ink hover:text-primary transition-colors">
                    {business.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs text-ink/50 mb-0.5">Email us</p>
                  <a href={`mailto:${business.email}`} className="font-display font-semibold text-ink hover:text-primary transition-colors break-all">
                    {business.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="text-xs text-ink/50 mb-0.5">Visit us</p>
                  <p className="font-display font-semibold text-ink">{business.address.full}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </span>
                <div className="flex-1">
                  <p className="text-xs text-ink/50 mb-1.5">Business hours</p>
                  <div className="flex flex-col gap-1">
                    {business.hours.map((h) => (
                      <div key={h.days} className="flex justify-between text-sm">
                        <span className="text-ink/60">{h.days}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft flex-1 min-h-[220px]">
              <iframe
                title="PawCare Veterinary Clinic location on Google Maps"
                src="https://www.google.com/maps?q=Austin,Texas&output=embed"
                className="w-full h-full min-h-[220px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
