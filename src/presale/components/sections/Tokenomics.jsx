
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'


function Tokenomics() {
  const allocations = [
    {
      label: "Ecosystem & User Rewards",
      percent: 25,
      color: "#FFD700",
    },
    {
      label: "Community & Growth",
      percent: 15,
      color: "#D4AF37",
    },
    {
      label: "Treasury / Ecosystem Dev",
      percent: 15,
      color: "#B8860B",
    },
    {
      label: "Liquidity",
      percent: 10,
      color: "#F0E68C",
    },
    {
      label: "Strategic Partnerships",
      percent: 10,
      color: "#3b82f6",
    },
    {
      label: "Team & Advisors",
      percent: 10,
      color: "#60a5fa",
    },
    {
      label: "Marketing & Adoption",
      percent: 7.5,
      color: "#93c5fd",
    },
    {
      label: "Reserve",
      percent: 7.5,
      color: "#1e3a8a",
    },
  ]

  const totalSupply = 10000000000

  const formatAmount = (percent) => {
    const amount = (totalSupply * percent) / 100

    if (amount >= 1000000000) {
      return `${amount / 1000000000}B`
    }

    if (amount >= 1000000) {
      return `${amount / 1000000}M`
    }

    return amount.toLocaleString()
  }

  return (
    <section
      id="tokenomics"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[#0066FF]/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-[5%] top-1/3 h-80 w-80 rounded-full bg-[#FFD700]/7 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10"
      >
        {/* Heading */}
        <SectionTitle
          eyebrow="Allocation"
          title={
            <>
              BVT <span className="gold-text">Tokenomics</span>
            </>
          }
        >
          A transparent allocation model designed to support ecosystem
          growth, community participation, liquidity and long-term
          development.
        </SectionTitle>

        {/* Main Card */}
        <div className="glass-card mx-auto max-w-6xl overflow-hidden p-4 sm:p-6 md:p-8">

          {/* Top Supply Banner */}
          <div className="relative mb-8 overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-gradient-to-r from-[#0a1838] via-[#08132f] to-[#0a1838] p-6 sm:p-8">

            {/* Decorative Glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FFD700]/10 blur-[70px]" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  BVT Token
                </p>

                <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                  Total Token Supply
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <div className="gold-text text-3xl font-black tracking-tight sm:text-4xl">
                  10B
                </div>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  10,000,000,000 BVT
                </p>
              </div>

            </div>
          </div>

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

            {/* =========================
                VISUAL CHART
            ========================= */}
            <div className="flex justify-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex h-[290px] w-[290px] items-center justify-center sm:h-[350px] sm:w-[350px]"
              >

                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10" />

                <div className="absolute inset-3 rounded-full border border-[#D4AF37]/10" />

                {/* Donut */}
                <div
                  className="absolute inset-8 rounded-full p-[14px] shadow-[0_0_80px_rgba(212,175,55,.08)]"
                  style={{
                    background: `conic-gradient(
                      ${allocations
                        .map((item, index) => {
                          const previous = allocations
                            .slice(0, index)
                            .reduce(
                              (sum, current) => sum + current.percent,
                              0
                            )

                          const start = previous * 3.6
                          const end =
                            (previous + item.percent) * 3.6

                          return `${item.color} ${start}deg ${end}deg`
                        })
                        .join(", ")}
                    )`,
                  }}
                >
                  {/* Inner Circle */}
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-white/5 bg-[#020B2D] text-center shadow-inner">

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                      Total Supply
                    </span>

                    <span className="gold-text mt-1 text-3xl font-black sm:text-4xl">
                      10B
                    </span>

                    <span className="mt-1 text-xs font-medium text-slate-500">
                      BVT
                    </span>

                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 top-8 rounded-xl border border-[#FFD700]/20 bg-[#07142f]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:-right-5"
                >
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Allocated
                  </p>

                  <p className="text-sm font-black text-[#FFD700]">
                    100%
                  </p>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-2 -left-2 rounded-xl border border-blue-400/15 bg-[#07142f]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:-left-5"
                >
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Token
                  </p>

                  <p className="text-sm font-black text-white">
                    BEP-20
                  </p>
                </motion.div>

              </motion.div>
            </div>

            {/* =========================
                ALLOCATION CARDS
            ========================= */}
            <div>

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D4AF37]">
                    Distribution
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    Token Allocation
                  </h3>
                </div>

                <span className="rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 px-3 py-1 text-[10px] font-bold text-slate-500">
                  8 Categories
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {allocations.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/6 bg-[#07142f]/65 p-4 transition-all duration-300 hover:border-white/15 hover:bg-[#0a1938]"
                  >

                    {/* Accent */}
                    <div
                      className="absolute left-0 top-0 h-full w-[2px] opacity-70"
                      style={{
                        background: item.color,
                      }}
                    />

                    <div className="flex items-start gap-3">

                      {/* Dot */}
                      <div
                        className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{
                          background: item.color,
                          boxShadow: `0 0 10px ${item.color}80`,
                        }}
                      />

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-2">

                          <p className="text-xs font-bold leading-5 text-slate-300">
                            {item.label}
                          </p>

                          <span
                            className="shrink-0 text-sm font-black"
                            style={{
                              color: item.color,
                            }}
                          >
                            {item.percent}%
                          </span>

                        </div>

                        {/* Mini Progress */}
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-900">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: `${item.percent}%`,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.06,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              background: item.color,
                              boxShadow: `0 0 10px ${item.color}60`,
                            }}
                          />
                        </div>

                        <div className="mt-2 flex items-center justify-between">

                          <span className="text-[10px] text-slate-600">
                            Allocation
                          </span>

                          <span className="text-[10px] font-bold text-slate-500">
                            {formatAmount(item.percent)} BVT
                          </span>

                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}

              </div>

              {/* Total */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="mt-4 flex items-center justify-between rounded-2xl border border-[#FFD700]/15 bg-gradient-to-r from-[#FFD700]/5 to-transparent px-5 py-4"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD700]/10">
                    <CheckCircle
                      size={16}
                      className="text-[#FFD700]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-300">
                      Total Allocation
                    </p>

                    <p className="text-[10px] text-slate-600">
                      Fully allocated token supply
                    </p>
                  </div>

                </div>

                <span className="gold-text text-xl font-black">
                  100%
                </span>

              </motion.div>

            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/6 pt-8 sm:grid-cols-4">

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-white">
                10B
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Total Supply
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-[#FFD700]">
                25%
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Largest Allocation
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-white">
                8
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Allocation Areas
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
              <p className="text-lg font-black text-blue-400">
                100%
              </p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-600">
                Distributed
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default Tokenomics
