import React, {useRef} from 'react';
import MilestoneCard from './MilestoneCard';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Milestones = () => {

  const tableRef = useRef();

  useGSAP(() => {

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: tableRef.current,
              start: 'top 100%',
          },
      });

      tl.fromTo(
          tableRef.current,{ opacity: 0, y: 50, scale: 0 },
          {
            opacity: 1, 
            y: 0,   
            scale: 1, 
            duration: 1.5,
            ease: "power3.out"  
          }
      );
  }, []);

  const milestones = [
    { year: '1990', title: 'Opening Day', description: 'Our restaurant opened its doors for the first time, marking the beginning of a culinary journey.' },
    { year: '2000', title: 'First Expansion', description: 'We expanded to multiple locations across the city, serving more customers than ever.' },
    { year: '2010', title: 'Award Winning', description: 'Recognized as one of the top restaurants in the country for our innovative dishes.' },
    { year: '2020', title: 'Global Presence', description: 'Our brand went global, opening locations in five different countries worldwide.' },
  ];

  return (
    <div className='w-full bg-yellow py-20'>
    <div ref={tableRef} className="w-4/5 mx-auto bg-purple border  py-28">
      <h2 className="text-4xl font-rubik font-bold text-center text-white mb-12">Our Restaurant Milestones</h2>

      <div className="flex flex-wrap justify-around ">
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={index}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Milestones;
