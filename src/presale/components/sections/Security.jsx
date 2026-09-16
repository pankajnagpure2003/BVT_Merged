import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Copy, ExternalLink, LockKeyhole, Shield } from 'lucide-react'
import { SITE } from '../../config/site'

function Security() {
  const tips = [
    'Verify the official BVT website.',
    'Verify the official BVT contract address.',
    'Check the network before confirming a transaction.',
    'Never share your private key or seed phrase.',
    'Beware of unofficial presale links and impersonators.',
    'Review the official presale terms before participating.'
  ]

  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(null)

  const contract = SITE.contract

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contract)
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    } catch {}
  }

  return (
    <section className="section-padding relative overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[35%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[100px] sm:h-[600px] sm:w-[600px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />

        <div className="absolute left-0 right-0 top-[30%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

        <div className="absolute left-0 right-0 top-[70%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      </div>

      {/* =========================================================
          MAIN
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-7xl"
      >

        {/* =========================================================
            INTRO
        ========================================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-[#D4AF37] sm:w-12" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] sm:text-[10px]">
                Security
              </span>

            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Security
              <span className="text-slate-500"> First.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              Your security matters. Before purchasing BVT:
            </motion.p>

          </div>

          {/* desktop identifier */}

          <div className="hidden lg:flex items-center gap-4">

            <div className="h-px w-12 bg-white/10 xl:w-16" />

            <div>

              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
                BVT / SECURITY
              </div>

              <div className="mt-1 font-mono text-[10px] text-slate-500">
                VERIFY_BEFORE_TRANSACTION
              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            MAIN SECURITY LAYOUT
        ========================================================== */}

        <div className="mt-10 overflow-hidden border border-white/[0.07] bg-[#030A22]/70 sm:mt-12 lg:mt-14">

          <div className="grid lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.45fr)]">


            {/* =====================================================
                LEFT — SECURITY CORE
            ====================================================== */}

     

