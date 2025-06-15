import React from 'react'
import profilePic from '../assets/profile-pic.jpg'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 to-white px-4 pt-20">
      <img
        src={profilePic}
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-white shadow-md mb-4"
      />
      <h1 className="text-5xl font-bold text-gray-800 mb-2">Alberto Loddo</h1>
      <p className="text-xl text-gray-600 mb-4">Building Products That Move People</p>
      <p className="max-w-xl text-md text-gray-700 mb-10">
        Product and strategy leader with 15+ years of experience across travel, mobility, and fintech.
        I’ve scaled global teams at Uber and Kiwi.com, co-founded a Y Combinator-backed startup,
        and love building data-informed products that drive growth.
      </p>
      <div className="animate-bounce text-sm text-blue-500">↓ Scroll to explore</div>

      {/* Bottom left waving avatar placeholder */}
      <div className="absolute bottom-6 left-6 text-3xl">
        👋
      </div>
    </section>
  )
}

export default Hero