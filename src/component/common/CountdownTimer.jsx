import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = Date.now() + 30 * 24 * 60 * 60 * 1000
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
      {[
        ['Days', timeLeft.days], ['Hours', timeLeft.hours],
        ['Minutes', timeLeft.minutes], ['Seconds', timeLeft.seconds]
      ].map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="glass-card px-2 py-3 sm:px-4 sm:py-3">
            <span className="gold-text text-xl sm:text-2xl md:text-3xl font-black tabular-nums">
              {String(value).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
