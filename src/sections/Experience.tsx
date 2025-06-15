

import React from 'react'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full overflow-x-auto snap-x snap-mandatory flex scroll-smooth">
      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-2">Uber</h2>
        <p className="text-lg mb-4">Strategy & Planning Lead (3 years)</p>
        <p className="max-w-xl text-center mb-6">
          Drove strategic planning and ops for multiple global initiatives; promoted twice while leading cross-functional teams.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">
          View Projects
        </button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 text-gray-800 px-8">
        <h2 className="text-4xl font-bold mb-2">Trade Republic</h2>
        <p className="text-lg mb-4">Head of Strategy (1 year)</p>
        <p className="max-w-xl text-center mb-6">
          Led strategy team during hypergrowth and restructuring; navigated product pivots and market shifts.
        </p>
        <button className="px-4 py-2 bg-white/70 rounded shadow hover:bg-white transition">
          View Projects
        </button>
      </div>

      {/* Add more slides here */}
    </section>
  )
}

export default Experience