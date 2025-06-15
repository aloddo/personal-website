import React from 'react'
import avatar from '../assets/avatar_hero.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import airplane from '../assets/airplane2.png'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 to-white px-4 pt-32 overflow-hidden">
      {/* Background elements */}
      <img
        src={cloud1}
        alt="cloud1"
        className="absolute top-[8%] left-[5%] w-28 md:w-64 opacity-80 z-0"
        style={{ transform: 'translateY(-20px)' }}
      />
      <img
        src={cloud2}
        alt="cloud2"
        className="absolute top-[20%] right-[10%] w-72 opacity-70 hidden md:block z-0"
        style={{ transform: 'translateY(-10px)' }}
      />
      <img
        src={cloud2}
        alt="cloud-behind-avatar"
        className="absolute top-[42%] left-[25%] w-36 opacity-40 hidden md:block z-0"
        style={{ transform: 'translateY(-15px)' }}
      />
      <img
        src={cloud2}
        alt="cloud-bottom-right"
        className="absolute bottom-[5%] right-[5%] w-28 opacity-60 z-0"
        style={{ transform: 'translateY(-10px)' }}
      />
      <img
        src={airplane}
        alt="airplane"
        className="absolute top-[16%] md:top-[12%] right-[-8%] w-60 md:w-72 opacity-90 z-0"
        style={{ transform: 'translateY(-35px) rotate(10deg)' }}
      />
      <img
        src={airplane}
        alt="airplane-left"
        className="absolute bottom-[12%] left-[-5%] w-60 md:w-72 opacity-80 hidden md:block z-0"
        style={{ transform: 'translateY(-25px)' }}
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
        I’ve scaled global teams at Uber and Kiwi.com, co-founded a Y Combinator-backed startup,
        and love building data-informed products that drive growth.
      </p>

      <div className="animate-bounce text-sm md:text-base text-blue-500 z-10">↓ Scroll to explore</div>
      
    </section>
  )
}

export default Hero