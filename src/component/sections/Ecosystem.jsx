import { motion } from 'framer-motion'
import { BookOpen, Briefcase, GraduationCap, Heart, Home, Smartphone } from 'lucide-react'
import BackgroundFX from '../effects/BackgroundFX'
import SectionTitle from '../common/SectionTitle'

function Ecosystem() {
  const services = [
    [Home, 'Real Estate', 'Property listings, booking and ecosystem services.'],
    [BookOpen, 'Skills', 'Online learning, technology courses and skill development.'],
    [Briefcase, 'Employment', 'Employment portal, placement and career opportunities.'],
    [GraduationCap, 'Education', 'Schools, colleges, scholarships and digital learning.'],
    [Heart, 'Healthcare', 'Health camps, telemedicine and healthcare initiatives.'],
    [Smartphone, 'Super App', 'A future BHAVISHYA Super App connecting all services.']
  ]
  return (
    <section id="ecosystem" className="relative overflow-hidden border-y border-[#D4AF37]/10">
      <BackgroundFX dense />
      <div className="section-padding relative z-10">
        <SectionTitle eyebrow="Built for utility" title={<>Why <span className="gold-text">BVT?</span></>} >
          One Token. A Growing Ecosystem. The roadmap progresses from 2026 foundation through real estate, skills,
          employment and the planned Super App.
        </SectionTitle>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/10 bg-[#D4AF37]/5 blur-sm" />
          {services.map(([Icon, title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
              whileHover={{ y: -6 }} className="glass-card glass-card-hover group relative overflow-hidden p-5 sm:p-6">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#D4AF37]/5 blur-2xl transition group-hover:bg-[#D4AF37]/15" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10">
                  <Icon size={23} className="text-[#FFD700]" />
                </div>
                <div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{desc}</p></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ecosystem
