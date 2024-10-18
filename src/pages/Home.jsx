import React from 'react'
import { Hero, Story, Menu, ReserveTable, Carousel, Gallery , Testimonial, Experts} from '../components'

function Home() {
  return (
    <div>
      <Hero />
       <Story />
      <Menu />
      <ReserveTable />
      <Carousel />
      {/* <Gallery /> */}
      <Testimonial />
      <Experts />
    </div>
  )
}

export default Home
