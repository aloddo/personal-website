import React from 'react'
import avatarKiwi from '../assets/avatar_kiwi_scene.png'
import kiwiLogo from '../assets/kiwi_logo.png'
import windowKiwi from '../assets/window_kiwi_scene2.png'
import gateKiwi from '../assets/gate_kiwi_scene.png'
import deskKiwi from '../assets/desk_kiwi_scene.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import airplane2 from '../assets/airplane2.png'


const Experience: React.FC<{ scrollY: number; activeIndex: number }> = ({ scrollY, activeIndex }) => {
  const totalSlides = 6;
  const currentSlideIndex = activeIndex ?? 0; // Use activeIndex as current slide

  return (
    <section id="experience" className="w-full overflow-x-auto snap-x snap-mandatory flex scroll-smooth" style={{scrollSnapType: 'x mandatory', scrollSnapAlign: 'start'}}>
      <div
        id="current"
        className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-[2vw] relative overflow-hidden"
      >
        {/* Clouds and airplane with parallax */}
        <img
          src={cloud1}
          alt="Cloud 1"
          className="absolute w-[20vw] sm:w-[10vw] xl:w-[10vw] z-0 transition-transform duration-[600ms] ease-out will-change-transform"
          style={{
            top: '0vw',
            left: '10vw',
            transform: `translateX(${-scrollY * 0.3}px)`
          }}
        />
        <img
          src={cloud2}
          alt="Cloud 2"
          className="absolute w-[18vw] sm:w-[9vw] xl:w-[9vw] z-0 transition-transform duration-[600ms] ease-out will-change-transform"
          style={{
            top: '4vw',
            right: '-8vw',
            transform: `translateX(${-scrollY * 0.4}px)`
          }}
        />
        <img
          src={airplane2}
          alt="Airplane"
          className="absolute w-[28vw] sm:w-[20vw] xl:w-[20vw] z-0 transition-transform duration-[600ms] ease-out will-change-transform"
          style={{
            bottom: '0vw',
            right: '5vw',
            transform: `translateY(${-scrollY * 0.75}px) translateX(${-scrollY * 0.6}px) rotate(10deg)`
          }}
        />
        {/* Window frames - top 75% */}
        <div className="absolute top-0 left-0 w-full h-[67%] sm:h-[65%] xl:h-[65%] z-10 opacity-40">
          <img
            src={windowKiwi}
            alt="Window frame"
            className="w-full h-full object-fill scale-[1.3] sm:scale-1.05 xl:scale-1.05"
          />
        </div>
        {/* White floor - bottom 25% */}
        {/* <div className="absolute bottom-0 w-full h-[25%] bg-white z-10" /> */}
        {/* Avatar at gate, bottom aligned */}
        <img
          src={avatarKiwi}
          alt="Avatar at gate"
          className="absolute bottom-[15%] left-[5%] w-[38vw] sm:bottom-[18%] sm:left-[2%] sm:w-[28vw] xl:bottom-[18%] xl:left-[2%] xl:w-[28vw] z-20"
        />
        {/* Desk and kiosk, bottom aligned */}
        <img
          src={deskKiwi}
          alt="Desk and kiosk"
          className="absolute bottom-[20%] right-[3%] w-[32vw] sm:bottom-[21%] sm:right-[3%] sm:w-[25vw] xl:bottom-[21%] xl:right-[3%] xl:w-[25vw] z-20"
        />
        {/* Gate sign, horizontally centered with desk */}
        <img
          src={gateKiwi}
          alt="Gate sign"
          className="absolute bottom-[30%] right-[4%] w-[18vw] sm:bottom-[55%] sm:right-[8%] sm:w-[15vw] xl:bottom-[55%] xl:right-[8%] xl:w-[15vw] z-30"
        />
        {/* Text content, vertically centered in remaining space */}
        <div
          className="absolute top-[26%] left-1/2 transform -translate-x-1/2 z-30 text-center px-[2vw] max-w-[50vw]"
        >
          <img
            src={kiwiLogo}
            alt="Kiwi.com logo"
            className="w-[25vw] sm:w-[10vw] xl:w-[12vw] mb-[4vw] sm:mb-[0.5vw] xl:mb-[1vw] mx-auto"
          />
          <h2 className="text-[6vw] sm:text-[2.5vw] xl:text-[3vw] font-bold mb-[3vw] sm:mb-[0.4vw] xl:mb-[1vw]">Kiwi.com</h2>
          <p className="text-[3vw] sm:text-[1.6vw] xl:text-[1.4vw] mb-[2vw] sm:mb-[0.5vw] xl:mb-[1vw] leading-[4vw] sm:leading-[2.5vw] xl:leading-[2vw] font-semibold">
            Group Product Manager</p>
          <p className="
            text-[3vw] 
            sm:text-[1.5vw]
            xl:text-[1.2vw] 
            mb-[5vw] 
            sm:mb-[1vw]
            xl:mb-[1.5vw]
            leading-[5vw] 
            sm:leading-[2.2vw] 
            xl:leading-[2vw] 
          ">
            Leading teams optimizing booking revenue and travel extras.<br />
            Driving product vision, UX, and monetization for ancillaries.
          </p>
          <button className="
            px-[2.5vw]
            sm:px-[1.5vw]
            xl:px-[1.4vw]
            py-[2.5vw]
            sm:py-[0.9vw]
            xl:py-[1vw]
            text-[3vw]
            sm:text-[1.3vw] 
            xl:text-[1.2vw] 
             bg-white/70 rounded shadow hover:bg-white transition">
            View Projects
          </button>
        </div>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 px-[2vw]">
        <h2 className="text-[3.5vw] font-bold mb-[1.5vw]">Uber</h2>
        <p className="text-[1.2vw] leading-[1.7vw] mb-[1.5vw]">Strategy & Planning Lead (3 years)</p>
        <p className="max-w-xl text-center mb-[1.5vw] text-[1.2vw] leading-[1.7vw]">
          Drove strategic planning and ops for multiple global initiatives; promoted twice while leading cross-functional teams.
        </p>
        <button className="px-[2vw] py-[1vw] text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 text-gray-800 px-[2vw]">
        <h2 className="text-[3.5vw] font-bold mb-[1.5vw]">Trade Republic</h2>
        <p className="text-[1.2vw] leading-[1.7vw] mb-[1.5vw]">Head of Strategy (1 year)</p>
        <p className="max-w-xl text-center mb-[1.5vw] text-[1.2vw] leading-[1.7vw]">
          Led strategy team during hypergrowth and restructuring; navigated product pivots and market shifts.
        </p>
        <button className="px-[2vw] py-[1vw] text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-pink-300 text-gray-800 px-[2vw]">
        <h2 className="text-[3.5vw] font-bold mb-[1.5vw]">lastminute.com</h2>
        <p className="text-[1.2vw] leading-[1.7vw] mb-[1.5vw]">Product Manager, Flights</p>
        <p className="max-w-xl text-center mb-[1.5vw] text-[1.2vw] leading-[1.7vw]">
          Owned the core flight booking flow and checkout optimization. Improved conversion, design, and supplier integration.
        </p>
        <button className="px-[2vw] py-[1vw] text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 to-yellow-300 text-gray-800 px-[2vw]">
        <h2 className="text-[3.5vw] font-bold mb-[1.5vw]">Open Motors</h2>
        <p className="text-[1.2vw] leading-[1.7vw] mb-[1.5vw]">Co-Founder & COO</p>
        <p className="max-w-xl text-center mb-[1.5vw] text-[1.2vw] leading-[1.7vw]">
          Built an open electric vehicle platform. Managed hardware sourcing, manufacturing ops, and investor relations.
        </p>
        <button className="px-[2vw] py-[1vw] text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 px-[2vw]">
        <h2 className="text-[3.5vw] font-bold mb-[1.5vw]">Early Career</h2>
        <p className="text-[1.2vw] leading-[1.7vw] mb-[1.5vw]">Consulting & Startups</p>
        <p className="max-w-xl text-center mb-[1.5vw] text-[1.2vw] leading-[1.7vw]">
          Worked across Asia and the US in roles spanning product, business development, and market entry. YC alum.
        </p>
        <button className="px-[2vw] py-[1vw] text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="absolute bottom-[2vw] left-1/2 transform -translate-x-1/2 flex gap-[1vw] z-50">
        {[...Array(totalSlides)].map((_, i) => (
          <div key={i} className={`w-[1vw] h-[1vw] bg-gray-400 rounded-full ${i === currentSlideIndex ? 'opacity-100' : 'opacity-50'}`} />
        ))}
      </div>
    </section>
  )
}

export default Experience