import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {BsEnvelope} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import '../components/contact.css'
const Contact = () => {
  return (
    <div className='w-full'>
        <div className='w-full md:w-[96%] mx-auto flex py-20 lg:px-10 px-3 justify-between flex-col lg:flex-row'>
            <div className='w-full lg:w-[45%] text-start '>
                 <h2 className='text-[32px] lg:text-[44px] font-semibold mb-5 footer-header'>Customer Support</h2>
                 <p className='text-md'>Have a question?Need some help?Get in touch with us.</p>
                 <div className='mb-5'><BiPhoneCall className='text-[27px] mr-2 text-gray-500 '/> <a href='' className='text-lg font-medium text-gray-500 hover:text-[#f2480c]'>+1 (832) 457 5888 </a></div>
                 <div className='mb-5'><BsEnvelope className='text-[27px] mr-2 text-gray-500 '/> <a href='' className='text-lg font-medium  text-gray-500 hover:text-[#f2480c]'>info@fixzonecypress.com </a></div>
                 <div className='mb-5 flex items-start'><AiOutlineClockCircle className='text-[27px] mr-2  text-gray-500   '/> <span className='leading-[30px] w-[80%] text-gray-500 '>Hours of operation: <br/>
                Mon – Fri: 9:00 a.m. to 8:00 p.m. <br/>
                Sat & Sun: 10:00 a.m. to 6:00 p.m </span></div>
            </div>
            <div className='w-full lg:w-[50%] mt-15 lg:mt-0 py-5 px-15 h-[600px] shadow-lg py-10 lg:px-10 px-4'>
                <form className='w-full flex flex-col  justify-between items-start'>
                    <div className='form-input flex-col md:flex-row py-5 mb-2 flex w-full justify-between items-start'>
                        <label>Name</label>
                        <input className='w-full md:w-[80%] lg:w-[70%] py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-full' type='text' name='name' placeholder='name' />
                    </div>
                    <div className='form-input py-5 flex-col md:flex-row mb-2 flex w-full justify-between items-start'>
                        <label>Email</label>
                        <input  className='w-full md:w-[80%] lg:w-[70%]  py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-full'  type='text' name='name' placeholder='Email' />
                    </div>
                    <div className='form-input py-5 flex-col md:flex-row  mb-2 flex w-full justify-between items-start'>
                        <label>Message</label>
                        {/* <input className='w-[70%] py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-full' type='text' name='name' placeholder='Message' /> */}
                        <textarea className='w-full md:w-[80%] lg:w-[70%]  py-3 px-5 outline-0 bg-[#ebe9e9] border-0  resize-none' placeholder='Message' rows={5}/>
                    </div>
                    <button className='px-2 py-3 border rounded-full w-[50%] bg-[#f2480c] hover:bg-[#22282e] text-white mx-auto mt-5'>Get estimate</button>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact