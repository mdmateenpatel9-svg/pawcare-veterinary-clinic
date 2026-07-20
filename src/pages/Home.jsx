import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Team from '../components/Team.jsx'
import Facilities from '../components/Facilities.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import AppointmentCTA from '../components/AppointmentCTA.jsx'
import Contact from '../components/Contact.jsx'

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
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Facilities />
      <Testimonials />
      <FAQ />
      <AppointmentCTA />
      <Contact />
    </>
  )
}
