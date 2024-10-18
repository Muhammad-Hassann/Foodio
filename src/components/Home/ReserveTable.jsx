import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ReserveForm } from '../index'

function ReserveTable() {
  const tableRef = useRef();

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tableRef.current,
                start: 'top 80%',
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
   return (
    <div className='w-full flex justify-center items-center lg:p-12 p-4 py-12 lg:py-20 bg-yellow'>
      <div ref={tableRef} className='relative lg:w-3/4 w-full p-8 lg:p-0 lg:h-[350px] h-[600px] bg-cover bg-center bg-[url("../bg-overlay.webp")] rounded-3xl flex flex-col justify-center lg:flex-row gap-4'>
        <div className="absolute inset-0 bg-purple bg-opacity-90 rounded-3xl"></div>
        <div className='relative lg:w-1/3 w-full z-20 p-4 flex items-center'>
          <h1 className='text-center text-6xl font-bold font-rubik text-white'>
            Reserve a Table
          </h1>
        </div>
        <div className='relative lg:w-2/3 w-full z-10 flex items-center gap-4'>
          <ReserveForm />
        </div>
      </div>
    </div>
  );
}

export default ReserveTable
