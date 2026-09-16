function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{eyebrow}</div>}
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">{children}</p>}
    </div>
  )
}

export default SectionTitle