<div className="relative min-h-[400px] overflow-hidden border-b border-white/[0.07] bg-[#020824] sm:min-h-[460px] lg:min-h-[600px] lg:border-b-0 lg:border-r">

  {/* =====================================================
      SECURITY GRID BACKGROUND
  ====================================================== */}

  <div
    className="pointer-events-none absolute inset-0 opacity-[0.18]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(212,175,55,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(212,175,55,0.12) 1px, transparent 1px)
      `,
      backgroundSize: "42px 42px"
    }}
  />

  {/* darker vignette */}

  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#020824_75%)]" />


  {/* =====================================================
      GOLD SECURITY AMBIENT GLOW
  ====================================================== */}

  <motion.div
    animate={{
      opacity: [0.08, 0.16, 0.08],
      scale: [0.9, 1.1, 0.9]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[280px]
      w-[280px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#D4AF37]
      blur-[100px]
    "
  />


  {/* =====================================================
      CORNER MARKS
  ====================================================== */}

  <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-[#D4AF37]/50" />
  <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-[#D4AF37]/50" />
  <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#D4AF37]/50" />
  <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#D4AF37]/50" />


  {/* =====================================================
      TOP STATUS
  ====================================================== */}

  <div className="absolute left-6 top-6 z-30 flex items-center gap-3 sm:left-8 sm:top-8">

    <span className="relative flex h-2 w-2">

      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

    </span>

    <div>

      <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-400 sm:text-[9px]">
        Security Network
      </p>

      <p className="mt-1 font-mono text-[7px] tracking-[0.18em] text-emerald-400/60">
        SYSTEM MONITORING ACTIVE
      </p>

    </div>

  </div>


  {/* =====================================================
      NETWORK CONNECTIONS
  ====================================================== */}

  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 600 600"
    preserveAspectRatio="none"
  >

    {/* left → center */}

    <motion.path
      d="M 40 170 L 180 250 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.22)"
      strokeWidth="1"
      strokeDasharray="5 8"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* right → center */}

    <motion.path
      d="M 560 190 L 420 255 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.18)"
      strokeWidth="1"
      strokeDasharray="5 8"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* bottom left */}

    <motion.path
      d="M 90 500 L 210 400 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.16)"
      strokeWidth="1"
      strokeDasharray="4 9"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* bottom right */}

    <motion.path
      d="M 510 500 L 390 400 L 300 300"
      fill="none"
      stroke="rgba(212,175,55,.16)"
      strokeWidth="1"
      strokeDasharray="4 9"
      animate={{
        strokeDashoffset: [0, -100]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear"
      }}
    />

  </svg>


  {/* =====================================================
      NETWORK NODES
  ====================================================== */}

  {[
    "left-[11%] top-[27%]",
    "right-[11%] top-[30%]",
    "left-[17%] bottom-[24%]",
    "right-[17%] bottom-[23%]",
    "left-[30%] top-[42%]",
    "right-[30%] top-[43%]"
  ].map((position, index) => (

    <motion.div
      key={index}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 2 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${position} z-10 h-2 w-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,.65)]`}
    />

  ))}


  {/* =====================================================
      SMALL SECURITY DATA BLOCKS
  ====================================================== */}

  <div className="absolute left-5 top-[42%] z-20 hidden w-24 border border-white/[0.07] bg-[#020B2D]/80 p-3 backdrop-blur-sm sm:block">

    <p className="font-mono text-[7px] tracking-[0.18em] text-slate-600">
      NODE STATUS
    </p>

    <div className="mt-2 flex items-center gap-2">

      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

      <span className="font-mono text-[8px] text-emerald-400">
        VERIFIED
      </span>

    </div>

  </div>


  <div className="absolute right-5 top-[46%] z-20 hidden w-24 border border-white/[0.07] bg-[#020B2D]/80 p-3 text-right backdrop-blur-sm sm:block">

    <p className="font-mono text-[7px] tracking-[0.18em] text-slate-600">
      THREAT LEVEL
    </p>

    <p className="mt-2 font-mono text-[9px] text-emerald-400">
      LOW
    </p>

  </div>


  {/* =====================================================
      CENTRAL SECURITY SYSTEM
  ====================================================== */}

  <div className="absolute inset-0 flex items-center justify-center">


    {/* =================================================
        RADAR CIRCLE
    ================================================== */}

    <div className="absolute h-64 w-64 rounded-full border border-[#D4AF37]/10 sm:h-72 sm:w-72" />

    <div className="absolute h-48 w-48 rounded-full border border-[#D4AF37]/10 sm:h-56 sm:w-56" />

    <div className="absolute h-32 w-32 rounded-full border border-[#D4AF37]/10" />


    {/* =================================================
        ROTATING RADAR SWEEP
    ================================================== */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      className="
        absolute
        h-64
        w-64
        rounded-full
        sm:h-72
        sm:w-72
      "
    >

      <div className="absolute left-1/2 top-1/2 h-1/2 w-px origin-bottom -translate-x-1/2 bg-gradient-to-t from-[#D4AF37]/50 to-transparent" />

    </motion.div>


    {/* =================================================
        CENTER SECURITY CORE
    ================================================== */}

    <motion.div
      animate={{
        boxShadow: [
          "0 0 0 rgba(212,175,55,0)",
          "0 0 45px rgba(212,175,55,.18)",
          "0 0 0 rgba(212,175,55,0)"
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="
        relative
        z-20
        flex
        h-28
        w-28
        items-center
        justify-center
        rounded-full
        border
        border-[#D4AF37]/50
        bg-[#020B2D]
        shadow-[inset_0_0_30px_rgba(212,175,55,.05)]
        sm:h-32
        sm:w-32
      "
    >

      {/* inner ring */}

      <div className="absolute inset-2 rounded-full border border-[#D4AF37]/20" />


      {/* logo */}

      <div className="relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/30  p-2 shadow-[0_0_30px_rgba(212,175,55,.2)] sm:h-[72px] sm:w-[72px]">

        <img
          src={SITE.logo}
          alt="BVT Security"
          className="h-full w-full object-contain"
        />

      </div>


      {/* core label */}

      <span className="absolute -bottom-6 whitespace-nowrap font-mono text-[7px] font-semibold tracking-[0.25em] text-[#D4AF37]/70">
        BVT SECURE CORE
      </span>

    </motion.div>


    {/* =================================================
        SECURITY PULSE
    ================================================== */}

    <motion.div
      animate={{
        scale: [1, 1.8],
        opacity: [0.35, 0]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeOut"
      }}
      className="absolute h-28 w-28 rounded-full border border-[#D4AF37]/30"
    />

  </div>


  {/* =====================================================
      LIVE SECURITY DATA
  ====================================================== */}

  <div className="absolute bottom-[82px] left-5 right-5 z-20 hidden sm:block">

    <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">

      <div className="flex items-center gap-4">

        <div>

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600">
            Encryption
          </p>

          <p className="mt-1 font-mono text-[8px] text-slate-400">
            VERIFIED
          </p>

        </div>

        <div className="h-5 w-px bg-white/[0.07]" />

        <div>

          <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-slate-600">
            Network
          </p>

          <p className="mt-1 font-mono text-[8px] text-slate-400">
            MONITORED
          </p>

        </div>

      </div>


      <div className="flex items-center gap-2">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-emerald-400/70">
          SECURE
        </span>

      </div>

    </div>

  </div>


  {/* =====================================================
      BOTTOM SECURITY INFO
  ====================================================== */}

  <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.06] bg-[#02071B]/95 px-6 py-5 backdrop-blur-md sm:px-8">

    <div className="flex items-center justify-between gap-4">

      <div>

        <p className="text-[8px] uppercase tracking-[0.22em] text-slate-600">
          Protection Layer
        </p>

        <p className="mt-1 text-sm font-bold text-white">
          Verification Required
        </p>

      </div>


      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.05]">

        <CheckCircle
          size={15}
          strokeWidth={1.7}
          className="text-emerald-400"
        />

      </div>

    </div>

  </div>

</div>
            {/* =====================================================
                RIGHT — VERIFICATION
            ====================================================== */}

            <div className="min-w-0 bg-[#020B2D]/50">


              {/* header */}

              <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-5 sm:px-7 md:px-8">

                <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                    Verification Path
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600 sm:text-xs">
                    Follow each step before purchasing BVT.
                  </p>

                </div>

                <span className="shrink-0 font-mono text-[8px] text-slate-700 sm:text-[9px]">
                  06 CHECKS
                </span>

              </div>


              {/* =================================================
                  CHECKS
              ================================================== */}

              <div>

                {tips.map((tip, i) => {

                  const isHovered = hovered === i

                  return (
                    <motion.div
                      key={tip}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      initial={{
                        opacity: 0,
                        x: 20
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.5
                      }}
                      className={`group relative flex min-h-[68px] items-center gap-3 border-b border-white/[0.06] px-4 transition-all sm:min-h-[72px] sm:gap-4 sm:px-7 md:px-8 ${
                        isHovered
                          ? 'bg-white/[0.025]'
                          : ''
                      }`}
                    >

                      {/* timeline */}

                      <div className="absolute bottom-0 left-[27px] top-0 w-px bg-white/[0.05] sm:left-[43px]" />


                      {/* number */}

                      <div
                        className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[9px] transition-all ${
                          isHovered
                            ? 'border-[#D4AF37]/60 bg-[#D4AF37] text-[#020B2D]'
                            : 'border-white/10 bg-[#020B2D] text-slate-600'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>


                      {/* check */}

                      <CheckCircle
                        size={17}
                        strokeWidth={1.5}
                        className={`relative z-10 shrink-0 transition-colors ${
                          isHovered
                            ? 'text-[#FFD700]'
                            : 'text-slate-600'
                        }`}
                      />


                      {/* text */}

                      <span
                        className={`min-w-0 flex-1 text-[11px] font-medium leading-5 transition-colors sm:text-xs sm:leading-6 md:text-sm ${
                          isHovered
                            ? 'text-white'
                            : 'text-slate-400'
                        }`}
                      >
                        {tip}
                      </span>


                      {/* hover line */}

                      <span
                        className={`hidden h-px w-8 shrink-0 transition-all sm:block ${
                          isHovered
                            ? 'bg-[#D4AF37]'
                            : 'bg-white/[0.06]'
                        }`}
                      />

                    </motion.div>
                  )
                })}

              </div>


              {/* =================================================
                  CONTRACT
              ================================================== */}

              <div className="p-4 sm:p-6 md:p-8">

                <div className="relative overflow-hidden border border-[#D4AF37]/20 bg-[#050F2B]">

                  {/* scanning line */}

                  <motion.div
                    animate={{
                      x: ['-100%', '500%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 2
                    }}
                    className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  />


                  <div className="p-4 sm:p-5 md:p-6">


                    {/* contract title */}

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]">

                          <LockKeyhole
                            size={16}
                            strokeWidth={1.5}
                            className="text-[#D4AF37]"
                          />

                        </div>

                        <div>

                          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500">
                            Smart Contract
                          </p>

                          <p className="mt-1 text-xs font-bold text-white">
                            Blockchain BEP-20
                          </p>

                        </div>

                      </div>


                      <div className="flex items-center gap-2">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-400/80">
                          Contract Identifier
                        </span>

                      </div>

                    </div>


                    {/* address */}

                    <div className="mt-5 flex min-w-0 items-center gap-2 border border-white/[0.06] bg-[#020B2D] p-2.5 sm:gap-3 sm:p-3">

                      <code className="min-w-0 flex-1 truncate font-mono text-[9px] text-slate-400 sm:text-[10px] md:text-xs">
                        {contract}
                      </code>

                      <button
                        onClick={copy}
                        className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/[0.07] text-slate-500 transition-all hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:text-[#FFD700] sm:h-9 sm:w-9"
                        aria-label="Copy contract"
                      >
                        {copied ? (
                          <CheckCircle
                            size={15}
                            className="text-emerald-400"
                          />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>

                    </div>


                    {/* copied */}

                    {copied && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -3
                        }}
                        animate={{
                          opacity: 1,
                          y: 0
                        }}
                        className="mt-2 text-right text-[9px] text-emerald-400"
                      >
                        Contract copied
                      </motion.div>
                    )}


                    {/* view contract */}

                    <button className="mt-4 flex min-h-[42px] w-full items-center justify-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/[0.04] py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#020B2D] sm:text-[10px]">

                      View Contract

                      <ExternalLink size={13} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            BOTTOM SECURITY LINE
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.3
          }}
          className="mt-4 flex flex-col gap-3 border-t border-white/[0.06] pt-4 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-5"
        >

          <div className="flex items-center gap-3">

            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10">

              <Shield
                size={11}
                className="text-[#D4AF37]"
              />

            </span>

            <span className="text-[8px] uppercase tracking-[0.15em] text-slate-600 sm:text-[9px] sm:tracking-[0.18em]">
              Verify every detail before confirming a transaction
            </span>

          </div>

          <div className="font-mono text-[8px] tracking-[0.2em] text-slate-700">
            BVT • SECURE BY VERIFICATION
          </div>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Security
