import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { BsEnvelope } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import '../components/estimate.css'
const Estimate = () => {
    return (
        <div className='w-full estimate-page rounded-[10px]'>
            <div className='w-full  mx-auto flex py-20 px-3 justify-end flex-col lg:flex-row'>

                <div className='w-full lg:w-[50%] mt-15 lg:mt-0 py-5 px-15 h-[auto] shadow-lg py-10 lg:px-10 px-4 bg-white'>
                    <h3 className='text-[32px] lg:text-[22px] font-bold mb-5'>Select Your Device to Repair at Cell Phone Repair</h3>
                    <form className='w-full flex flex-col  justify-between items-start'>
                        <div className='w-full flex flex-col lg:flex-row  justify-between items-start'>
                            <div className='form-input flex-col md:w-[49%]  py-2 flex w-full justify-between items-start'>
                                <label className='text-[14px] mb-2'>First Name</label>
                                <input className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='text' name='name' placeholder='first name' />
                            </div>
                            <div className='form-input flex-col md:w-[49%]  py-2  flex w-full justify-between items-start'>
                                <label className='text-[14px] mb-2'>Last Name</label>
                                <input className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='text' name='name' placeholder='last name' />
                            </div>
                        </div>

                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Email Address</label>
                            <input className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='email' name='name' placeholder='email address' />
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Phone Number</label>
                            <input className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='tel' name='name' placeholder='phone number' />
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Email Address</label>
                            <select id="countries" class="w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Email Address</label>
                            <select id="countries" class="w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Email Address</label>
                            <textarea className='w-full   py-3 px-5 outline-0 bg-[#ebe9e9] border-0  resize-none' placeholder='Message' rows={5}/>
                        </div>
                      
                        <button className='px-2 py-3 border rounded-full w-[50%] bg-[#f2480c] hover:bg-[#22282e] text-white mx-auto mt-5'>Get estimate</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Estimate