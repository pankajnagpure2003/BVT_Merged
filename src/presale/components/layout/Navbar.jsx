import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SITE } from '../../config/site'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['Presale', '#presale'], ['How to Buy', '#how-to-buy'],
    ['Tokenomics', '#tokenomics'], ['Ecosystem', '#ecosystem'], ['FAQ', '#faq']
  ]

  const close = () => setIsOpen(false)

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-[#D4AF37]/20 bg-[#07111f]/90 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={close}>
          <img src={SITE.logo} alt="BVT Token" className="h-9 w-9 rounded-full object-contain sm:h-11 sm:w-11" />
          <div className="min-w-0 leading-none">
            <div className="truncate text-sm font-black tracking-[0.12em] sm:text-base">BHAVISHYA <span className="gold-text">VISION</span></div>
            <div className="mt-1 hidden text-[9px] uppercase tracking-[0.22em] text-slate-400 sm:block">BVT Token</div>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([name, href]) => (
            <a key={name} href={href} className="nav-link">{name}</a>
          ))}
          <a  href="#how-to-buy" className="btn-gold !px-5 !py-2.5 !text-xs">Buy BVT</a>
        </div>

        <button className="rounded-lg border border-[#D4AF37]/30 p-2 text-[#FFD700] lg:hidden" onClick={() => setIsOpen(v => !v)} aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="border-b border-[#D4AF37]/20 bg-[#07111f]/98 backdrop-blur-xl lg:hidden">
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4">
              {links.map(([name, href]) => (
                <a key={name} href={href} onClick={close} className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-300 hover:bg-[#D4AF37]/10 hover:text-[#FFD700]">{name}</a>
              ))}
              <a href="#presale" onClick={close} className="btn-gold mt-2 block w-full text-center">Buy BVT</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
