import React, { Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';

const ImageWithSuspense = ({ imageSrc, title }) => (
  <Suspense fallback={<div className="h-[500px] w-full bg-gray-200 animate-pulse" />}>
    <LazyLoad height={200} offset={100}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="w-full object-cover h-[500px]"
      />
    </LazyLoad>
  </Suspense>
);

function Card({ link, imageSrc, title, className = '' }) {
  const navigate = useNavigate()
  return (
    <div
      className={`relative max-w-[350px] group cursor-pointer overflow-hidden rounded-2xl shadow-lg ${className}`}
    >
      {/* Image with Suspense */}
      <ImageWithSuspense imageSrc={imageSrc} title={title} />

      {/* Text Section */}
      <div className="absolute bottom-0 w-full bg-purple text-white text-center py-4 group-hover:hidden transition-all duration-500">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-purple bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <h2 className="text-3xl font-narrow font-bold mb-4">{title}</h2>
          <p className="text-base text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan risus.
          </p>
          <button onClick={() => navigate('/book-now')} className='px-4 py-2 mt-4 rounded-lg bg-yellow text-purple font-semibold font-narrow text-xl'>Reserve a Table</button>
         
        </div>
      </div>
    </div>
  );
}

export default Card;
