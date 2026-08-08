import { Helmet } from 'react-helmet-async'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | PawCare Veterinary Clinic</title>
        <meta name="description" content="Explore PawCare's full range of veterinary services including wellness exams, vaccinations, dental care, surgery, and emergency care." />
      </Helmet>
      <div className="pt-20">
        <Services />
        <WhyChooseUs />
        <AppointmentCTA />
      </div>
    </>
  )
}
