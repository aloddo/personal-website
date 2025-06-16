import React from 'react'
import avatarKiwi from '../assets/avatar_kiwi_scene.png'
import kiwiLogo from '../assets/kiwi_logo.png'
import windowKiwi from '../assets/window_kiwi_scene2.png'
import gateKiwi from '../assets/gate_kiwi_scene.png'
import deskKiwi from '../assets/desk_kiwi_scene.png'


const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full overflow-x-auto snap-x snap-mandatory flex scroll-smooth">
      <div
        id="current"
        className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-[2vw] relative overflow-hidden"
      >
        {/* Window frames - top 75% */}
        <div className="absolute top-0 left-0 w-full h-[67%] sm:h-[65%] xl:h-[65%] z-0 opacity-40">
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
            className="w-[25vw] sm:w-[10vw] xl:w-[12vw] mb-[4vw] md:mb-[1vw] landscape:mb-[1vw] mx-auto"
          />
          <h2 className="text-[6vw] sm:text-[2.5vw] xl:text-[3vw] font-bold mb-[3vw] md:mb-[2vw] landscape:mb-[1.5vw]">Kiwi.com</h2>
          <p className="
            text-[3vw] 
            sm:text-[1.5vw]
            xl:text-[1.2vw] 
            mb-[5vw] 
            sm:mb-[1.5vw]
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
            sm:py-[1vw]
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
    </section>
  )
}

export default Experience