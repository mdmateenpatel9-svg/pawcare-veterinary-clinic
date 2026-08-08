import { Helmet } from 'react-helmet-async'
import About from '../components/About.jsx'
import Team from '../components/Team.jsx'
import Facilities from '../components/Facilities.jsx'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | PawCare Veterinary Clinic</title>
        <meta name="description" content="Learn about PawCare Veterinary Clinic's mission, our experienced vet team, and our modern facilities in Austin, TX." />
      </Helmet>
      <div className="pt-20">
        <About />
        <Team />
        <Facilities />
      </div>
    </>
  )
}
