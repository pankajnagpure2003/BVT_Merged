import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Clock,
  TrendingUp,
  CircleDollarSign,
  ChevronRight,
} from 'lucide-react'

import BackgroundFX from '../effects/BackgroundFX'
import CountdownTimer from '../common/CountdownTimer'

function PresaleStatus() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setProgress(35), 250)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      id="presale"
      className="section-padding relative overflow-hidden"
    >
      <BackgroundFX />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0066FF]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-[#FFD700]/8 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="glass-card relative overflow-hidden p-5 sm:p-7 md:p-10">

          {/* Top shine */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-70" />

          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFD700]/20 bg-[#FFD700]/8">
                <Zap
                  size={20}
                  className="text-[#FFD700]"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                    BVT Presale
                  </h2>

                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Secure your position in the BHAVISHYA Ecosystem
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start rounded-xl border border-[#D4AF37]/15 bg-[#07111f]/60 px-4 py-2 sm:self-auto">
              <span className="text-xs text-slate-500">
                Current Stage
              </span>
              <span className="font-black text-[#FFD700]">
                02 / 04
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">

            {/* LEFT SIDE */}
            <div>

              <div className="mb-6">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                  Early Access Opportunity
                </p>

                <h3 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
                  Secure Your
                  <span className="gold-text"> BVT Tokens </span>
                  During the Presale
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  BVT Token is a BEP-20 utility token built on the Blockchain
                  Network, designed to power the growing BHAVISHYA Ecosystem.
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Join the BVT Presale and become an early participant in
                  the ecosystem's journey across real estate, skills,
                  employment, education, healthcare and digital services.
                </p>
              </div>

              {/* Progress */}
              <div className="rounded-2xl border border-white/8 bg-[#050d25]/70 p-5 sm:p-6">

                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Presale Progress
                    </p>

                    <p className="mt-1 text-lg font-black text-white">
                      Stage 2
                      <span className="ml-2 text-sm font-medium text-slate-500">
                        Community Round
                      </span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="gold-text text-2xl font-black">
                      35%
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-600">
                      Complete
                    </p>
                  </div>
                </div>

                <div className="relative h-3 overflow-hidden rounded-full bg-slate-900">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="relative h-full rounded-full bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#FFF1A6] shadow-[0_0_25px_rgba(255,215,0,.4)]"
                  >
                    <div className="absolute right-0 top-0 h-full w-12 bg-white/30 blur-md" />
                  </motion.div>
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-medium text-slate-600 sm:text-xs">
                  <span>3.5B BVT Sold</span>
                  <span>10B Target</span>
                </div>
              </div>

              {/* Price Cards */}
              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="group rounded-2xl border border-[#FFD700]/15 bg-gradient-to-br from-[#FFD700]/8 to-transparent p-5 transition-all duration-300 hover:border-[#FFD700]/35">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <CircleDollarSign
                      size={14}
                      className="text-[#FFD700]"
                    />
                    Current Price
                  </div>

                  <div className="gold-text text-2xl font-black sm:text-3xl">
                    $0.0025
                  </div>

                  <p className="mt-1 text-xs text-slate-600">
                    per BVT
                  </p>
                </div>

                <div className="group rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/8 to-transparent p-5 transition-all duration-300 hover:border-blue-400/25">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <TrendingUp
                      size={14}
                      className="text-blue-400"
                    />
                    Next Stage
                  </div>

                  <div className="text-2xl font-black text-white sm:text-3xl">
                    $0.0040
                  </div>

                  <p className="mt-1 text-xs text-slate-600">
                    per BVT
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative">

              <div className="h-full rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-b from-[#0b1838]/90 to-[#050c22]/90 p-5 sm:p-7">

                {/* Countdown heading */}
                <div className="text-center">

                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD700]/20 bg-[#FFD700]/8">
                    <Clock
                      size={21}
                      className="text-[#FFD700]"
                    />
                  </div>

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                    Limited Presale Window
                  </p>

                  <h4 className="mt-2 text-xl font-black text-white">
                    Presale Ends In
                  </h4>

                </div>

                {/* Countdown */}
                <div className="mt-6">
                  <CountdownTimer />
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

                {/* Network info */}
                <div className="space-y-3">

              
                </div>

                {/* CTA */}
                <a
                  href="#how-to-buy"
                  className="btn-gold group mt-6 flex w-full items-center justify-center gap-2"
                >
                  Participate Now

                  <ChevronRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-3 text-center text-[10px] leading-5 text-slate-600">
                  Participate responsibly. Always verify official
                  BVT information before sending funds.
                </p>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default PresaleStatus
