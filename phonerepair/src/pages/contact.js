import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {BsEnvelope} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='w-full'>
        <div className='w-[90%] mx-auto flex py-40 px-10'>
            <div className='w-[50%] text-start '>
                 <h2 className='text-4xl '>Customer Support</h2>
                 <p>Have a question?Need some help?Get in touch with us.</p>
                 <div><BiPhoneCall/> <span>+1 (832) 457 5888 </span></div>
                 <div><BsEnvelope/> <span>info@fixzonecypress.com </span></div>
                 <div><AiOutlineClockCircle/> <span>Hours of operation:
Mon – Fri: 9:00 a.m. to 8:00 p.m.
Sat & Sun: 10:00 a.m. to 6:00 p.m </span></div>
            </div>
            <div className='w-[50%] py-5 px-15 h-[600px] shadow-lg py-10 px-10'>
                <form className='w-full flex flex-col h-[400px] justify-between items-center'>
                    <div className='form-input flex w-full justify-between items-center'>
                        <label>Name</label>
                        <input className='w-[60%] py-2 px-2 outline-0 bg-gray-600 border-0 rounded-full' type='text' name='name' />
                    </div>
                    <div className='form-input flex w-full justify-between items-center'>
                        <label>Email</label>
                        <input  className='w-[60%] py-2 px-2 outline-0 bg-gray-600 border-0 rounded-full'  type='text' name='name' />
                    </div>
                    <div className='form-input flex w-full justify-between items-center'>
                        <label>Message</label>
                        <input  className='w-[60%] py-2 px-2 outline-0 bg-gray-600 border-0 rounded-full' type='text' name='name' />
                    </div>
                    <button className='px-2 py-2 border rounded-full w-[50%]'>Get estimate</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact