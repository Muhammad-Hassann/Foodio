import React from 'react'
import { motion } from 'framer-motion'

function Sponsors() {
  const images = [
    '../../../logos/logo1.png',
    '../../../logos/logo2.png',
    '../../../logos/logo3.png',
    '../../../logos/logo4.png',
    '../../../logos/logo5.png',
  ]

  return (
    <div className="w-full py-8  flex flex-col items-center justify-center">
      {/* Heading Section */}
      <h2 className="text-4xl text-center font-bold text-[#5b0017] mb-8">
        Highly Trusted Sponsors
      </h2>

      {/* Infinite logo scrolling */}
      <div className="w-4/5 bg-white overflow-hidden">
        <motion.div
          className="flex" // Container for images
          initial={{ x: 0 }} // Start from the left
          animate={{ x: '-100%' }} // Move to the left
          transition={{ ease: 'linear', duration: 20, repeat: Infinity }} 
        >
          {/* Render two sets of images for smooth looping */}
          {[...images, ...images, ...images].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sponsor Logo ${index + 1}`}
              className="mr-20 w-[150px] h-[150px] object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Sponsors
