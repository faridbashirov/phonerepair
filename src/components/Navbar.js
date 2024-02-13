import React from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdClose} from "react-icons/io"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {FiPhoneCall} from "react-icons/fi"

import Footer from './Footer'
import './navbar.css'
import logo from '../images/logo.png'

const Navbar = () => {

    const [navbar,Setnavbar] = useState(false)
    const [showModal, setShowModal] = React.useState(false);
    const [modal,setModal]=useState("")
    const [status,setStatus] = useState(false)
   
  const formHandle=(e)=>{
    e.preventDefault()
    
    const  ticket= e.target.ticket.value
    console.log(ticket)
    axios.get(`https://api.phonerepairweb.com/api/client/${ticket}/`)
    .then(res=>{
      console.log(res.data)
      setStatus(true)
      setModal("Your order on process")
     
      
    })
  .catch(err=>{
    setStatus(!ticket)

    setModal("We dont have any order matching with this ticket id")
    
       
       
      })



    }
      

    const mobilenavbar=()=>{

        Setnavbar(!navbar)
    }

  return (
    <div>
        <div className=' py-10 w-full h-[40px]  bg-[#22282e]  lg:block  text-white '>
        <div className='topheader w-[80%] h-full mx-auto justify-between items-center lg:flex '>
            <div className='leftside   '>
                <ul>
                <li className='call-number'> <Link to="tel:+1 (334) 734 5252" className='text-white text-xl flex items-center '><FiPhoneCall  className='trin-trin text-[#f2480c] '/> <span className='mx-2 text-[20px]'>+1 (334) 734 5252</span> </Link></li>
                
                </ul>
            </div>
            <div className='rightside items-center  hidden w-[100%] sm:w-[100%] md:w-[50%] lg:w-[55%] xl:w-[43%] xxl:w-[25%] justify-between  lg:flex  '> 
                
                <ul className='flex   justify-between items-center'>
                <span className='text-[14px] text-[#abafb2]'>Follow us</span>
                    <li className='mx-4'><Link to="" className='text-[#abafb2] hover:text-[#f2480c] social'><AiOutlineInstagram/> </Link></li>
                
                    <li><Link to="#" className='text-[#abafb2] hover:text-[#f2480c] social'> <BsFacebook/> </Link></li>
                  </ul>
                  <Link to="estimate">  <button  className='bg-white text-black px-6 py-2 border-0 text-[14px] rounded-full hover:bg-[#f2480c] hover:text-white  btn-repair  '>Free estimate</button></Link>
                <button onClick={() => setShowModal(true)} className='bg-white text-black px-6 text-[14px] py-2 border-0 rounded-full hover:bg-[#f2480c] hover:text-white  btn-estimate '> Repair status</button>
            </div>

        </div>
        </div>

        <div className='navbar py-10   w-full bg-[#2d363e] text-white h-[120px] lg:h-[100px] flex items-center  '>
            <div className=' w-[80%] mx-auto flex justify-between items-center'>
                <div className='logo'>
                  <a href="/">
                    <img alt="service" className='w-[150px] h-[50px] object-cover    ' src={logo}></img>
                  </a>
                    
                </div>
                
                <div className='navitems w-[40%] hidden lg:flex lg:w-[60%] lg:w-[40%] xl:w-[40%] xxl:w-[40%] '>
                <ul className='flex w-full justify-between'>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="about">About</Link> </li>
                <li><Link to="services">Services</Link> </li>
                <li><Link to="sell">Sell</Link> </li>
                <li> <Link to="buy">Buy</Link></li>
                <li><Link to="blog">Blogs</Link> </li>
                <li> <Link to="contact">Contact</Link> </li>
                </ul>

               
               
               
                 
                   
                </div>
                <GiHamburgerMenu onClick={mobilenavbar} className='block lg:hidden text-5xl'/>
                { navbar &&  <div className='fixed w-full bottom-0 left-0 top-0 right-0 z-[100]  h-screen  bg-[#00000070]'>
                 <div className='mobilenavbar     h-screen  w-[100%] lg:w-[30%] z-[100] fixed right-0 bg-[#2d363e] bottom-0 text-white  ' >
                    <ul className='flex flex-col items-center lg:items-start   py-2 pl-2 pt-10 w-[100%] pt-20 '>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5' ><Link to="/"  onClick={()=> Setnavbar(!navbar)}>Home</Link> </li>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5'><Link to="about" onClick={()=> Setnavbar(!navbar)}>About</Link>  </li>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5'> <Link to="services" onClick={()=> Setnavbar(!navbar)}>Services</Link> </li>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5'><Link to="sell" onClick={()=> Setnavbar(!navbar)}>Sell</Link></li>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5'> <Link to="buy" onClick={()=> Setnavbar(!navbar)}>Buy</Link></li>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5'> <Link to="blog" onClick={()=> Setnavbar(!navbar)}>Blogs</Link></li>
                    <li className='border-b-[1px] w-[100%] lg:text-start text-lg py-5'> <Link to="contact" onClick={()=> Setnavbar(!navbar)}>Contact</Link> </li>
                        
                    </ul>

                    <IoMdClose onClick={mobilenavbar} className='text-white text-3xl absolute right-2 top-2 '/>



                </div>
                </div>}
                

            </div>
      
        </div>
        <div>
       
    
     
       {showModal ? (
         <>
           <div
             className="justify-center w-[96%] md:w-[60%] lg:w-[50%] mx-auto items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
           >
             <div className="relative w-full my-6 mx-auto ">
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
                   <img alt='service' src='https://fixzonecypress.com/static/images/status_form_top.png' className='w-[142px] h-[74px] mt-10 mx-auto'/>
                   <h3 className='text-[22px] text-center font-bold mt-5'>Check your repair status</h3>
                   <p className='text-[#666666] text-center mt-5'>Checking the status of your repair is quick and easy at FixZone Phone Repair! Simply complete the form below to see the status of your device.</p>
                     <form  onSubmit={formHandle} className='mt-10'>
                  <input placeholder='Please enter your Ticked-i' name="ticket" type="text" className='w-full text-dark py-3 px-3 border-5 ticket-input'/>
    
                  <button type='submit' className=' btn-primary text-red-6000 py-3 my-4 px-3 text-white rounded-full bg-[#2d363e] hover:bg-[#f2480c] '>Check the reapir status </button>
                  </form>
                 {status ? <p className='bg-[#228b22] text-white'>{modal} </p> : <p className='bg-[#ff0000] text-white'>{modal} </p> }
                 </div>
                
               </div>
             </div>
           </div>
           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
         </>
       ) : null}
     
  
          </div>
        <Outlet/>
        <Footer/>
       
    </div>
  )
}

export default Navbar
