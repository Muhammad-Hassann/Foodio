import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  // Counter increment logic
  useEffect(() => {
    if (counter < 100) {
      const incrementCounter = () => {
        setCounter((prevCounter) => {
          const increment = Math.floor(Math.random() * 5) + 1;
          const nextValue = prevCounter + increment;
          return nextValue >= 100 ? 100 : nextValue;
        });
      };
      incrementCounter();

      const delay = Math.floor(Math.random() * 50) + 30;
      const timer = setTimeout(incrementCounter, delay);

      return () => clearTimeout(timer);
    }
  }, [counter]);

  // GSAP animation logic, triggered after counter completes
  useEffect(() => {
    if (counter === 100) {
      const tl = gsap.timeline({
        onComplete, // Calls onComplete when animation finishes
      });

      // Fast bar animation to the top
      tl.to('.bar', {
        y: '-100%',
        duration: 0.5, // Quick animation to the top
        ease: 'power2.out',
        stagger: 0.1,
      })
    }
  }, [counter, onComplete]);

  return (
    <div className="loader-overlay flex justify-center items-center w-full h-screen bg-purple text-white font-rubik z-50">
      {/* Counter Display */}
      <div className="text-8xl font-bold mb-10 z-50">{counter}%</div>

      {/* Animated Bars */}
      <div className="overlay absolute inset-0 flex w-full h-full">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="bar w-[10vw] h-full bg-yellow"></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
