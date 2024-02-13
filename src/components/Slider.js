import React from 'react'
import {VscTools} from "react-icons/vsc"
import { Link } from 'react-router-dom'
import "../components/slider.css"

import {toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import '../components/estimate.css'

import { useState,useEffect } from 'react'
import axios from 'axios'
import {IoMdClose} from "react-icons/io"
import { Helmet } from 'react-helmet';



const Slider = () => {
    const [showModal, setShowModal] = React.useState(false);
   
    const [device,setDevice] = useState([])
   const [repair,setRepair] = useState([])
   const [status,setStatus] = useState(false)
  

   const [error,setError]=useState(false)
   const [errors,setErrors]=useState([])

   const displayLoginNotification = () => {
    toast.success(" Successful");
  };
   
   
const contactform=(e)=>{
        e.preventDefault();
        setError(false)
        axios.post("https://api.phonerepairweb.com/api/estimate/",{
            first_name:e.target.first_name.value,
            last_name:e.target.last_name.value,
            message:e.target.message.value,
            phone:e.target.phone.value,
            email:e.target.email.value,
            device_type:e.target.device_type.value,
            repair_type:e.target.repair_type.value,

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
      
         
    
    const {first_name,email,message,device_type,repair_type,last_name,phone}=errors
    console.log(first_name,email,message)
    useEffect(() => {
     axios.get('https://api.phonerepairweb.com/api/device/')
     .then((response) =>{
        setDevice(response.data)

        
     })
     .catch((error) =>{
             console.log(error)
           })
    },[])

    const handleForm = (filter) => {
        axios.get(`https://api.phonerepairweb.com/api/repair/?device__name=${filter}`)
        .then((response) =>{
            setRepair(response.data)
            setStatus(true)
            
         })
         .catch((error) =>{
                 console.log(error)
               })    }
  
   




    
      
  return (
    
    <div className=' slider relative h-[501px] w-full flex items-center justify-center bg-white lg:h-[700px] lg:py-0 lg:px-0 '>
       <Helmet>
       <script defer async src='https://cdn.trustindex.io/loader.js?9cf632825ca5475aa4768c7add4'></script>
       <script defer async src='https://cdn.trustindex.io/loader.js?a9c1f2625b0d47516f86ceb821c'></script>
 
<title>Top Phone Repair Service in Auburn AL | Over 10.000+ Customers</title>
<meta data-react-helmet="true" name='description' content="Expert phone repair in Auburn AL with 10,000+ satisfied customers. Fast, reliable service for all major brands. See why we're highly rated!" />
</Helmet>
      <div className='w-full absolute h-[100%] slider-overlay py-20 px-10'>
        <div className='w-full mx-auto flex flex-col items-center justify-between lg:flex-row lg:w-[85%]  '>
            <div className='w-[100%] flex flex-col items-start  lg:w-[55%]'>

                <div className='homeheader w-full flex items-start justify-between  '>
                  <div>
                  <VscTools className='text-[#f2480c] text-[60px] hidden lg:flex lg:text-[120px] '/>
                  </div>
                  <div className='w-[100%] lg:w-[95%]'>
                  <span className=' w-full  text-gray-900 text-center lg:text-start capitalize text-white text-[32px] lg:text-[40px] ml-0 lg:leading-[60px] '>All Kinds of Phone and Tablet repairs in Auburn, AL</span>
                  </div>

                  
                </div>
                <p className='mt-10 text-lg text-center lg:text-start text-white hidden md:block'>From Smartphones to Tablets, we fix it all! We are your one-stop shop for repairs and accessories.

                </p>
                <button onClick={() => setShowModal(true)} className='border-0 bg-[#f2480c] mt-10 text-white button-fix  uppercase mx-auto lg:mx-0  '><Link>let fix your device </Link></button>
                <div className='flex  mt-7 items-center w-[80%]  gap-2 '>
                <div   src='https://cdn.trustindex.io/loader.js?9cf632825ca5475aa4768c7add4'></div>
                <div   src='https://cdn.trustindex.io/loader.js?a9c1f2625b0d47516f86ceb821c'></div>
                </div>

            </div>

            <div className='w-[100%] hidden lg:block lg:w-[42%] mt-10 slider-img '> 

                <img alt='service' className='w-full h-[400px] object-cover' src="https://www.pngall.com/wp-content/uploads/2016/05/Laptop-PNG.png"/>
            </div>

        </div>
        </div>
        <div>
       
    
     
       {showModal ? (
         <>
           <div
             className="modall justify-center w-[96%] md:w-[60%] mx-auto my-6 flex overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none"
           >
             <div className="relative w-full my-0 mx-auto ">
               {/*content*/}
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                 {/*header*/}
                
                 {/*body*/}
                 <div className="relative  p-6 flex-auto">
                 <button
                     className="p-1 ml-auto bg-[#f2480c] border-0 rounded-full flex h-[38px] w-[40px] items-center justify-center text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none absolute top-[15px] right-[15px]"
                     onClick={() => setShowModal(false)}
                   >
                     <IoMdClose className='text-white'/>
                   </button>
                   <h3 className='text-[22px] lg:text-[22px] font-bold mb-5 mt-5'>Select Your Device to Repair at Cell Phone Repair</h3>
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
                   <form  onSubmit={contactform} className='w-full flex flex-col  justify-between items-start'>
                        <div className='w-full flex flex-col md:flex-row  justify-between items-start'>
                            <div className='form-input flex-col md:w-[49%]  py-2 flex w-full justify-between items-start'>
                                <label className='text-[14px] mb-2'>First Name</label>
                                <input name="first_name" className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='text'  placeholder='First name' />
                                {error&&first_name ? <p className='w-full text-red-600  text-start'>{first_name}</p> : ""}
                            </div>
                            <div className='form-input flex-col md:w-[49%]  py-2  flex w-full justify-between items-start'>
                                <label className='text-[14px] mb-2'>Last Name</label>
                                <input name="last_name" className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='text'  placeholder='Last name' />
                                {error&&last_name ? <p className='w-full text-red-600 text-start '>{last_name}</p> : ""}
                            </div>
                        </div>

                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Email Address</label>
                            <input name="email" className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='email'  placeholder='Email address' />
                            {error&&email ? <p className='w-full text-red-600 text-start '>{email}</p> : ""}
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Phone Number</label>
                            <input name="phone" className='w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]' type='tel'  placeholder='Phone number' />
                            {error&&phone ? <p className='w-full text-red-600  text-start   '>{phone}</p> : ""}
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Device Type</label>
                            <select name="device_type" onChange={(e)=> handleForm(e.target.value)} id="countries" class="w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]">
                            <option selected  disabled>Choose your device type</option>
                            {device.map((item,indexed) =>{
                                return  <option onClick={()=> handleForm(item.name)} value={item.name}>{item.name}</option>
                            })}
                           
                        </select>
                        {error&&device_type ? <p className='w-full text-red-600 text-start '>{device_type}</p> : ""}
                        </div>
                        {status ?  <><div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Email Address</label>
                            <select name="repair_type" id="countries" class="w-full py-3 px-5 outline-0 bg-[#ebe9e9] border-0 rounded-[5px]">
                            <option selected disabled>Repair type</option>
                            {repair.map((item,index) =>{
                                return  <option key={index} value={item.name}>{item.name}</option>
                            })
                            }
                        
                        </select>
                        {error&&repair_type ? <p className='w-full text-red-600 '>{repair_type}</p> : ""}
                        </div>
                        <div className='form-input flex-col   py-2 mb-2 flex w-full justify-between items-start'>
                            <label className='text-[14px] mb-2'>Message</label>
                            <textarea  name="message" className='w-full   py-3 px-5 outline-0 bg-[#ebe9e9] border-0  resize-none' placeholder='Message' rows={5}/>
                            {error&&message ? <p className='w-full text-red-600 text-start '>{message}</p> : ""}
                        </div>    <button className='px-2 py-3 border rounded-full w-[50%] bg-[#f2480c] hover:bg-[#22282e] text-white mx-auto mt-5'>Get estimate</button> </>: ""}
                       
                            
                     
                    </form>
                 </div>
                
               </div>
             </div>
           </div>
           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
         </>
       ) : null}
     
  
          </div>
    </div>
    
  )
}

export default Slider