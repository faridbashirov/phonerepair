import React from 'react'
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {VscTools} from "react-icons/vsc"
import {AiOutlineDown} from "react-icons/ai"
import "../components/faq.css"
import items from "../data.json"
import Item from './item';
const Faq = () => {




  return (
    <div className=' h-auto lg:h-[1000px] py-20 px-10'>
        <div className='w-[96%] mx-auto flex flex-col lg:flex-row  justify-between   '>
            <div className='w-[100%] flex flex-col text-start lg:w-[60%] '>
                <div className='h-[120px] flex flex-col justify-around items-center lg:items-start    '>
           <VscTools className='text-[44px] text-[#f2480c]'/>

           <h2 className='lg:text-[44px] text-[32px] faq'>Read FAQ’s</h2>
           <p className='first-text'>Your all questions are answered here about our services.</p>
           </div>
           <div className='dropdown h-[700px] flex flex-col  '>
              { items.map((i,index)=>(
                 <Item  key={index}  item={i}/>

              ))}

           </div>
  

            </div>
            <div className='form bg-[#22282e] text-white h-[700px] w-[100%] lg:w-[50%] rounded-xl py-10 px-5 lg:px-10 flex flex-col items-center  '>
                <h2 className='text-3xl my-3 w-[full] '>
                Do you still have more
                 questions? Send us!
                </h2>
                <form className='flex flex-col mt-2 justify-between w-[100%] bg-[#22282e] h-[500px] faq-form'>
                    <input className=' border-b-[1px] py-2 border-white border-0 bo appearance-none bg-[#22282e] focus:outline-none' placeholder='Your name'></input>
                    <input className=' border-b-[1px] py-2 border-white border-0 bo appearance-none bg-[#22282e] focus:outline-none' placeholder='Your email'></input>
                    <input className=' border-b-[1px] py-2 border-white border-0 bo appearance-none bg-[#22282e] focus:outline-none' placeholder='Your Subject'></input>
                    <input type='textarea' className=' border-b-[1px] border-white border-0 py-2 appearance-none bg-[#22282e] focus:outline-none' placeholder='Your Message'></input>
                    <button className=' py-2  border-2 border-[#f2480c]' type='submit'>Send</button>
                    <p>or Call Now 1 623 457 9820</p>
                </form>


            </div>
        </div>


    </div>
  )
}

export default Faq