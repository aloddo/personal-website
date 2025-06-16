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
        className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-8 relative overflow-hidden"
      >
        {/* Window frames - top 80% */}
        <div className="absolute top-0 left-0 w-[166%] h-[80%] flex z-0 opacity-40 -translate-x-[20%]">
         
          <img
            src={windowKiwi}
            alt="Window frame"
            className="w-full h-full object-contain"
          />
        </div>
        {/* White floor - bottom 20% */}
        <div className="absolute bottom-0 w-full h-[20%] bg-white z-10" />
        {/* Avatar at gate, bottom aligned */}
        <img
          src={avatarKiwi}
          alt="Avatar at gate"
          className="absolute bottom-[12%] left-[2%] w-[380px] md:w-[480px] z-20"
        />
        {/* Desk and kiosk, bottom aligned */}
        <img
          src={deskKiwi}
          alt="Desk and kiosk"
          className="absolute bottom-[16%] right-[3%] w-[340px] md:w-[400px] z-20"
        />
        {/* Gate sign, horizontally centered with desk */}
        <img
          src={gateKiwi}
          alt="Gate sign"
          className="absolute bottom-[53%] right-[8%] w-[130px] md:w-[200px] z-30"
        />
        {/* Text content, vertically centered in remaining space */}
        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 z-30 text-center max-w-md text-sm md:text-base">
          <img src={kiwiLogo} alt="Kiwi.com logo" className="mx-auto mb-4 w-32 md:w-40" />
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Kiwi.com</h2>
          <p className="mb-6 leading-relaxed">
            Leading teams optimizing booking revenue and travel extras.<br />
            Driving product vision, UX, and monetization for ancillaries.
          </p>
          <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">
            View Projects
          </button>
        </div>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-2">Uber</h2>
        <p className="text-lg mb-4">Strategy & Planning Lead (3 years)</p>
        <p className="max-w-xl text-center mb-6">
          Drove strategic planning and ops for multiple global initiatives; promoted twice while leading cross-functional teams.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-4">Trade Republic</h2>
        <p className="text-lg mb-4">Head of Strategy (1 year)</p>
        <p className="max-w-xl text-center mb-6">
          Led strategy team during hypergrowth and restructuring; navigated product pivots and market shifts.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-pink-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-2">lastminute.com</h2>
        <p className="text-lg mb-4">Product Manager, Flights</p>
        <p className="max-w-xl text-center mb-6">
          Owned the core flight booking flow and checkout optimization. Improved conversion, design, and supplier integration.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 to-yellow-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-2">Open Motors</h2>
        <p className="text-lg mb-4">Co-Founder & COO</p>
        <p className="max-w-xl text-center mb-6">
          Built an open electric vehicle platform. Managed hardware sourcing, manufacturing ops, and investor relations.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-2">Early Career</h2>
        <p className="text-lg mb-4">Consulting & Startups</p>
        <p className="max-w-xl text-center mb-6">
          Worked across Asia and the US in roles spanning product, business development, and market entry. YC alum.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>
    </section>
  )
}

export default Experience