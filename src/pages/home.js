import React from 'react'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Problem from '../components/Problem'
import Offers from '../components/Offers'
import Faq from '../components/Faq'
import After from '../components/After'
import Blogs from '../components/Blogs'
import Sell from '../components/Sellsection'
import Carousels from '../components/Carousel'

const Home = () => {
  return (
    <div>
        <Slider/>
        <Problem/>
        <Services/>
        <Offers/>
        
        <After/>
        <Blogs/>
        <Carousels/>
        <Sell/>
       

    </div>
  )
}

export default Home