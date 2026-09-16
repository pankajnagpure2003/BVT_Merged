import { motion } from 'framer-motion'
import { BookOpen, Globe, Wallet } from 'lucide-react'
import { SITE } from '../../config/site'

function CTA() {
  return (
    <section id="whitepaper" className="section-padding">
      <motion.div initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card gold-glow mx-auto max-w-4xl p-7 text-center sm:p-10 md:p-12">
        <img src={SITE.logo} alt="BVT" className="mx-auto mb-5 h-16 w-16 object-contain sm:h-20 sm:w-20" />
        <h2 className="text-3xl font-black sm:text-4xl">Ready to Join <span className="gold-text">BVT?</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Join the BHAVISHYA Ecosystem and be part of the early community building the foundation of a long-term blockchain-powered ecosystem.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a  href="#how-to-buy" className="btn-gold inline-flex items-center justify-center gap-2"><Wallet size={18} /> Buy BVT Now</a>
          <a href="#ecosystem" className="btn-outline inline-flex items-center justify-center gap-2"><Globe size={18} /> Join Community</a>
          <a href="/Whitepaper.pdf"
                  target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center justify-center gap-2"><BookOpen size={18} /> Read Whitepaper</a>
        </div>
        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500"><img src={SITE.logo} alt="" className="h-8 w-8 rounded-full object-contain" /> Blockchain • BEP-20 • 10 Billion BVT</div>
      </motion.div>
    </section>
  )
}

export default CTA
