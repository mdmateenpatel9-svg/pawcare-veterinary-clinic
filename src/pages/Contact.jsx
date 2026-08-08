import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact.jsx'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact & Book Appointment | PawCare Veterinary Clinic</title>
        <meta name="description" content="Book your pet's appointment at PawCare Veterinary Clinic. Find our location, hours, and contact information." />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </>
  )
}
