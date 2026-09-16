import { useMemo } from 'react'

function BackgroundFX({ dense = false }) {
  const particles = useMemo(
    () => Array.from({ length: dense ? 22 : 14 }, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      top: `${(i * 61) % 100}%`,
      delay: `${(i % 7) * 0.45}s`,
      duration: `${5 + (i % 5)}s`,
      size: `${2 + (i % 3)}px`
    })),
    [dense]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl animate-orb" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-orb-reverse" />
      <div className="absolute left-1/2 bottom-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-[#FFD700]/5 blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-70" />
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#FFD700]/50 animate-particle"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  )
}

export default BackgroundFX
