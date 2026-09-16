import { AlertTriangle } from 'lucide-react'

function Disclaimer() {
  return (
    <section className="section-padding pb-10">
      <div className="mx-auto max-w-5xl rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-[#D4AF37]" />
          <div>
            <h3 className="mb-2 text-sm font-black text-[#FFD700]">Presale Disclaimer</h3>
            <p className="text-xs leading-5 text-slate-400">
              BVT Token is intended as a utility token for the BHAVISHYA Ecosystem. Participation in the presale involves risks,
              including market, technology, regulatory and operational risks. Nothing on this page constitutes financial, investment,
              legal or tax advice or a guarantee of returns. Prospective participants should review the official terms and conduct
              their own research before participating. Presale availability, pricing, allocation, payment methods, vesting and
              token-claim conditions should be finalized and published by the project before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Disclaimer
