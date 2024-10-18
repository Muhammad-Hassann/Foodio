import React, {useRef} from 'react'
import { ChefCard } from './index'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

function Experts() {
  const elementRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 100%',
        },
    });

    tl.fromTo(
        elementRef.current,{ opacity: 0, y: 50, scale: 0 },
        {
          opacity: 1, 
          y: 0,   
          scale: 1, 
          duration: 1.5,
          ease: "power3.out"  
        }
    );
}, []);

  return (
    <div className='w-full h-full '>
        <div className='w-full pt-12'>
      <h1 className="text-6xl font-rubik font-bold text-center text-purple my-8">Meet Our Experts</h1>
      </div>
    <div ref={elementRef} className='w-full flex justify-center items-center flex-wrap py-12 m-4 gap-20'>
      
      <ChefCard 
      img="../../chefs/chef1.png"
      title="Head Pastry Chef"
      name="Jhon Miller"
      facebook="https://facebook.com"
      twitter="https://twitter.com"
      instagram="https://instagram.com"
      />
      <ChefCard
      img="../../chefs/chef3.png"
      title="Master Chef"
      name="Robert White"
      facebook="https://facebook.com"
      twitter="https://twitter.com"
      instagram="https://instagram.com"
      />
      <ChefCard
      img="../../chefs/chef2.png"
      title="Gourmet Chef"
      name="Emily Johnson"
      facebook="https://facebook.com"
      twitter="https://twitter.com"
      instagram="https://instagram.com"
      />
    </div>
    
    </div>
  )
}

export default Experts
