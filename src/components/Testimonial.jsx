import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

function Testimonial() {
    const customerFeedback = [
        {
          message: "I had the best experience at this restaurant! The staff was incredibly friendly and attentive. Every dish was a delight, and the presentation was just as impressive as the flavors.",
          name: "Olivia Martinez",
          rating: 5
        },
        {
          message: "What a gem! From the moment we walked in, we were treated like family. The chef’s special recommendations were spot on, and every bite was packed with flavor. ",
          name: "James Anderson",
          rating: 5
        },
        {
          message: "The food was simply out of this world. I’ve never tasted such fresh ingredients combined so beautifully. The staff made sure every detail was taken care of, and the vibe was so cozy and inviting. ",
          name: "Sophia Johnson",
          rating: 5
        },
        {
          message: "Absolutely fantastic! The BBQ ribs were to die for, and the cocktails were expertly crafted. The staff went above and beyond to make sure we were comfortable. ",
          name: "Liam Brown",
          rating: 5
        },
        {
          message: "I can’t say enough good things about this restaurant. The attention to detail in every dish is just phenomenal. The atmosphere was lively, and the service was prompt and courteous.",
          name: "Emma Wilson",
          rating: 4
        }
      ];
      const containerRef = useRef();
      const imageRef = useRef()
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
          start: 'top 100%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 40%',
          end: 'bottom 20%',
        },
      }
    );
  }, []);
  return (
    
    <div  className='w-full flex justify-between lg:px-20 px-12 pt-20 bg-purple'>
      <div ref={containerRef} className='lg:w-1/2 w-full flex items-center lg:items-start flex-col'>
      <h4 className='text-white font-narrow text-center lg:text-left font-bold text-xl'>Testimonial & Reviews</h4>
      <h1 className='text-6xl font-rubik font-bold text-center lg:text-left text-white'>Our Customers Feedback</h1>
      <div className="w-full h-[400px] my-12 ">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {customerFeedback.map((item) => (
          <SwiperSlide key={item.name} className="flex flex-col lg:items-start items-center pb-12">
            <div className="relative lg:w-[500px] w-full lg:h-[300px] h-[400px] bg-white group cursor-pointer p-5 rounded-2xl border-[.3rem] border-yellow overflow-hidden shadow-lg">
              
              <div className="h-full flex flex-col gap-4 justify-center ">
                <h2 className="text-xl  text-[gray] text-wrap ">{item.message}</h2>
                <h4 className="text-2xl font-extrabold font-narrow">{item.name}</h4>
                <div className="flex items-center my-2">
                  {/* <div className='border-2 border-[red] m-0 p-0' > */}
                  <img src="../../stars.png" alt="" className='w-16 h-6 object-cover object-center m-0 p-0' />
                  {/* </div> */}
                </div>
                <div className='absolute top-[75%] xl:left-[85%] md:left-[80%] left-[70%] w-12 h-12 rounded-full bg-yellow'>
                  <img src="../../quote.png" alt="" />
                </div>
              </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    <div ref={imageRef} className="hidden lg:block relative w-full h-[500px] p-10">
  <div className="absolute top-20 left-10 w-[250px] h-[250px] bg-purple bg-opacity-60 shadow-lg rounded-3xl overflow-hidden">
    <img className="w-full h-full object-cover opacity-30" src="../../testimonial/testimonial2.webp" alt="BBQ Image" />
  </div>
  
  {/* <!-- Coffee Image --> */}
  <div className="absolute -top-10 left-56 w-[250px] h-[250px] bg-yellow shadow-lg rounded-3xl overflow-hidden z-10">
    <img className="w-full h-full object-cover" src="../../testimonial/testimonial1.jpg" alt="Coffee Image" />
  </div>
  
  {/* <!-- Dessert Image --> */}
  <div className="absolute top-60 left-[230px] w-[250px] h-[250px] bg-white shadow-lg rounded-3xl overflow-hidden">
    <img className="w-full h-full object-cover" src="../../testimonial/testimonial3.jpg" alt="Dessert Image" />
  </div>
</div>


   
    </div>
  )
}

export default Testimonial
