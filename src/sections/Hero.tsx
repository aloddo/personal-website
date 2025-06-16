
import React, { useEffect, useState } from 'react'
import avatar from '../assets/avatar_hero.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import airplane from '../assets/airplane2.png'

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 to-white px-4 pt-32 overflow-hidden">
        {/* Background elements */}
        <img
          src={cloud1}
          alt="cloud1"
          className="absolute top-[8%] left-[5%] w-28 md:w-64 opacity-80 z-0"
          style={{ transform: `translateX(${scrollY * -0.3 - 20}px)` }}
        />
        <img
          src={cloud2}
          alt="cloud2"
          className="absolute top-[20%] right-[10%] w-72 opacity-70 hidden md:block z-0"
          style={{ transform: `translateX(${scrollY * -0.15 - 10}px)` }}
        />
        <img
          src={cloud2}
          alt="cloud-behind-avatar"
          className="absolute top-[42%] left-[25%] w-36 opacity-40 hidden md:block z-0"
          style={{ transform: `translateX(${scrollY * -0.1 - 15}px)` }}
        />
        <img
          src={cloud2}
          alt="cloud-bottom-right"
          className="absolute bottom-[8%] right-[5%] w-28 opacity-60 z-0"
          style={{ transform: `translateX(${scrollY * -0.1 - 10}px)` }}
        />
        <img
          src={airplane}
          alt="airplane"
          className="absolute top-[16%] md:top-[12%] right-[-8%] w-60 md:w-72 opacity-90 z-0"
          style={{ transform: `translateX(${scrollY * -0.4 - 35}px) rotate(10deg)` }}
        />
        <img
          src={airplane}
          alt="airplane-left"
          className="absolute bottom-[12%] left-[-5%] w-60 md:w-72 opacity-80 hidden md:block z-0"
          style={{ transform: `translateX(${scrollY * -0.25 - 25}px)` }}
        />

        {/* Foreground content */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-40 md:w-48 h-auto rounded-full border-4 border-white shadow-lg mb-8 z-10"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-3 z-10">Alberto Loddo</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 z-10">Building Products That Move People</p>

        <p className="max-w-2xl text-base md:text-lg text-gray-700 mb-14 px-4 z-10">
          Product and strategy leader with 15+ years of experience across travel, mobility, and fintech.
          I’ve scaled international teams at Uber, Trade Republic, and Kiwi.com, and co-founded a Y Combinator-backed startup.
          Really love building data-informed products that drive growth.
        </p>

        <a href="#current"
          className="animate-bounce text-sm md:text-base text-blue-500 z-10">
          ↓ Get to know me
        </a>
      </section>
    </div>
  )
}

export default Hero