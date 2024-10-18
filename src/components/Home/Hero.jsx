import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

function Hero() {
  const elementRef = useRef(null);

  useGSAP(() => {

    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 50, scale: 0 },
      {
        opacity: 1, 
        y: 0,   
        scale: 1, 
        duration: 1.5,
        ease: "power3.out"  
      }
    );
  })


  return (
    <div className='w-screen h-screen bg-purple flex items-center justify-center flex-col'>
      <div ref={elementRef} className='relative w-full flex justify-center items-center gap-36 flex-col'>
        <div className='w-full'>
          <h1 className='font-rubik text-6xl md:text-9xl lg:text-[10rem] tracking-tighter text-white font-extrabold text-center uppercase'>
            food that
          </h1>
        </div>
        <img
          src="../../burger.webp"
          className='absolute top-1/2 transform -translate-y-1/2 w-56 md:w-96 z-10 max-w-full'
          alt="Burger"
        />
        <div className='w-full flex justify-center items-center'>
          <h1 className='font-rubik text-6xl md:text-9xl lg:text-[10rem] z-20 tracking-tighter text-white font-extrabold text-center uppercase'>
            fuels joy
          </h1>
        </div>
      </div>
    </div>
  );
}


export default Hero;
