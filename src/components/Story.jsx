import { gsap } from 'gsap'
import React, {useRef} from 'react'
import { ScrollTrigger } from 'gsap/all'
import {StoryCard} from "./index"
import { useGSAP } from '@gsap/react'

function Story() {
  const storyRef = useRef()
  const cardRef = useRef()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        scroller: "body",
        start: "top 100%",
        end: "bottom 60%",
      }
    })
    tl.fromTo(storyRef.current, { opacity: 0, y: 50, scale: 0 },
      {
        opacity: 1, 
        y: 0,   
        scale: 1, 
        duration: 1,
        ease: "power3.out"  
      })
      tl.fromTo(cardRef.current, { opacity: 0, y: 50, scale: 0 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      })
  }, [])

  return (
    <div className='w-full bg-yellow flex lg:p-28 p-8 pt-14 justify-between flex-col'>
      <div ref={storyRef} className='w-full flex flex-col lg:flex-row justify-between gap-12'>
        <div className='lg:w-1/2 w-full'>
        <h1 className='text-6xl tracking-tight font-rubik w-full lg:max-w-[500px] leading-[4rem] text-purple font-bold'>New Ground with Dishes to be Enjoyed</h1>
        </div>
        <div className='lg:w-1/2 w-full'>
        <p className='font-narrow text-lg w-full lg:max-w-[500px] leading-8 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maxime nemo, iure dolor quibusdam mollitia adipisci aliquid nihil maiores unde facilis minus illum? Debitis possimus ex necessitatibus quod animi eligendi minus fugit dolorem.</p>
        <div className='flex gap-3 my-10'>
            <img src="https://demo.bravisthemes.com/foodio/wp-content/uploads/2023/04/author-80x80.jpg" alt="" className='w-18 rounded-full' />
            <div >
            <h2 className='text-2xl font-narrow text-purple font-semibold'>Wiliam Warner</h2>
            <p className='font-narrow text-lg text-gray'>Director and Chief Operations Officer</p>
            </div>
        </div>
        </div>
      </div>
      <div ref={cardRef} className='w-full flex lg:justify-between gap-10 flex-wrap justify-center'>
        <div>
        <StoryCard title="Resturant" imageSrc="../Storyimages/grilled.jpg" />
        </div>
        <div>
        <StoryCard title="Coctail" imageSrc="../Storyimages/coctail.jpg" className='lg:mt-24'/>
        </div>
        <div>
        <StoryCard title="Private Dinning" imageSrc="../Storyimages/dinning.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default Story
