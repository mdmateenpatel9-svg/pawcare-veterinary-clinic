import { Helmet } from 'react-helmet-async'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Testimonials & FAQ | PawCare Veterinary Clinic</title>
        <meta name="description" content="Read what pet owners say about PawCare Veterinary Clinic, and find answers to frequently asked questions." />
      </Helmet>
      <div className="pt-20">
        <Testimonials />
        <FAQ />
      </div>
    </>
  )
}
