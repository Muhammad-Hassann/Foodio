import React, { useState, useRef, useEffect } from "react";
import { InfoCard } from "../../components";
import menuData from "../../data/menuData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


function Menu() {

  const headingRef = useRef(null);
  const paraRef = useRef(null);

  

      useGSAP(() => {
    
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger:headingRef.current,
              start: 'top 40%',
              end: 'bottom 20%',
            },
          }
        );
      }, []);

      useGSAP(() => {
    
        gsap.fromTo(
          paraRef.current,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
              trigger: paraRef.current,
              start: 'top 40%',
              end: 'bottom 20%',
            },
          }
        );
      }, []);

  return (
    <div className="pt-44 w-full h-full bg-purple">
      {/* Top Section */}
      <div className="w-full p-8 md:p-12 lg:p-16 xl:px-56 flex flex-col md:flex-row justify-between items-center">
        <div ref={headingRef} className="max-w-[400px] md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold font-rubik text-white">
            Our Delicious Menu
          </h1>
        </div>
        <div ref={paraRef} className="max-w-[400px] md:w-1/2 mt-4 md:mt-0 text-white text-justify">
          <p className="text-lg">
            Browse our diverse menu filled with mouthwatering dishes, carefully
            prepared by our chefs. From juicy burgers to sizzling steaks, we
            have something for everyone.
          </p>
        </div>
      </div>
      <div className="w-full p-20 px-44 flex flex-col gap-16">
        {Object.entries(menuData).map(([key, value]) => (
          <InfoCard
            key={key}
            imageSrc={value.imageSrc}
            mainTitle={value.mainTitle}
            items={value.items}
          />
        ))}
      </div>

      
    </div>
  );
}

export default Menu;
