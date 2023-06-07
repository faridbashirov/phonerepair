import React from 'react'
import { useState } from 'react';
import axios from 'axios';

import {VscTools} from "react-icons/vsc"

import "../components/faq.css"
import {toast, ToastContainer } from "react-toastify";
import items from "../data.json"
import Item from './item';
const Faq = () => {

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
    


    





  return (
    <div className=' h-auto lg:h-[1000px] py-20 px-10'>
        <div className='w-[85%] mx-auto flex flex-col lg:flex-row  justify-between   '>
            <div className='w-[100%] flex flex-col text-start lg:w-[60%] '>
                <div className='h-[120px] flex flex-col justify-around items-center lg:items-start    '>
           <VscTools className='text-[44px] text-[#f2480c]'/>
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

           <h2 className='lg:text-[44px] text-[32px] faq'>Read FAQ’s</h2>
           <p className='first-text'>Your all questions are answered here about our services.</p>
           </div>
           <div className='dropdown h-[700px] flex flex-col  '>
              { items.map((i,index)=>(
                 <Item  key={index}  item={i}/>

              ))}

           </div>
  

            </div>
            <div className='form bg-[#22282e] text-white h-[700px] w-[100%] lg:w-[40%] rounded-xl py-10 px-5 lg:px-10 flex flex-col items-center  '>
                <h2 className='text-3xl my-3 w-[full] '>
                Do you still have more
                 questions? Send us!
                </h2>
                <form onSubmit={contactform} className='flex flex-col mt-2 justify-between w-[100%] bg-[#22282e] h-[500px] faq-form'>
                    <input name='name' className=' border-b-[1px] py-2 border-white border-0 bo appearance-none bg-[#22282e] focus:outline-none' placeholder='Your name'></input>
                    {error&&name ? <p className='w-full text-red-600 text-start '>{name}</p> : ""}
                    <input name="email" className=' border-b-[1px] py-2 border-white border-0 bo appearance-none bg-[#22282e] focus:outline-none' placeholder='Your email'></input>
                    {error&&email ? <p className='w-full text-red-600 text-start '>{email}</p> : ""}
                    
                    <textarea name="message" rows={7}  className=' border-b-[1px] border-white border-0 py-2 appearance-none bg-[#22282e] focus:outline-none' placeholder='Your Message'></textarea>
                    {error&&message ? <p className='w-full text-red-600 text-start '>{message}</p> : ""}
                    <button className=' py-2  border-2 border-[#f2480c] ' type='submit'>Send</button>
                    <p>or Call Now 1 623 457 9820</p>
                </form>


            </div>
        </div>


    </div>
  )
}

export default Faq