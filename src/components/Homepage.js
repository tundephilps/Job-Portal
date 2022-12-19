import React from 'react'
import About from './About/About'
import Category from './Category/Category'
import Hero from './Hero/Hero'
import Testimonial from './Testimonial/Testimonial'

const Homepage = () => {
  return (
    <div>
          <Hero />
            <Category />
            <About />
            <Testimonial />
          
    </div>
  )
}

export default Homepage