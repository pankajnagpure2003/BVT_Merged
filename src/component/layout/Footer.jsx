import { SITE } from '../../config/site'

function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <img src={SITE.logo} alt="BVT Token" className="h-9 w-9 rounded-full object-contain" />
          <div><div className="font-black tracking-wide">BHAVISHYA VISION TOKEN</div><div className="text-[10px] text-slate-500">Build • Grow • Together</div></div>
        </div>
        <div className="text-[10px] text-slate-600">© 2026 BHAVISHYA Ecosystem. All rights reserved.</div>
    
      </div>
    </footer>
  )
}

export default Footer
