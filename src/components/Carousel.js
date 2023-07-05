import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'
import apple_logo from '../images/apple.jpeg'
import samsung_logo from '../images/samsung.avif'
import oneplus_logo from '../images/oneplus.png'
import xiami_logo from '../images/xiami.png'
import motorola_logo from '../images/motorola.jpeg'
import lenovo_logo from '../images/lenovo.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };



const Carousels = () => {
  return (
    <div className="h-[300px] w-full bg-[#22282e] flex flex-col align-items-center justify-content-center py-10 items-center border-b-[1px]">
      <h2 className='text-white text-[32px] lg:text-[44px] font-medium mb-8 sub-text'>Brands we repair</h2>
        <Carousel responsive={responsive} className='h-[300px] w-[80%]' infinite={true}
  autoPlay={true }
  autoPlaySpeed={1500}
  >
  <div className='carousel-item'>   
    <img src={apple_logo} alt='service' className='w-[90%] mx-auto'/>
  </div>
  <div className='carousel-item'>  <img src={samsung_logo} alt='service' className='w-[90%] mx-auto'/> </div>
  <div className='carousel-item'><img src={oneplus_logo} alt='service' className='w-[90%] mx-auto'/></div>
  <div className='carousel-item'>
  <img src={xiami_logo} alt='service' className='w-[90%] mx-auto'/>
    
     </div>
     <div className='carousel-item'>
  <img src={motorola_logo} alt='service' className='w-[90%] mx-auto'/>
    
     </div>
     <div className='carousel-item'>
  <img src={lenovo_logo} alt='service' className='w-[90%] mx-auto'/>
    
     </div>
</Carousel>;
    </div>
  
  )
}

export default Carousels