import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import RingingCircle from "./RingingCircle";

function Banner() {
    const bannerRef = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: bannerRef.current,
                start: 'top 80%',
            },
        });

        tl.fromTo(
            bannerRef.current,{ opacity: 0, y: 50, scale: 0 },
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
        <div ref={bannerRef} className="w-full flex flex-col lg:flex-row justify-around gap-16 p-10 mt-8">
            <div className='relative flex justify-center flex-col group gap-4 px-6 w-full lg:w-1/2 border-none outline-none rounded-3xl bg-no-repeat bg-cover bg-center h-[300px] bg-[url("../../../MenuImages/banner1.png")] transition-all duration-300 hover:shadow-lg'>
                <h1 className=" max-w-[300px] text-white text-5xl font-extrabold font-rubik ">
                    Steaks and BBQ
                </h1>

                <p className="max-w-[300px] text-lg text-white font-rubik">
                    canonical classics to obscure tiki drinks
                </p>
                <RingingCircle />
            </div>
            <div className='relative flex justify-center flex-col gap-4 px-6 w-full lg:w-1/2 border-2 h-[300px] group border-none outline-none rounded-3xl bg-no-repeat bg-cover bg-center bg-[url("../../../MenuImages/banner2.png")] transition-all duration-300 hover:shadow-lg'>
                <h1 className=" max-w-[300px] text-white text-5xl font-extrabold font-rubik ">
                    Cocktails
                </h1>
                <p className="max-w-[300px] text-lg text-white font-rubik">
                    canonical classics to obscure tiki drinks
                </p>
               <RingingCircle />
            </div>
        </div>
    );
}

export default Banner;
