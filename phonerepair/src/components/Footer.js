import React from 'react'
import {AiOutlineHome,AiFillPhone,AiOutlineClockCircle,AiOutlineTwitter,AiOutlineGooglePlus} from 'react-icons/ai'
import {ImFacebook} from 'react-icons/im'
import {TfiYoutube} from 'react-icons/tfi'

const Footer = () => {
  return (
    <div className='w-full h-[500px] bg-[#22282e] text-white'>
        <div className='w-[90%] mx-auto flex py-40 px-2 items-center justify-between' >

            <div className='text-start  w-[20%]  h-[250px] flex flex-col justify-between  text-[#abafb2]'>
            <img className='w-[150px] h-[50px] object-cover    ' src='https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=2000'></img>
                <p>Elit sed uao eiusmod tempor incididunt ut labore et dolore magna aliqua uat enim ad minim veniam.</p>
                 <span className='flex items-center'><AiOutlineHome className='text-orange-600'/> <p className='ml-2 text-white'>354 DownHill Street, FL 33026</p></span>
                 <span className='flex  items-center'><AiFillPhone className='text-orange-600'/> <p className='ml-2 text-white'>Support : 1 623 475 9820</p></span>
                 <span className='flex  items-center'><AiOutlineClockCircle className='text-orange-600'/> <p className='ml-2 text-white'>Mon to Sat : 9:00am – 7:00pm</p></span>

            </div>
            <div className='text-start  w-[25%]  h-[250px] flex flex-col justify-between ml-3  text-[#abafb2]'>
                <h2 className='text-l border-b-[1px] border-[#abafb2] pb-4'>Repair Services</h2>
                <ul className='flex flex-col justify-between h-[170px]'>
                    <li>Phone Repair</li>
                    <li>Console repair</li>
                    <li>Lcd & Led TV repair</li>
                    <li>Computer Repair</li>
                    <li>Laptop Repair</li>
                </ul>
                
            </div>
           
            <div className='text-start  w-[25%]  h-[250px] flex flex-col justify-between  text-[#abafb2]'>
            <h2 className='text-l border-b-[1px] border-[#abafb2] pb-4'>Repair Services</h2>
                <p>10 Tips: Avoid Breaking Glass of your Smartphone</p>
                <p>How to Repair iPhone: 6 Ways Best Online Guides</p>
                <p>Finding a used Smartphone:</p>
                <p>Checking the Original</p>
            </div>
            <div className='text-start  w-[25%]  h-[250px] flex flex-col justify-between  text-[#abafb2]'>
            <h2 className='text-l border-b-[1px] border-[#abafb2] pb-4'>Repair Services</h2>
                <p>10 Tips: Avoid Breaking Glass of your Smartphone</p>
                <form className='relative'>
                    <input  className='py-2 px-3 outline-0  bg-[#abafb2] text-white placeholder-white' placeholder='Enter email' type='email'/>
                    <button className='bg-orange-600 left-[170px] py-2 outline-0    border-0 px-3 text-white absolute border'>GO</button>
                </form>
                <span className='flex text-xl w-[30%] justify-between items-center'><ImFacebook/> <AiOutlineTwitter/> <AiOutlineGooglePlus/></span>
            </div>
            

        </div>
    </div>
  )
}

export default Footer