import React from 'react'
import avatar from '../assets/avatar_hero.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import airplane from '../assets/airplane2.png'

type HeroProps = { scrollY: number }
const Hero: React.FC<HeroProps> = ({ scrollY }) => {

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 to-white px-4 pt-32 sm:pt-12 overflow-hidden">
        {/* Background elements */}
        <img
          src={cloud1}
          alt="cloud1"
          className="absolute top-8 left-4 w-24 sm:w-32 xl:w-[18%] opacity-80 z-0"
          style={{ transform: `translateX(${scrollY * -0.2 - 20}px)` }}
        />
        <img
          src={cloud2}
          alt="cloud2"
          className="absolute hidden sm:block top-12 sm:top-[18%] xl:top-[20%] right-4 sm:right-[10%] w-16 sm:w-32 xl:w-[18%] opacity-70 z-0"
          style={{ transform: `translateX(${scrollY * -0.1 - 10}px)` }}
        />
        <img
          src={cloud2}
          alt="cloud-behind-avatar"
          className="absolute hidden xl:block top-[42vh] left-[25%] w-[9%] opacity-40 z-0"
          style={{ transform: `translateX(${scrollY * -0.05 - 15}px)` }}
        />
        <img
          src={cloud1}
          alt="cloud-bottom-right"
          className="absolute bottom-8 right-4 w-24 sm:hidden xl:block sm:w-32 xl:w-[18%] opacity-60 z-0"
          style={{ transform: `translateX(${scrollY * -0.05 - 10}px)` }}
        />
        <img
          src={airplane}
          alt="airplane"
          className="absolute top-[12%] sm:top-[18%] right-[-10%] sm:right-[-8%] w-[40%] sm:w-40 xl:w-[18%] opacity-90 z-0"
          style={{ transform: `translateX(${scrollY * -0.8 - 35}px) rotate(10deg)` }}
        />
        <img
          src={airplane}
          alt="airplane-left"
          className="absolute hidden sm:block bottom-12 left-[-8%] sm:left-[2%] w-24 sm:w-[10.8%] xl:w-[18%] opacity-80 z-0"
          style={{ transform: `translateX(${scrollY * -0.5 - 25}px) rotate(10deg)` }}
        />

        {/* Foreground content */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-40 sm:w-24 xl:w-48 h-auto rounded-full border-4 border-white shadow-lg mb-8 sm:mb-4 xl:mb-8 z-10"
        />

        <h1 className="text-5xl sm:text-3xl xl:text-6xl font-extrabold text-gray-800 mb-3 sm:mb-1 xl:mb-3 z-10">Alberto Loddo</h1>
        <p className="text-xl sm:text-xl xl:text-2xl text-gray-600 mb-6 z-10">Building Products That Move People</p>

        <p className="max-w-2xl text-base sm:text-sm xl:text-lg text-gray-700 mb-14 sm:mb-6 xl:mb-14 px-4 z-10">
          Product and strategy leader with 15+ years of experience across travel, mobility, and fintech.
          I’ve scaled international teams at Uber, Trade Republic, and Kiwi.com, and co-founded a Y Combinator-backed startup.
          Really love building data-informed products that drive growth.
        </p>

        <a href="#current"
          className="animate-bounce text-sm sm:text-xs xl:text-base text-blue-500 z-10">
          ↓ Get to know me
        </a>
      </section>
    </div>
  )
}

export default Hero