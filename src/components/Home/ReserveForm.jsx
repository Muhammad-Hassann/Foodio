import React from 'react'
import { Button } from '../index'

function ReserveForm() {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className='flex  lg:flex-row flex-wrap gap-4 '>
        <input type="text" placeholder='Full Name' className='lg:w-[45%] w-full text-black px-4 py-2  lg:my-2 outline-none rounded-lg' />
        <input type="text" placeholder='Phone' className=' lg:w-[45%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg' />
        <input type="number" placeholder='No. of Guest' className='lg:w-[30%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg' />
        <input type="date" placeholder='Date' className='lg:w-[30%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg' />
        <input type="time" placeholder='Time' className='lg:w-[30%] w-full text-black px-4 py-2 lg:my-2 outline-none rounded-lg' />
        <Button children="Reserve"/>
                                                  
    </form>
  )
}

export default ReserveForm
