import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Carousel.css'
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
      <h2 className='text-white text-[32px] lg:text-[44px] font-medium mb-8 sub-text'>Our Clients</h2>
        <Carousel responsive={responsive} className='h-[300px] w-full' infinite={true}
  autoPlay={true }
  autoPlaySpeed={1500}
  >
  <div className='carousel-item'>   
    <img src='https://ambulanceappliance.com/static/images/brands/1.png' className='w-[90%] mx-auto'/>
  </div>
  <div className='carousel-item'>  <img src='https://ambulanceappliance.com/static/images/brands/1.png' className='w-[90%] mx-auto'/> </div>
  <div className='carousel-item'><img src='https://ambulanceappliance.com/static/images/brands/1.png' className='w-[90%] mx-auto'/></div>
  <div className='carousel-item'>
  <img src='https://ambulanceappliance.com/static/images/brands/1.png' className='w-[90%] mx-auto'/>
    
     </div>
     <div className='carousel-item'>
  <img src='https://ambulanceappliance.com/static/images/brands/1.png' className='w-[90%] mx-auto'/>
    
     </div>
     <div className='carousel-item'>
  <img src='https://ambulanceappliance.com/static/images/brands/1.png' className='w-[90%] mx-auto'/>
    
     </div>
</Carousel>;
    </div>
  
  )
}

export default Carousels