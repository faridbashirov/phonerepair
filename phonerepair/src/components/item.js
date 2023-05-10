import React from 'react'
import { useState } from 'react'
import {AiOutlineDown} from "react-icons/ai"
import {AiOutlineUp} from "react-icons/ai"

const Item = ({item}) => {
    const [open,setOpen]=useState(false)
  return (
    <div className='my-5 border-b-2 w-[100%] flex flex-col items-center lg:items-start lg:w-[80%] '>
        <div className=' '>
               <span onClick={()=>setOpen(!open)} className='flex items-center justify-between'><h2 className='text-2xl cursor-pointer' >{item.question}</h2>{ open  ? <AiOutlineDown className='cursor-pointer'/> :<AiOutlineUp  className='cursor-pointer'/>}</span>
               </div>
               <ul className={open ? 'block ' : "hidden"}>
                <li>{item.answers}</li>
               </ul>
              
    </div>
  )
}

export default Item