import { div } from 'framer-motion/client'
import React from 'react'

function Gallery() {
    return (
        // <div className='fixed'>
        <div data-scroll-container className='relative min-h-full'>
          <div className="absolute top-0 left-0 w-full overflow-hidden" data-scroll data-scroll-speed="-.5">
            <img
              src="../gallery/gallery1.webp"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-0 w-full overflow-hidden" data-scroll data-scroll-speed=".5">
            <img
              src="../gallery/gallery2.webp"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-44 left-0  w-full overflow-hidden" data-scroll data-scroll-speed="1">
            <img
              src="../gallery/gallery3.webp"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-72 left-0 w-full overflow-hidden" data-scroll data-scroll-speed="1.2">
            <img
              src="../gallery/gallery4.webp"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        // </div>
      );
}

export default Gallery
