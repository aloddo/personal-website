import React, { useEffect, useState, useRef } from 'react'
import Hero from './sections/Hero'
import Experience from './sections/Experience'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const slidesRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const container = slidesRef.current
    if (!container) return

    const onScroll = () => {
      const scrollLeft = container.scrollLeft
      const slideWidth = container.clientWidth
      const index = Math.round(scrollLeft / slideWidth)
      setActiveIndex(index)
    }

    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      {/* Desktop Nav */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30 hidden xl:flex flex-row space-x-6 text-base text-gray-600">
        <a href="#home" className="transition-all duration-200 hover:text-gray-900 hover:tracking-wide">Home</a>
        <a href="#experience" className="transition-all duration-200 hover:text-gray-900 hover:tracking-wide">Work Experience</a>
        <a href="#education" className="transition-all duration-200 hover:text-gray-900 hover:tracking-wide">Education</a>
        <a href="#skills" className="transition-all duration-200 hover:text-gray-900 hover:tracking-wide">Skills</a>
        <a href="#passions" className="transition-all duration-200 hover:text-gray-900 hover:tracking-wide">Passions</a>
        <a href="#contact" className="transition-all duration-200 hover:text-gray-900 hover:tracking-wide">Get in touch</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="fixed top-6 right-6 z-30 xl:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md shadow-xl rounded-md py-2 flex flex-col items-start text-sm text-gray-700">
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block w-full px-4 py-2 hover:bg-gray-100">Work Experience</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)} className="block w-full px-4 py-2 hover:bg-gray-100">Education</a>
            <a href="#passions" onClick={() => setIsMenuOpen(false)} className="block w-full px-4 py-2 hover:bg-gray-100">Passions</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full px-4 py-2 hover:bg-gray-100">Get in touch</a>
          </div>
        )}
      </div>
      <div className="relative overflow-hidden" ref={slidesRef}>
        <Hero scrollY={scrollY} />
        <Experience scrollY={scrollY} activeIndex={activeIndex} />
      </div>
      <footer className="w-full text-center md:text-right text-sm text-gray-500 py-4 md:pr-6">
        🏖️ vibe coded with ❤️ in 2025
      </footer>
    </main>
  )
}

export default App