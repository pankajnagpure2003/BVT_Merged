import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

function FAQ() {
  const [open, setOpen] = useState(null)
  const faqs = [
    ['What is BVT?', 'BVT is a BEP-20 utility token designed for the BHAVISHYA Ecosystem.'],
    ['Which blockchain is BVT built on?', 'BVT is built on the Blockchain Network using the BEP-20 standard.'],
    ['What is the total supply?', 'The total supply is 10 billion BVT.'],
    ['How can I purchase BVT?', 'Connect a supported Blockchain wallet, select the available presale option and complete the transaction according to the official presale instructions.'],
    ['When will I receive my BVT?', 'Token distribution/claim timing will follow the official presale terms and will be announced by the project.'],
    ['Is BVT an investment?', 'BVT is designed as a utility token. Purchasing tokens involves risk, and no profit or price appreciation is guaranteed.'],
    ['Where can I find the official contract?', 'The official contract address will be published on this website and verified through official BVT communication channels.'],
    ['Can I transfer my BVT immediately?', 'Transferability will depend on the official token and presale terms.']
  ]
  return (
    <section id="faq" className="section-padding">
      <SectionTitle eyebrow="Need to know" title={<>Presale <span className="gold-text">FAQ</span></>} >Frequently asked questions about the BVT presale.</SectionTitle>
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="glass-card overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5">
              <span className="text-sm font-bold sm:text-base">{q}</span>
              <ChevronRight size={18} className={`shrink-0 text-[#D4AF37] transition-transform ${open === i ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <div className="border-t border-[#D4AF37]/10 px-4 pb-5 pt-3 text-sm leading-6 text-slate-400 sm:px-5">{a}</div>
              </motion.div>}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
