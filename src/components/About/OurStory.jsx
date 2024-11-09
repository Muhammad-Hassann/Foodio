import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/all';

function OurStory() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50, scale: 0 },
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
    <div className="md:pt-44 pt-24 flex flex-col lg:flex-row items-center justify-between   bg-purple w-full  py-16">
      <div ref={container} className="container  px-8 lg:px-32">
        <div className="flex flex-col xl:flex-row justify-around ">
          {/* Left Column */}
          <div className="md:w-1/2 w-full flex items-center xl:items-start flex-col  py-8">
            <h1 className=" text-4xl md:text-6xl text-white font-bold font-rubik text-gray-800 mb-8">
              Our Story
            </h1>
            <div className="flex  gap-8">
              <img
                src="../../../chefs/restaurant.webp"
                alt="Restaurant Interior"
                className="w-[250px] h-[400px] object-cover object-left rounded-lg shadow-lg"
              />
              <img
                src="../../../chefs/chef-cooking.webp"
                alt="Chef Cooking"
                className="mt-12 hidden sm:block w-[250px] h-[400px] object-cover object-left rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="xl:w-1/2 w-full xl:max-w-[500px]  py-8 pb-28">
          <p className="text-lg text-white mb-6 leading-relaxed">
          Established with a passion for authentic and innovative cuisine, our
          restaurant brings together a team of culinary experts who share a deep
          love for food.
        </p>
        <p className="text-lg text-white mb-6 leading-relaxed">
          Our inviting atmosphere combines modern aesthetics with a warm and
          welcoming environment, ensuring that every meal is enjoyed in comfort.
          From the cozy interiors to the vibrant plating, every detail has been
          thoughtfully designed to create a space where food, friends, and
          family come together effortlessly.
        </p>
        <p className="text-lg text-white">
          At the heart of everything we do is a commitment to quality, freshness,
          and flavor. Our ingredients are locally sourced and always of the
          highest quality.
        </p>

          </div>
        </div>
      </div>
    // </div>
  );
}

export default OurStory;
