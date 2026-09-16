import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import PresaleStatus from './components/sections/PresaleStatus'
import HowToBuy from './components/sections/HowToBuy'
import PresaleDetails from './components/sections/PresaleDetails'
import Benefits from './components/sections/Benefits'
import Ecosystem from './components/sections/Ecosystem'
import Tokenomics from './components/sections/Tokenomics'
import Tokenomic from './components/sections/Tokenomic'
import Security from './components/sections/Security'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Disclaimer from './components/sections/Disclaimer'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#020B2D] text-white selection:bg-[#0066FF]/30">
      <Navbar />
      <main>
        <Hero />
        <PresaleStatus />
        <HowToBuy />
        <PresaleDetails />
        <Benefits />
        <Ecosystem />
        <Tokenomics />
        <Tokenomic />
        <Security />
        <FAQ />
        <CTA />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  )
}
