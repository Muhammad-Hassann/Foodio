import React from 'react'

function RingingCircle() {
  return (
    <div className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] absolute top-[70%] lg:top-[75%] right-[70%] lg:right-[75%] rounded-full bg-yellow flex justify-center items-center flex-col leading-none transition-transform duration-300 group-hover:animate-ring">
    <p className="font-rubik text-xl lg:text-2xl text-purple font-extrabold">
        $120
    </p>
    <p className="text-white text-sm lg:text-lg font-narrow">person</p>
</div>
  )
}

export default RingingCircle
