import { motion } from 'framer-motion'

function PresaleDetails() {
  const details = [
    ['Token Name', 'BVT TOKEN'], ['Symbol', 'BVT'], ['Blockchain', 'Blockchain'], ['Standard', 'BEP-20'],
    ['Total Supply', '10,000,000,000 BVT'], ['Decimals', '18'], ['Presale Allocation', 'To Be Announced'],
    ['Presale Price', '$0.0025'], ['Minimum Purchase', '100 TRX'], ['Maximum Purchase', '500,000 TRX'],
    ['Token Claim', 'After Presale Ends'], ['Listing Price', 'To Be Announced']
  ]
  const stages = [
    ['STAGE 01 — EARLY ACCESS', '$0.0015', '2,500,000,000 BVT', 'Completed'],
    ['STAGE 02 — COMMUNITY', '$0.0025', '2,500,000,000 BVT', 'Active'],
    ['STAGE 03 — PUBLIC PRESALE', '$0.0040', '2,500,000,000 BVT', 'Upcoming'],
    ['STAGE 04 — FINAL ROUND', '$0.0060', '2,500,000,000 BVT', 'Upcoming']
  ]

  return (
    <section className="section-padding">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="mb-6 text-3xl font-black sm:text-4xl">Presale <span className="gold-text">Details</span></h2>
          <div className="glass-card overflow-hidden">
            <div className="divide-y divide-[#D4AF37]/10">
              {details.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[1fr_auto] gap-4 px-4 py-3 text-sm sm:px-5">
                  <span className="text-slate-400">{label}</span><span className="text-right font-bold text-slate-100">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="mb-6 text-3xl font-black sm:text-4xl">Presale <span className="gold-text">Stages</span></h2>
          <div className="space-y-3">
            {stages.map(([stage, price, allocation, status], i) => (
              <motion.div key={stage} whileHover={{ x: 4 }} className={`glass-card relative p-4 sm:p-5 ${status === 'Active' ? 'border-[#D4AF37]/55 shadow-[0_0_25px_rgba(212,175,55,.08)]' : ''}`}>
                {status === 'Active' && <div className="absolute right-0 top-0 rounded-bl-lg bg-gradient-to-bl from-[#D4AF37] to-[#B8860B] px-3 py-1 text-[10px] font-black text-[#07111f]">ACTIVE</div>}
                <div className="flex flex-wrap items-start justify-between gap-2 pr-12">
                  <h3 className="text-sm font-black">{stage}</h3>
                  <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${status === 'Completed' ? 'bg-emerald-500/15 text-emerald-400' : status === 'Active' ? 'bg-[#D4AF37]/15 text-[#FFD700]' : 'bg-slate-500/15 text-slate-400'}`}>{status}</span>
                </div>
                <div className="mt-3 flex flex-col gap-1 text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-sm">
                  <span>Price: <b className="text-white">{price}</b></span><span>Allocation: <b className="text-white">{allocation}</b></span>
                </div>
              </motion.div>
            ))}
          </div>
          <a href="#presale" className="btn-gold mt-5 block w-full text-center">Buy Now</a>
        </motion.div>
      </div>
    </section>
  )
}

export default PresaleDetails
