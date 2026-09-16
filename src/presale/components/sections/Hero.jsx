
import { motion } from 'framer-motion'
import { Wallet, ExternalLink } from 'lucide-react'
import BackgroundFX from '../effects/BackgroundFX'
import { SITE } from '../../config/site'

// Animation variants
const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:px-8"
    >
      <BackgroundFX dense />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >

          {/* Presale Badge */}
          <motion.div
            variants={fadeIn}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFD700] shadow-lg shadow-[#D4AF37]/5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFD700]" />
            Presale Is Live
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span className="font-['Orbitron'] font-extrabold tracking-wide text-white">
              BVT TOKEN
            </span>

            <br />

            <span
              className="
                font-['Orbitron']
                font-extrabold
                tracking-wider
                bg-[linear-gradient(94.58deg,_#B17E1C_3.26%,_#F2DE75_28.5%,_#C9A43E_95.37%)]
                bg-clip-text
                text-transparent
                animate-shine
              "
            >
              PRESALE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={fadeIn}
            className="mt-5 text-lg font-bold text-[#D4AF37] sm:text-2xl"
          >
            Be Part of the BHAVISHYA Ecosystem
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0"
          >
            BVT Token is a BEP-20 utility token built on the Blockchain Network,
            designed to power the growing BHAVISHYA Ecosystem. Join the BVT
            Presale and become an early participant in the ecosystem's journey
            across real estate, skills, employment, education, healthcare and
            digital services.
          </motion.p>

          {/* Token Information */}
          <motion.div
            variants={fadeIn}
            className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-300 sm:text-sm lg:justify-start"
          >
            <span>Blockchain Network</span>
            <b className="text-[#D4AF37]">•</b>

            <span>BEP-20</span>
            <b className="text-[#D4AF37]">•</b>

            <span>10 Billion Total Supply</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#how-to-buy"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <Wallet size={18} />
              Buy BVT Now
            </a>

            <a
              href="/Whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              View Whitepaper
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT LOGO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.82,
            rotate: -4,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
          }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <div className="absolute inset-8 animate-pulse rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative animate-float">
            <img
              src={SITE.logo}
              alt="Bhavishya Vision Token logo"
              className="relative z-10 mx-auto w-[78%] drop-shadow-[0_0_35px_rgba(212,175,55,.32)] sm:w-[86%]"
            />

            <div className="absolute inset-0 rounded-full border border-[#FFD700]/10" />
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ['10B', 'Total Supply'],
              ['BEP-20', 'Standard'],
              ['Blockchain', 'Network'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass-card p-3 text-center"
              >
                <div className="gold-text text-sm font-black sm:text-base">
                  {value}
                </div>

                <div className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

