import React,{useState} from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {BsEnvelope} from 'react-icons/bs'
import axios from 'axios'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {toast, ToastContainer } from "react-toastify";
import '../components/contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
   const [error,setError]=useState(false)
   const [errors,setErrors]=useState([])
   
   const displayLoginNotification = () => {
    toast.success(" Successful");
  };
    const contactform=(e)=>{
        e.preventDefault();
        setError(false)
        console.log(e.target.name.value)
        axios.post("https://api.phonerepairweb.com/api/contact/",{
            name:e.target.name.value,
            email:e.target.email.value,
            message:e.target.message.value
        })  
        .then((response)=>{
            displayLoginNotification()
        })
    
        
        .catch((err)=>{
             console.log(err.response.data)
             setError(true)
             setErrors(err.response.data)
            return err.response.data
        })
        e.target.reset()


  
      
         
    }
    const {name,email,message}=errors
    console.log(name,email,message)

  return (
    <div className='w-full'>
        <div className='w-[96%] lg:w-[80%]  mx-auto flex py-20 lg:px-10 px-3 justify-between flex-col lg:flex-row'>
        <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
            <div className='w-full lg:w-[45%] text-start '>
                 <h2 className='text-[32px] lg:text-[44px] font-semibold mb-5 footer-header'>Customer Support</h2>
                 <p className='text-md'>Have a question?Need some help?Get in touch with us.</p>
                 <div className='mb-5'><BiPhoneCall className='text-[27px] mr-2 text-gray-500 '/> <Link to="+1 (334) 734 5252" className='text-lg font-medium text-gray-500 hover:text-[#f2480c]'>+1 (334) 734 5252</Link></div>
                 <div className='mb-5'><BsEnvelope className='text-[27px] mr-2 text-gray-500 '/> <Link to="#" className='text-lg font-medium  text-gray-500 hover:text-[#f2480c]'>info@fixzonecypress.com </Link></div>
                 <div className='mb-5 flex items-start'><AiOutlineClockCircle className='text-[27px] mr-2  text-gray-500   '/> <span className='leading-[30px] w-[80%] text-gray-500 '>Hours of operation: <br/>
                Mon – Fri: 9:00 a.m. to 8:00 p.m. <br/>
                Sat & Sun: 10:00 a.m. to 6:00 p.m </span></div>
            </div>
            <div className='w-full lg:w-[50%] mt-15 lg:mt-0 py-5 px-15 h-[600px] shadow-lg py-10 lg:px-10 px-4'>
                <form onSubmit={contactform}   className='w-full flex flex-col  justify-between items-start'>
                    <div className='form-input flex-wrap flex-col md:flex-row py-5 mb-2 flex w-full justify-between items-start'>
                        <label>Name</label>
                        <input  name="name" className='w-full md:w-[80%] lg:w-[70%] py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-full' type='text' placeholder='name' />
                        {error&&name ? <p className='w-full text-red-600 '>{name}</p> : ""}
                    </div>
                    <div className='form-input py-5  flex-wrap flex-col md:flex-row mb-2 flex w-full justify-between items-start'>
                        <label>Email</label>
                        <input name="email"  className='w-full md:w-[80%] lg:w-[70%]  py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-full'  type='text'  placeholder='Email' />
                        {error&&email ? <p className='w-full  text-red-600 '>{email}</p> : ""}
                    </div>
                    <div className='form-input flex-wrap py-5 flex-col md:flex-row  mb-2 flex w-full justify-between items-start'>
                        <label>Message</label>
                        {/* <input className='w-[70%] py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-full' type='text' name='name' placeholder='Message' /> */}
                        <textarea name="message" className='w-full md:w-[80%] lg:w-[70%]  py-3 px-5 outline-0 bg-[#ebe9e9] border-0  resize-none' placeholder='Message' rows={5}/>
                        {error&&message ? <p className='w-full  text-red-600  '>{message}</p> : ""}
                    </div>
                    <button className='px-2 py-3 border rounded-full w-[50%] bg-[#f2480c] hover:bg-[#22282e] text-white mx-auto mt-5'>Get estimate</button>
                    
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contact