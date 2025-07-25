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

import roadTrade from '../assets/road_trade_scene.png';
import tickerFrameTrade from '../assets/tickerframe_trade_scene.png';
import tickerTrade from '../assets/ticker_trade_scene.png';
import buildingsTrade from '../assets/buildings_trade_scene.png';
import tradeRepublicLogo from '../assets/trade_republic_logo.png';
import avatarTrade from '../assets/avatar_trade_scene.png';
import logoLastminute from '../assets/lastminute_logo.png'
import poolLastminute from '../assets/pool_lastminute_scene.png'
import hotelLastminute from '../assets/hotel_lastminute_scene.png'
import mountainsLastminute from '../assets/mountains_lastminute_scene.png'
import avatarLastminute from '../assets/avatar_lastminute_scene.png'

// Hook: tracks both horizontal and vertical scroll
function useScrollPosition(ref: React.RefObject<HTMLDivElement>) {
  const [pos, setPos] = useState({ scrollX: 0, scrollY: 0 });
  useEffect(() => {
    const handler = () => {
      setPos({
        scrollX: ref.current?.scrollLeft || 0,
        scrollY: window.scrollY,
      });
    };
    window.addEventListener('scroll', handler);
    ref.current?.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      ref.current?.removeEventListener('scroll', handler);
    };
  }, [ref]);
  return pos;
}

// Parallax wrapper using per-layer coefficients
type ParallaxConfig = {
  xVert: number;
  xHorz: number;
  yVert: number;
  yHorz: number;
  useSlideScroll?: boolean;
};
const SLIDE_PARALLAX: Record<number, Record<string, ParallaxConfig>> = {
  0: {
    cloud1:    { xVert:-0.07, xHorz:-0.11, yVert:0,    yHorz:0    },
    cloud2:    { xVert:-0.03, xHorz:-0.03, yVert:0,    yHorz:0    },
    airplane2: { xVert:-0.75, xHorz:-0.6,  yVert:-0.6, yHorz:-0.6 },
  },
  1: {
    cloud2:    { xVert: -0.03, xHorz: -0.03, yVert: 0,    yHorz: 0    },
    cloud1:    { xVert: -0.05, xHorz: -0.05, yVert: 0,    yHorz: 0    },
    airplane1: { xVert: -0.5,  xHorz:  0.2,  yVert: -0.4, yHorz: 0.2 },
    carUber1:  { xVert: -0.25,  xHorz: -0.25,  yVert:  0,   yHorz: 0   },
    carUber2:  { xVert:  0.8,  xHorz:  0.8,  yVert:  0,   yHorz: 0   },
    uberCar:   { xVert:  0.05, xHorz:  0.05, yVert:  0,   yHorz: 0   },
    signUber:  { xVert:  0,    xHorz: 0.01 , yVert:  0,   yHorz: 0   },
  },
  2: {
    cloud1:    { xVert: -0.03, xHorz: -0.03, yVert: 0,    yHorz: 0    },
    cloud2:    { xVert: -0.05, xHorz: -0.05, yVert: 0,    yHorz: 0    },
    airplane1: { xVert:  0.5, xHorz:  0.2, yVert: -0.5, yHorz: -0.2 },
    tickerTrade: { xVert: 0, xHorz: -0.15, yVert: 0, yHorz: 0, useSlideScroll: true },
  },
};

