import React,{useEffect,useState} from 'react'
import axios from 'axios'

import {toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import '../components/estimate.css'
const Estimate = () => {

   const [device,setDevice] = useState([])
   const [repair,setRepair] = useState([])
   const [status,setStatus] = useState(false)
   const [success,setSuccess] = useState(false)

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
        <div className='w-full estimate-page rounded-[10px]'>
            <div className='w-[96%] lg:w-[80%]  mx-auto flex py-20 px-3 justify-end flex-col lg:flex-row'>

                <div className='w-full lg:w-[50%] mt-15 lg:mt-0 py-5 px-15 h-[auto] shadow-lg py-10 lg:px-10 px-4 bg-white'>
                    <h3 className='text-[32px] lg:text-[22px] font-bold mb-5'>Select Your Device to Repair at Cell Phone Repair</h3>
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
    )
}

export default Estimate