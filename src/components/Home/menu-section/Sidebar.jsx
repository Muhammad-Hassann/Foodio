import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Sidebar({ components, activeComponent, setActiveComponent }) {
  const containerRef = useRef();
  if (window.innerWidth >= 1024) { 
  useGSAP(() => {

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);
}
  return (
    <div ref={containerRef} className="lg:w-1/4 lg:p-4 w-full flex flex-wrap lg:gap-4 gap-2 justify-center lg:border-r lg:block my-2">
      {components.map((comp, index) => (
        <div
          key={index}
          onClick={() => setActiveComponent(comp)}
          className={`cursor-pointer rounded-lg flex items-center lg:space-x-2 gap-4 p-4 lg:mb-4 transition-all ${
            activeComponent.title === comp.title ? 'bg-yellow transition duration-500' : 'bg-gray'
          }`}
        >
          <comp.icon className="text-lg lg:2xl" />
          <span className="text-xl font-semibold ">{comp.title}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
