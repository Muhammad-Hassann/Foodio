import React,{useRef} from "react";
import WorkCard from "./WorkCard";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BiSolidDish } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const HowWeWork = () => {

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, 
        start: 'top 100%',
      
      },
    });

    timeline
      .fromTo(
        containerRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1.5 }
      )
      .fromTo(
        videoRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1.5 },
        '-=1' 
      );

    return timeline;
  }, []);

  const handlePlayClick = () => {
    const width = 800;
    const height = 450;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Open a popup window centered on the screen
    window.open(
      "https://www.youtube.com/embed/_Sl8diqCAFw",
      "popup",
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=no`
    );
  };

  return (
    <div className="relative w-full h-auto py-20 lg:bg-purple bg-yellow flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
      {/* Main Section */}
      <div ref={containerRef} className="lg:w-4/5 w-full bg-yellow p-8 md:p-12 lg:p-16 lg:rounded-r-full flex flex-col gap-12 z-10 relative">
        {/* Upper Row: Subtitle and Title */}
        <div className="text-white text-center lg:text-left lg:ml-12">
          <h4 className="text-xl font-semibold mb-2">Order Easily in 3 Steps</h4>
          <h2 className="text-4xl md:text-6xl font-rubik font-bold text-purple-800">
            How We Work
          </h2>
        </div>

        {/* Lower Row: Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start flex-wrap gap-8 lg:gap-16">
          <WorkCard
            icon={<BiSolidDish />}
            iconNo="1"
            heading="Choose Your Dish"
            text="Browse our diverse menu and pick your favorite meal."
          />
          <WorkCard
            icon={<IoPhonePortraitOutline />}
            iconNo="2"
            heading="Place Your Order"
            text="Order through our website or mobile app in just a few clicks."
          />
          <WorkCard
            icon={<TbTruckDelivery />}
            iconNo="3"
            heading="Get It Delivered"
            text="Enjoy fast and reliable delivery straight to your doorstep."
          />
        </div>
      </div>

      {/* Video Section */}
      <div ref={videoRef} className="lg:absolute lg:right-28 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-20 w-[300px] h-[300px] md:w-[350px] md:h-[350px] mt-10 lg:mt-0">
        {/* Video Thumbnail */}
        <div className="w-full h-full relative bg-black rounded-full overflow-hidden">
          {/* Background Image Thumbnail */}
          <img
            src="../../../chefs/restaurant.webp" // Replace with your thumbnail image
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Button with Pulse Animation */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              className="relative z-10 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#e9b334] text-white text-4xl hover:bg-yellow-300 focus:outline-none"
              onClick={handlePlayClick}
            >
              <FaPlay className="ml-1" />
              <div className="absolute animate-ping inline-flex h-20 w-20 rounded-full bg-yellow-500 opacity-75"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
