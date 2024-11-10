import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function InfoCard({ imageSrc, mainTitle, items }) {

  const containerRef = useRef();
  if (window.innerWidth >= 1024) { 
  useGSAP(() => {

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 100 },
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
    <div ref={containerRef} className="p-6 flex bg-yellow rounded-xl gap-10 flex-col lg:flex-row justify-between">

      <img src={imageSrc} alt={mainTitle} className="lg:max-w-[400px] max-w-full rounded-xl object-cover object-center mb-6" />
      
      <div className="flex flex-col w-full ">
      <h2 className="text-3xl font-narrow font-bold mb-2">{mainTitle}</h2>
        {items.map((item, index) => (
          <div key={index} className="p-4 border-b-[3px] border-dashed flex w-full justify-between ">
            <div>
            <h3 className="text-xl font-narrow font-semibold">{item.title}</h3>
            <p className='text-'>{item.text}</p>
            </div>
            <div>
            <p className="text-lg font-bold mt-2">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
