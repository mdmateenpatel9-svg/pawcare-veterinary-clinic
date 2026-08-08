import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PawCare Veterinary Clinic | Compassionate Vet Care in Austin, TX</title>
        <meta
          name="description"
          content="PawCare Veterinary Clinic in Austin, Texas offers wellness exams, vaccinations, surgery, dental care & emergency services for dogs, cats and exotic pets. Book your visit today."
        />
      </Helmet>

      <Hero />
      <WhyChooseUs />
      <AppointmentCTA />
    </>
  )
}
