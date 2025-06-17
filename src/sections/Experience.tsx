import React, { useState, useEffect, useRef } from 'react'
import avatarKiwi from '../assets/avatar_kiwi_scene.png'
import kiwiLogo from '../assets/kiwi_logo.png'
import windowKiwi from '../assets/window_kiwi_scene2.png'
import gateKiwi from '../assets/gate_kiwi_scene.png'
import deskKiwi from '../assets/desk_kiwi_scene.png'
import cloud1 from '../assets/cloud1.png'
import cloud2 from '../assets/cloud2.png'
import airplane2 from '../assets/airplane2.png'

import avatarUber from '../assets/avatar_uber_scene.png'
import carUber1 from '../assets/car_uber_scene1.png'
import carUber2 from '../assets/car_uber_scene2.png'
import roadUber from '../assets/road_uber_scene.png'
import arrivalsUber from '../assets/arrivals_uber_scene.png'
import signUber from '../assets/sign_uber_scene.png'
import uberCar from '../assets/uber_car.png'
import uberLogo from '../assets/uber_logo.png'
import airplane1 from '../assets/airplane1.png'


const Experience: React.FC<{ scrollY: number; activeIndex: number }> = ({ scrollY, activeIndex }) => {
  const totalSlides = 6;
  const currentSlideIndex = activeIndex ?? 0; // Use activeIndex as current slide

  const [isMobilePortrait, setIsMobilePortrait] = useState(false)

  useEffect(() => {
    const onResize = () => setIsMobilePortrait(window.innerWidth < 640)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // ref for horizontal scroll container
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeDot, setActiveDot] = useState(currentSlideIndex);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;
    const onScroll = () => {
      setScrollX(ref.scrollLeft);
      const width = ref.clientWidth;
      const index = Math.round(ref.scrollLeft / width);
      setActiveDot(prev => prev !== index ? index : prev);
    };
    ref.addEventListener('scroll', onScroll);
    return () => ref.removeEventListener('scroll', onScroll);
  }, [containerRef]);

  // scroll to slide on dot click
  const handleDotClick = (index: number) => {
    const width = containerRef.current?.clientWidth ?? window.innerWidth;
    containerRef.current?.scrollTo({ left: width * index, behavior: 'smooth' });
    // setActiveDot(index);
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full overflow-x-auto snap-x snap-mandatory flex scroll-smooth"
      style={{scrollSnapType: 'x mandatory', scrollSnapAlign: 'start'}}
    >
      <div
        id="current"
        className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-[2%] relative overflow-hidden"
      >
        {/* Clouds and airplane with parallax */}
        <img
          src={cloud1}
          alt="Cloud 1"
          className="absolute w-[20%] sm:w-[10%] xl:w-[10%] z-10 transition-transform duration-[600ms] ease-out will-change-transform"
          style={{
            top: '0%',
            left: '10%',
            transform: `translateX(${-scrollY * 0.03 - scrollX * 0.03}px)`
          }}
        />
        <img
          src={cloud2}
          alt="Cloud 2"
          className="absolute w-[18%] sm:w-[9%] xl:w-[9%] z-10 transition-transform duration-[600ms] ease-out will-change-transform"
          style={{
            top: '4%',
            right: '-8%',
            transform: `translateX(${-scrollY * 0.04 - scrollX * 0.04}px)`
          }}
        />
        <img
          src={airplane2}
          alt="Airplane"
          className="absolute w-[28%] sm:w-[20%] xl:w-[20%] z-10 transition-transform duration-[600ms] ease-out will-change-transform"
          style={{
            bottom: '0%',
            right: '5%',
            transform: `translateY(${
              isMobilePortrait
                ? -scrollY * 0.8
                : -scrollY * 0.75}px) translateX(${
              isMobilePortrait
                ? window.innerWidth * 0.65 - scrollY * 0.6 - scrollX * 0.6
                : -scrollY * 0.6 - scrollX * 0.6
            }px) rotate(10deg)`
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
          className="absolute bottom-[15%] left-[5%] w-[38%] sm:bottom-[18%] sm:left-[2%] sm:w-[28%] xl:bottom-[18%] xl:left-[2%] xl:w-[28%] z-20"
        />
        {/* Desk and kiosk, bottom aligned */}
        <img
          src={deskKiwi}
          alt="Desk and kiosk"
          className="absolute bottom-[20%] right-[3%] w-[32%] sm:bottom-[21%] sm:right-[3%] sm:w-[25%] xl:bottom-[21%] xl:right-[3%] xl:w-[25%] z-20"
        />
        {/* Gate sign, horizontally centered with desk */}
        <img
          src={gateKiwi}
          alt="Gate sign"
          className="absolute bottom-[30%] right-[4%] w-[18%] sm:bottom-[55%] sm:right-[8%] sm:w-[15%] xl:bottom-[55%] xl:right-[8%] xl:w-[15%] z-30"
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
          <h2 className="text-[6vw] sm:text-[2.5vw] xl:text-[3vw] font-bold mb-[3vw] sm:mb-[0.4vw] xl:mb-[1vw]">Group Product Manager</h2>
          <p className="text-[3vw] sm:text-[1.6vw] xl:text-[1.4vw] mb-[2vw] sm:mb-[0.5vw] xl:mb-[1vw] leading-[4vw] sm:leading-[2.5vw] xl:leading-[2vw] font-semibold">
            2023-Present
          </p>
          <p className="text-[3vw] sm:text-[1.5vw] xl:text-[1.2vw] mb-[5vw] sm:mb-[1vw] xl:mb-[1.5vw] leading-[5vw] sm:leading-[2.2vw] xl:leading-[2vw]">
            Leading teams optimizing booking revenue and travel extras.<br />
            Driving product vision, UX, and monetization for ancillaries.
          </p>
          <button className="px-[2.5vw] sm:px-[1.5vw] xl:px-[1.4vw] py-[2.5vw] sm:py-[0.9vw] xl:py-[1vw] text-[3vw] sm:text-[1.3vw] xl:text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">
            View Projects
          </button>
        </div>
      </div>

      <div className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-[2%] relative overflow-hidden">
        {/* Clouds */}
        <img
          src={cloud2}
          alt="Cloud 2"
          className="absolute w-[9.7%] z-0 transition-transform duration-500 ease-out will-change-transform"
          style={{
            top: '3%',
            left: '-1.5%',
            transform: `translateX(${-scrollY * 0.03 - scrollX * 0.05}px)`
          }}
        />
        <img
          src={cloud1}
          alt="Cloud 1"
          className="absolute w-[12%] z-0 transition-transform duration-500 ease-out will-change-transform"
          style={{
            top: '5%',
            right: '15%',
            transform: `translateX(${-scrollY * 0.04 - scrollX * 0.06}px)`
          }}
        />
        {/* Airplane */}
        <img
          src={airplane1}
          alt="Airplane"
          className="absolute w-[12%] z-10 transition-transform duration-500 ease-out will-change-transform"
          style={{
            top: '8%',
            right: '20%',
            transform: `translateY(${-scrollY * 0.1}px) translateX(${-scrollY * 0.07 - scrollX * 0.1}px) rotate(10deg)`
          }}
        />
        {/* Arrivals backdrop */}
        <img
          src={arrivalsUber}
          alt="Arrivals"
          className="absolute top-[14%] right-0 w-[40%] h-[60%] z-20 object-cover"
        />
        {/* Road */}
        <img
          src={roadUber}
          alt="Road"
          className="absolute bottom-[-3%]  w-full h-[40%] z-30 "
        />
        {/* Cars */}
        <img
          src={carUber1}
          alt="Car 1"
          className="absolute bottom-[15%] left-[18%] w-[20%] z-40"
        />
        <img
          src={carUber2}
          alt="Car 2"
          className="absolute bottom-[32%] left-[9%] w-[10%] z-40"
        />
        <img
          src={uberCar}
          alt="Uber car"
          className="absolute bottom-[9%] right-[32%] w-[30%] z-40"
        />
        {/* Sign & avatar */}
        <img
          src={signUber}
          alt="Pick Up Sign"
          className="absolute bottom-[5%] right-[10%] w-[6%] z-50 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(${-scrollX * 0.01}px)` }}
        />
        <img
          src={avatarUber}
          alt="Avatar waiting"
          className="absolute bottom-[2%] right-[20%] w-[11%] z-50"
        />
        {/* Text content */}
        <div className="absolute top-[15%] left-[10%] w-full max-w-[45%] text-center z-60 px-4">
          <img
            src={uberLogo}
            alt="Uber logo"
            className="w-[25vw] sm:w-[10vw] xl:w-[12vw] mb-[4vw] sm:mb-[0.5vw] xl:mb-[1vw] mx-auto"
          />
                    <h2 className="text-[6vw] sm:text-[2.5vw] xl:text-[3vw] font-bold mb-[3vw] sm:mb-[0.4vw] xl:mb-[1vw]">
            Strategy & Planning Lead
          </h2>
          <p className="text-[3vw] sm:text-[1.6vw] xl:text-[1.4vw] mb-[2vw] sm:mb-[0.5vw] xl:mb-[1vw] leading-[4vw] sm:leading-[2.5vw] xl:leading-[2vw] font-semibold">
            2019–2021, 2023
          </p>
          <p className="text-[3vw] sm:text-[1.5vw] xl:text-[1.2vw] mb-[5vw] sm:mb-[1vw] xl:mb-[1.5vw] leading-[5vw] sm:leading-[2.2vw] xl:leading-[2vw]">
            Led EMEA strategic planning, built region-wide financial models & forecasts, and drove automation programs cutting support costs three-fold.
          </p>
          <button className="px-[2.5vw] sm:px-[1.5vw] xl:px-[1.4vw] py-[2.5vw] sm:py-[0.9vw] xl:py-[1vw] text-[3vw] sm:text-[1.3vw] xl:text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">
           View Projects
          </button>
        </div>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 text-gray-800 px-[2%]">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 xl:mb-8">Trade Republic</h2>
        <p className="text-sm sm:text-base xl:text-lg leading-relaxed mb-4 sm:mb-6 xl:mb-8">Head of Strategy (1 year)</p>
        <p className="max-w-xl text-center text-xs sm:text-sm xl:text-base leading-relaxed mb-4 sm:mb-6 xl:mb-8">
          Led strategy team during hypergrowth and restructuring; navigated product pivots and market shifts.
        </p>
        <button className="px-3 py-1 sm:px-4 sm:py-2 xl:px-6 xl:py-3 text-xs sm:text-sm xl:text-lg bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 to-pink-300 text-gray-800 px-[2%]">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 xl:mb-8">lastminute.com</h2>
        <p className="text-sm sm:text-base xl:text-lg leading-relaxed mb-4 sm:mb-6 xl:mb-8">Product Manager, Flights</p>
        <p className="max-w-xl text-center text-xs sm:text-sm xl:text-base leading-relaxed mb-4 sm:mb-6 xl:mb-8">
          Owned the core flight booking flow and checkout optimization. Improved conversion, design, and supplier integration.
        </p>
        <button className="px-3 py-1 sm:px-4 sm:py-2 xl:px-6 xl:py-3 text-xs sm:text-sm xl:text-lg bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-yellow-100 to-yellow-300 text-gray-800 px-[2%]">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 xl:mb-8">Open Motors</h2>
        <p className="text-sm sm:text-base xl:text-lg leading-relaxed mb-4 sm:mb-6 xl:mb-8">Co-Founder & COO</p>
        <p className="max-w-xl text-center text-xs sm:text-sm xl:text-base leading-relaxed mb-4 sm:mb-6 xl:mb-8">
          Built an open electric vehicle platform. Managed hardware sourcing, manufacturing ops, and investor relations.
        </p>
        <button className="px-3 py-1 sm:px-4 sm:py-2 xl:px-6 xl:py-3 text-xs sm:text-sm xl:text-lg bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div className="min-w-full h-screen snap-start flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 px-[2%]">
        <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 xl:mb-8">Early Career</h2>
        <p className="text-sm sm:text-base xl:text-lg leading-relaxed mb-4 sm:mb-6 xl:mb-8">Consulting & Startups</p>
        <p className="max-w-xl text-center text-xs sm:text-sm xl:text-base leading-relaxed mb-4 sm:mb-6 xl:mb-8">
          Worked across Asia and the US in roles spanning product, business development, and market entry. YC alum.
        </p>
        <button className="px-3 py-1 sm:px-4 sm:py-2 xl:px-6 xl:py-3 text-xs sm:text-sm xl:text-lg bg-white/70 rounded shadow hover:bg-white transition">View Projects</button>
      </div>

      <div
        className={`absolute left-1/2 transform -translate-x-1/2 flex gap-2 z-50 ${
          isMobilePortrait ? 'bottom-[4%]' : 'bottom-[2%]'
        }`}
      >
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === activeDot ? 'bg-gray-600' : 'bg-gray-400 opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience