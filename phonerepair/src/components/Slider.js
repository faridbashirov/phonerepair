import React from 'react'
import {VscTools} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import "../components/slider.css"
const Slider = () => {
  return (
    <div className=' slider h-auto w-full flex py-10 px-10 items-center justify-center bg-white lg:h-[700px] lg:py-0 lg:px-0 '>

        <div className='w-full mx-auto flex flex-col items-start justify-between lg:flex-row lg:w-[80%]  '>
            <div className='w-[100%] flex flex-col items-start  lg:w-[50%]'>

                <div className='homeheader w-full flex items-start justify-between  '>
                  <div>
                  <VscTools className='text-[#f2480c] text-[60px]  lg:text-[120px] '/>
                  </div>
                  <div className='w-[95%]'>
                  <span className=' w-full  text-gray-900 text-start capitalize text-white text-[32px] lg:text-[52px]  '>We reapair all kinds of fonts & tablets</span>
                  </div>

                  
                </div>
                <p className='mt-10 text-lg text-start text-white'>dsafasdfasdfsa asdasdas asdasd asdasdas dasdsadasd  dasda asdasdsa dasdasdas dasdasdasd asdasdasdas dasd</p>
                <button className='border-0 bg-[#f2480c] mt-10 text-white px-20 py-3  uppercase  '><Link>let fix your device </Link></button>

            </div>

            <div className='w-[100%] lg:w-[45%] mt-10 '> 

                <img className='w-full h-[400px] object-cover' src="https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
            </div>

        </div>


    </div>
  )
}

export default Slider