import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function ChefCard({
    img,
    title,
    name,
    facebook,
    twitter,
    instagram
}) {
  return (
    <div className='w-full lg:w-[400px] flex flex-col items-center' >
        <div className="relative w-[350px] h-[450px] bg-white group cursor-pointer rounded-lg ">

            <img src={img} alt={title} className='w-full h-3/4 object-contain'/>
            <div className="absolute bottom-0 left-10 right-0 bg-white flex justify-center items-center flex-col p-4 w-[250px] h-[250px] rounded-full border-2 border-purple  shadow-lg transition-transform duration-500">
                <h3 className='text-xl text-purple font-bold font-narrow'>{title}</h3>
                <p className='text-3xl font-rubik font-bold text-center mb-8'>{name}</p>
                <div className='flex w-full justify-center gap-4'>
                    <FaFacebook className='text-[#202020] text-3xl hover:text-[blue]' />
                    <FaInstagram className='text-[#202020] text-3xl hover:text-[purple]' />
                    <FaTwitter className='text-[#202020] text-3xl hover:text-[lightblue]' />

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ChefCard
