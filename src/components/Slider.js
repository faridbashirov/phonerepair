import React from 'react'
import {VscTools} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import "../components/slider.css"
const Slider = () => {
  return (
    <div className=' slider relative h-[400px] w-full flex items-center justify-center bg-white lg:h-[700px] lg:py-0 lg:px-0 '>
      <div className='w-full absolute h-[100%] slider-overlay py-20 px-10'>
        <div className='w-full mx-auto flex flex-col items-start justify-between lg:flex-row lg:w-[85%]  '>
            <div className='w-[100%] flex flex-col items-start  lg:w-[55%]'>

                <div className='homeheader w-full flex items-start justify-between  '>
                  <div>
                  <VscTools className='text-[#f2480c] text-[60px] hidden lg:flex lg:text-[120px] '/>
                  </div>
                  <div className='w-[100%] lg:w-[95%]'>
                  <span className=' w-full  text-gray-900 text-center lg:text-start capitalize text-white text-[32px] lg:text-[40px] ml-0 lg:leading-[60px] '>All Kinds of Phone and Tablet repairs in Auburn, AL</span>
                  </div>

                  
                </div>
                <p className='mt-10 text-lg text-center lg:text-start text-white hidden md:block'>From Smartphones to Tablets, we fix it all! We are your one-stop shop for repairs and accessories.

                </p>
                <button className='border-0 bg-[#f2480c] mt-10 text-white button-fix  uppercase mx-auto lg:mx-0  '><Link>let fix your device </Link></button>

            </div>

            <div className='w-[100%] hidden lg:block lg:w-[42%] mt-10 slider-img '> 

                <img alt='service' className='w-full h-[400px] object-cover' src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG.png"/>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Slider