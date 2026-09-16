import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import BVTHome from './BVTHome'
import PresaleHome from './presale/PresaleHome'

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020B2D] px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">404</p>
        <h1 className="mt-3 text-3xl font-black">Page not found</h1>
        <Link to="/" className="btn-gold mt-6 inline-flex">Back to Home</Link>
      </div>
    </main>
  )
}

function RouteScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<BVTHome />} />
        <Route path="/presale" element={<PresaleHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
