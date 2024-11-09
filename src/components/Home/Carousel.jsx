import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { useCart } from '../../context/CartContext.jsx';
import { FoodCard } from '../index'
import fooddata from '../../data/fooddata'

const data = fooddata.slice(0, 4);

const Carousel = () => {
  const { addToCart } = useCart();
  
  return (
    <div className='w-full bg-yellow lg:h-screen h-[700px]'>
        <h1 className="text-6xl font-rubik font-bold text-center text-purple pt-8">Featured Dishes</h1>
    <div className="w-[90%] lg:w-[80%] mx-auto h-[400px] py-10 pb-20">
      <Swiper
        slidesPerView={1}
        breakpoints={{

          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="flex flex-col justify-center items-center pb-10">
            <FoodCard 
            img={item.image}
            name={item.title}
            price={item.price} 
            dish={item}
            onAddToCart={() => addToCart(item)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Carousel;
