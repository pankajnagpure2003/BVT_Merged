import { motion } from 'framer-motion'
import { Globe, Gift, Monitor, Zap } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

function Benefits() {
  const benefits = [
    [Zap, 'Early Ecosystem Access', 'Participate from the early stages of the BVT ecosystem development.'],
    [Gift, 'Community Rewards', 'Eligible participants may benefit from future community reward programs.'],
    [Monitor, 'Ecosystem Utility', 'BVT provides utility across future BHAVISHYA products and services.'],
    [Globe, 'Long-Term Ecosystem', 'Roadmap targets expansion across real estate, skills, employment, education & healthcare.']
  ]
  return (
    <section className="section-padding">
      <SectionTitle eyebrow="Why participate" title={<>Presale <span className="gold-text">Benefits</span></>} >Early participants receive exclusive access to ecosystem benefits.</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(([Icon, title, desc], i) => (
          <motion.div key={title} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
            whileHover={{ y: -7, scale: 1.01 }} className="glass-card glass-card-hover p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10"><Icon size={27} className="text-[#FFD700]" /></div>
            <h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
