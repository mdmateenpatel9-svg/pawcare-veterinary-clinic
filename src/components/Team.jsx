import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, GraduationCap, BriefcaseMedical } from 'lucide-react'
import { team } from '../data/content.js'
import { SectionHeading } from './Reveal.jsx'

const imageSeeds = {
  'team-1': 'https://cdn.postimage.me/2026/07/26/0b9cb1005de34022050cf267045e97c6c63aeeb959b03bb7f037849be6cebafe.png',
  'team-2': 'https://iili.io/CehbasV.png'
}

export default function Team() {
  return (
    <section id="team" className="section bg-mist">
      <div className="container-px max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="The Hands Your Pet Will Grow to Trust"
          description="Two dedicated veterinarians, one shared philosophy: slow down, listen, and treat every animal like it's family."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={imageSeeds[member.image]}
                  alt={`${member.name}, ${member.role}, smiling in clean teal scrubs`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label="social link"
                      className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-accent-500 hover:text-white transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-ink">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-ink/55">
                    <BriefcaseMedical className="w-3.5 h-3.5 text-accent-500" />
                    {member.experience}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink/55">
                    <GraduationCap className="w-3.5 h-3.5 text-accent-500" />
                    {member.qualification}
                  </span>
                </div>
                <p className="text-sm text-ink/60 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
