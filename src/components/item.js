import React from 'react'
import { useState } from 'react'

import {SlArrowDown,SlArrowUp} from "react-icons/sl"

const Item = ({item}) => {
    const [open,setOpen]=useState(false)
  return (
    <div className='my-2 border-b-2 w-[100%] flex flex-col items-center lg:items-start lg:w-[90%] '>
        <div className='w-full '>
               <span onClick={()=>setOpen(!open)} className='flex items-center justify-between w-full py-5'><h2 className='text-[18px] cursor-pointer' >{item.question}</h2>{ open  ? <SlArrowUp className='cursor-pointer mx-5'/> : <SlArrowDown className='cursor-pointer mx-5'/> }</span>
               </div>
               <ul className={open ? 'block ' : "hidden"}>
                <li className='mb-5'>{item.answers}</li>
               </ul>
              
    </div>
  )
}

export default Item