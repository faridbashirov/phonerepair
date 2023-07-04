import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './sell-section.css'
const Sellsection = () => {


  return (
    <div className='flex flex-col w-[96%] py-10 lg:w-[90%] mx-auto items-center'>
      <h1 className='text-dark text-[32px] lg:text-[44px] font-medium mb-8 sub-text'>Do you need to buy or sell a phone?</h1>
      <p className='mb-5 text-[#abafb2] lg:text-[18px]'>Check out the online tools below to sell or value your business</p>
      <div className='w-full md:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-10'>
        <Link to="sell" className='text-[#fff] button1 capitalize py-5 bg-[#f2480c] font-medium lg:text-[18px] hover:scale-[1.06] hover:bg-[#fff] hover:border-[#f2480c] hover:border-[2px] hover:border-solid  hover:text-[#22282e] w-full'>
          sell your old device 
          <AiOutlineArrowRight className='arrowww ml-[10px]'/>
        </Link>
        <Link to="buy" className='button1 border-[2px] border-solid py-5 border-[#22282e] flex items-center justify-center font-medium lg:text-[18px] hover:border-0 hover:bg-[#22282e] hover:text-[#fff] capitalize text-[#22282e]  hover:scale-[1.06] w-full'>
          buy new device 
          <AiOutlineArrowRight className='arrowww ml-[10px]'/>
          
        </Link>
      </div>
    </div>
   
  )
}

export default Sellsection