function Parallax({
  slideIndex,
  layerKey,
  containerRef,
  isMobilePortrait,
  className,
  style,
  children,
}: React.PropsWithChildren<{
  slideIndex: number;
  layerKey: string;
  containerRef: React.RefObject<HTMLDivElement>;
  isMobilePortrait?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>) {
  const { scrollX, scrollY } = useScrollPosition(containerRef);
  let cfg = SLIDE_PARALLAX[slideIndex]?.[layerKey] || { xVert:0,xHorz:0,yVert:0,yHorz:0 };
  if (slideIndex === 0 && layerKey === 'airplane2' && isMobilePortrait) {
    // steeper vertical movement on portrait
    cfg = { xVert: -0.6, xHorz: -0.4, yVert: -0.9, yHorz: 0 };
  }
  const width = containerRef.current?.clientWidth || 0;
  const effectiveScrollX = cfg.useSlideScroll
    ? scrollX - slideIndex * width
    : scrollX;
  const x = scrollY * cfg.xVert + effectiveScrollX * cfg.xHorz;
  const y = scrollY * cfg.yVert + effectiveScrollX * cfg.yHorz;
  // build transform string, adding rotation for Kiwi airplane
  let transformStr = `translateX(${x}px) translateY(${y}px)`;
  if (slideIndex === 0 && layerKey === 'airplane2' || slideIndex === 1 && layerKey === 'airplane1' ) {
    transformStr += 'rotate(10deg)';
  }
  if (slideIndex === 2 && layerKey === 'airplane1') {
    transformStr += ' rotate(-10deg)';
  }
  return (
    <div
      className={`${className} transition-transform duration-500 ease-out will-change-transform`}
      style={{ transform: transformStr, ...style }}
    >
      {children}
    </div>
  );
}



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

  // no need to extract scroll here; Parallax does it per layer

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
        <Parallax
          slideIndex={0}
          layerKey="cloud1"
          containerRef={containerRef}
          className="absolute w-[20%] sm:w-[10%] xl:w-[10%] z-10"
          style={{ top: '0%', left: '10%' }}
        >
          <img src={cloud1} alt="Cloud 1" className="w-full h-auto" />
        </Parallax>
        <Parallax
          slideIndex={0}
          layerKey="cloud2"
          containerRef={containerRef}
          isMobilePortrait={isMobilePortrait}
          className="absolute w-[28%] sm:w-[9%] xl:w-[9%] z-10"
          style={{ top: isMobilePortrait ?'23%':'4%', right: isMobilePortrait ? '-25%' : '-8%' }}
        >
          <img src={cloud2} alt="Cloud 2" className="w-full h-auto" />
        </Parallax>
        <Parallax
          slideIndex={0}
          layerKey="airplane2"
          containerRef={containerRef}
          isMobilePortrait={isMobilePortrait}
          className="absolute w-[28%] sm:w-[20%] xl:w-[20%] z-10"
          style={{ bottom: isMobilePortrait ? '-10%' : '15%', right: isMobilePortrait ? '-95%' : '0%' }}
        >
          <img src={airplane2} alt="Airplane" className="w-full h-auto" />
        </Parallax>
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
          Read More
          </button>
        </div>
      </div>

      <div id="uber" className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-[2%] relative overflow-hidden">
        {/* Clouds */}
        <Parallax
          slideIndex={1}
          layerKey="cloud2"
          containerRef={containerRef}
          className={`absolute ${isMobilePortrait ? 'w-[28%]' : 'w-[9.1%]'} z-0`}
          style={{ top: isMobilePortrait ? '23%' : '4%', left: isMobilePortrait ? '-5%' : '-1%' }}
        >
          <img src={cloud2} alt="Cloud 2" className="w-full h-auto" />
        </Parallax>
        <Parallax
          slideIndex={1}
          layerKey="cloud1"
          containerRef={containerRef}
          className={`absolute ${isMobilePortrait ? 'w-[18%]' : 'w-[8%]'} z-0`}
          style={{ top: isMobilePortrait ? '7%' : '3%', right: isMobilePortrait ? '-10%' : '5%' }}
        >
          <img src={cloud1} alt="Cloud 1" className="w-full h-auto" />
        </Parallax>
        {/* Airplane */}
        <Parallax
          slideIndex={1}
          layerKey="airplane1"
          containerRef={containerRef}
          className={`absolute ${isMobilePortrait ? 'w-[30%]' : 'w-[12%]'} z-10`}
          style={{ top: isMobilePortrait ? '73%' : '12%', right: isMobilePortrait ? '-52%' : '30%' }}
        >
        <img src={airplane1} alt="Airplane" className="w-full h-auto" />
        </Parallax>
        {/* Arrivals backdrop */}
        <img
          src={arrivalsUber}
          alt="Arrivals"
          className="absolute top-[49%] sm:top-[18.5%] xl:top-[18.5%] right-[10%] sm:right-[4%] xl:right-[4%] w-[80%] sm:w-[40%] xl:w-[40%] h-[20%] sm:h-[60%] xl:h-[60%] z-20 object-contain"
        />
        {/* Road */}
        <div className="absolute bottom-[-16%] sm:bottom-[-3%] xl:bottom-[-3%] w-full h-[50%] sm:h-[40%] xl:h-[40%] z-30 overflow-hidden max-sm:block sm:hidden">
          <img
            src={roadUber}
            alt="Road"
            className="w-full h-full translate-y-[-25%]"
          />
        </div>
        <img
          src={roadUber}
          alt="Road"
          className="hidden sm:block absolute bottom-[-3%] w-full h-[40%] z-30"
        />
        {/* Cars */}
        <Parallax
          slideIndex={1}
          layerKey="carUber1"
          containerRef={containerRef}
          className="absolute bottom-[20%] sm:bottom-[14%] xl:bottom-[14%] left-[100%] sm:left-[55%] xl:left-[55%] w-[65%] sm:w-[20%] xl:w-[20%] z-50"
        >
          <img src={carUber1} alt="Car 1" className="w-full h-auto" />
        </Parallax>
        <Parallax
          slideIndex={1}
          layerKey="carUber2"
          containerRef={containerRef}
          className="max-sm:hidden absolute bottom-[32%] left-[-115%] w-[10%] z-40"
        >
          <img src={carUber2} alt="Car 2" className="w-full h-auto" />
        </Parallax>
        <Parallax
          slideIndex={1}
          layerKey="uberCar"
          containerRef={containerRef}
          className="absolute bottom-[11%] sm:bottom-[9%] xl:bottom-[9%] right-[40%] sm:right-[40%] xl:right-[40%] w-[80%] sm:w-[30%] xl:w-[30%] z-50"
        >
          <img src={uberCar} alt="Uber car" className="w-full h-auto" />
        </Parallax>
        {/* Sign & avatar */}
        <Parallax
          slideIndex={1}
          layerKey="signUber"
          containerRef={containerRef}
          className="absolute bottom-[5%] right-[7%] sm:right-[10%] xl:right-[10%] w-[12%] sm:w-[6%] xl:w-[6%] z-50"
        >
          <img src={signUber} alt="Pick Up Sign" className="w-full h-auto" />
        </Parallax>
        <img
          src={avatarUber}
          alt="Avatar waiting"
          className="absolute bottom-[4%] sm:bottom-[2%] xl:bottom-[2%] right-[10%] sm:right-[20%] xl:right-[20%] w-[20%] sm:w-[11%] xl:w-[11%] z-50"
        />
        {/* Text content */}
        <div className="absolute top-[14%] left-[5%] sm:left-[10%] xl:left-[10%] w-full max-w-[90%] sm:max-w-[45%] xl:max-w-[45%] text-center z-60 px-4">
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
          Read More
          </button>
        </div>
      </div>

      <div id="trade-republic" className="min-w-full h-screen snap-start relative overflow-hidden bg-gradient-to-b from-sky-100 to-white text-gray-800">
         {/* Clouds */}
         <Parallax
          slideIndex={2}
          layerKey="cloud1"
          containerRef={containerRef}
          className={`absolute ${isMobilePortrait ? 'w-[28%]' : 'w-[9.1%]'} z-0`}
          style={{ top: isMobilePortrait ? '23%' : '22%', left: isMobilePortrait ? '-5%' : '8%' }}
        >
          <img src={cloud1} alt="Cloud 1" className="w-full h-auto" />
        </Parallax>
        <Parallax
          slideIndex={2}
          layerKey="cloud2"
          containerRef={containerRef}
          className={`absolute ${isMobilePortrait ? 'w-[18%]' : 'w-[8%]'} z-0`}
          style={{ top: isMobilePortrait ? '7%' : '3%', right: isMobilePortrait ? '-10%' : '-15%' }}
        >
          <img src={cloud2} alt="Cloud 2" className="w-full h-auto" />
        </Parallax>

        
        {/* Buildings background */}
        <img
          src={buildingsTrade}
          alt="Buildings"
          className="absolute bottom-[28%] left-[48%] -translate-x-1/2 w-[120%] h-[35%] z-30 object-fill
                sm:bottom-auto sm:top-[16.3%] sm:left-[-3%] sm:translate-x-0 sm:w-[55%] sm:h-[60%]
                xl:bottom-auto xl:top-[16.3%] xl:left-[-3%] xl:translate-x-0 xl:w-[55%] xl:h-[60%]"
        />
         {/* Airplane */}
         <Parallax
          slideIndex={2}
          layerKey="airplane1"
          containerRef={containerRef}
          className={`absolute ${isMobilePortrait ? 'w-[20%]' : 'w-[15%]'} z-20`}
          style={{ top: isMobilePortrait ? '105%' : '135%', right: isMobilePortrait ? '210%' : '130%' }}
        >
          <img src={airplane1} alt="Airplane" className="w-full h-auto" />
        </Parallax>
        {/* Avatar */}
        <img
          src={avatarTrade}
          alt="Avatar holding phone"
          className="absolute bottom-[5%] left-[5%] w-[40%] sm:w-[15%] xl:w-[15%] z-50"
        />
        {/* Ticker frame + strip (masked with rounded corners) */}
        <div className="absolute top-[63%] sm:top-[60%] xl:top-[60%] left-[56%] sm:left-[29%] xl:left-[29%] w-[19%] sm:w-[9%] xl:w-[9%] z-40">
          {/* Frame always on top */}
          <img
            src={tickerFrameTrade}
            alt="Ticker frame"
            className="relative block w-full h-auto z-20"
          />

          {/* Masked area (same insets as earlier 7%/86% but applied on all sides) */}
          <div className="absolute inset-[6%] overflow-hidden rounded-[0.1vw] z-10">
            <Parallax
              slideIndex={2}
              layerKey="tickerTrade"
              containerRef={containerRef}
              className="absolute inset-0"
            >
              <img
                src={tickerTrade}
                alt="Ticker strip"
                className="absolute inset-0 left-[-100%] w-[300%] h-full max-w-none object-fill"
              />
            </Parallax>
          </div>
        </div>
        {/* Road – mobile portrait version */}
        <div className="absolute bottom-[-16%] sm:bottom-[-1%] xl:bottom-[-1%] w-full h-[50%] sm:h-[27%] xl:h-[27%] z-20 overflow-hidden max-sm:block sm:hidden">
          <img
            src={roadTrade}
            alt="Road"
            className="w-full h-[60%] translate-y-[15%]"
          />
        </div>
        <img
          src={roadTrade}
          alt="Road"
          className="hidden sm:block absolute bottom-[-1%] w-full h-[27%] z-20"
        />
        {/* Text content */}
        <div
          className="absolute top-[8%] sm:top-[14%] xl:top-[14%] left-1/2 -translate-x-1/2 w-full text-center px-4
                sm:translate-x-0 sm:left-auto sm:right-[-4%] sm:w-auto
                xl:translate-x-0 xl:left-auto xl:right-[4%] xl:w-auto"
        >
          <img src={tradeRepublicLogo} alt="Trade Republic logo" className="w-[25vw] sm:w-[10vw] xl:w-[12vw] mb-[4vw] sm:mb-[0.5vw] xl:mb-[1vw] mx-auto" />
          <h2 className="text-[6vw] sm:text-[2.5vw] xl:text-[3vw] font-bold mb-[3vw] sm:mb-[0.4vw] xl:mb-[1vw]">Strategy & Performance Lead</h2>
          <p className="text-[3vw] sm:text-[1.6vw] xl:text-[1.4vw] mb-[2vw] sm:mb-[0.5vw] xl:mb-[1vw] leading-[4vw] sm:leading-[2.5vw] xl:leading-[2vw] font-semibold">2021-2022</p>
          <p className="text-[3vw] sm:text-[1.5vw] xl:text-[1.2vw] leading-[5vw] sm:leading-[2.2vw] xl:leading-[2vw] mb-[5vw] sm:mb-[1vw] xl:mb-[1.5vw] sm:max-w-[90%] sm:mx-auto xl:max-w-full xl:mx-auto">
              Led international growth team during launch in Italy, Spain &amp; Netherlands. <br />
              Shaped referral economics, activation analytics, and debit card product discovery.
</p>          <button className="px-[2.5vw] sm:px-[1.5vw] xl:px-[1.4vw] py-[2.5vw] sm:py-[0.9vw] xl:py-[1vw] text-[3vw] sm:text-[1.3vw] xl:text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">
            Read More
          </button>
        </div>
      </div>

      <div
        id="lastminute"
        className="min-w-full h-screen snap-start flex items-center justify-center bg-gradient-to-b from-sky-100 to-white text-gray-800 px-[2%] relative overflow-hidden"
      >
        {/* Scenic layers */}
        <img
          src={mountainsLastminute}
          alt="Mountain backdrop"
          className={`absolute  ${isMobilePortrait ? 'bottom-[14%] right-[-10%]  w-[60%]  h-[40%]' : 'bottom-[22%] right-[-10%] w-[60%] h-[40%]'} object-fill z-10`}
        />
        <img
          src={hotelLastminute}
          alt="Hotel resort"
          className={`absolute  ${isMobilePortrait ? 'bottom-[29%] right-[27%]  w-[100%]' : 'bottom-[37%] right-[62%] w-[35%] sm:w-[43%] xl:w-[43%]'} z-20`}
        />
        <img
          src={poolLastminute}
          alt="Infinity pool"
          className={`absolute bottom-[0%]  ${isMobilePortrait ? 'left-[0%] w-full h-[70%]' : 'left-[0%] w-full h-[90%]'} z-20`}
        />
        <img
          src={avatarLastminute}
          alt="Avatar relaxing"
          className={`absolute  ${isMobilePortrait ? 'w-[48%] left-[49%]  bottom-[8%]' : 'w-[28%] sm:w-[20%] xl:w-[25%] left-1/3 -translate-x-1/3 sm:left-[40%] xl:left-[40%]  bottom-[13%]'} z-30`}
        />

        {/* Text block */}
        <div className="absolute top-[13%] sm:top-[12%] xl:top-[12%] left-1/2 -translate-x-1/2 w-full text-center px-4
                sm:translate-x-0 sm:left-auto sm:right-[12%] sm:w-auto
                xl:translate-x-0 xl:left-auto xl:right-[10%] xl:w-auto">
          <img
            src={logoLastminute}
            alt="lastminute.com logo"
            className="w-[48vw] sm:w-[24vw] xl:w-[28vw] mb-[4vw] sm:mb-[0.5vw] xl:mb-[1vw] mx-auto"
          />
          <h2 className="text-[6vw] sm:text-[2.5vw] xl:text-[3vw] font-bold mb-[3vw] sm:mb-[0.4vw] xl:mb-[1vw]">
            Product Manager, Ancillaries
          </h2>
          <p className="text-[3vw] sm:text-[1.6vw] xl:text-[1.4vw] mb-[2vw] sm:mb-[0.5vw] xl:mb-[1vw] leading-[4vw] sm:leading-[2.5vw] xl:leading-[2vw] font-semibold">
            2018–2019
          </p>
          <p className="text-[3vw] sm:text-[1.5vw] xl:text-[1.2vw] mb-[5vw] sm:mb-[1vw] xl:mb-[1.5vw] leading-[5vw] sm:leading-[2.2vw] xl:leading-[2vw]">
            Owned the core flight booking flow and checkout optimization. <br /> Improved conversion, design, and supplier integration.
          </p>
          <button className="px-[2.5vw] sm:px-[1.5vw] xl:px-[1.4vw] py-[2.5vw] sm:py-[0.9vw] xl:py-[1vw] text-[3vw] sm:text-[1.3vw] xl:text-[1.2vw] bg-white/70 rounded shadow hover:bg-white transition">
            Read More
          </button>
        </div>
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