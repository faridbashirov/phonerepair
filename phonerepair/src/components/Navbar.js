import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdClose} from "react-icons/io"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {FiPhoneCall} from "react-icons/fi"
import './navbar.css'
const Navbar = () => {

    const [navbar,Setnavbar] = useState(false)
      

    const mobilenavbar=()=>{

        Setnavbar(!navbar)
    }

  return (
    <div>
        <div className=' py-10 w-full h-[40px]  bg-[#22282e] hidden lg:block  text-white '>
        <div className='topheader w-[90%] h-full mx-auto justify-between hidden items-center lg:flex '>
            <div className='leftside'>
                <ul>
                <li> <Link className='text-white text-xl flex items-center '><FiPhoneCall /> <span className='mx-2'>12312321312</span> </Link></li>
                
                </ul>
            </div>
            <div className='rightside items-center flex w-[100%] sm:w-[100%] md:w-[50%] lg:w-[60%] xl:w-[55%] xxl:w-[55%] justify-between '> 
                
                <ul className='flex   justify-between items-center'>
                <span>Follow us</span>
                    <li className='mx-4'><Link to=""><AiOutlineInstagram/> </Link></li>
                    <li><Link to=""><BsFacebook/> </Link></li>
                  </ul>
                <button className='bg-white text-black px-10 py-2 border-0 rounded-full hover:bg-[#8cc652] hover:text-white    '><Link to="">Free estimate</Link></button>
                <button className='bg-white text-black px-10 py-2 border-0 rounded-full hover:bg-[#8cc652] hover:text-white   '> Repair status</button>
            </div>

        </div>
        </div>

        <div className='navbar py-10   w-full bg-[#2d363e] text-white h-[120px] lg:h-[100px] flex items-center  '>
            <div className=' w-[90%] mx-auto flex justify-between items-center'>
                <div className='logo'>
                    <img className='w-[150px] h-[50px] object-cover    ' src='https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=2000'></img>
                    
                </div>
                
                <div className='navitems w-[40%] hidden lg:flex lg:w-[60%] lg:w-[40%] xl:w-[40%] xxl:w-[40%] '>
                <ul className='flex w-full justify-between'>
                <li> <Link>Home</Link> </li>
                <li> <Link>About</Link> </li>
                <li><Link>Services</Link> </li>
                <li><Link>Sell</Link> </li>
                <li> <Link>Buy</Link></li>
                <li><Link>Blogs</Link> </li>
                <li> <Link>Contact</Link> </li>
                </ul>

               
               
               
                 
                   
                </div>
                <GiHamburgerMenu onClick={mobilenavbar} className='block lg:hidden'/>
                { navbar &&  <div className='fixed w-full bottom-0 left-0 top-0 right-0 z-[100]  h-screen  bg-[#00000070]'>
                 <div className='mobilenavbar     h-screen  w-[100%] lg:w-[30%] z-[100] fixed right-0 bg-[#2d363e] bottom-0 text-white  ' >
                    <ul className='flex flex-col items-center lg:items-start   py-2 pl-2 pt-10 w-[100%]  '>
                    <li className='border-b-[1px] w-[100%] lg:text-start' > Home</li>
                    <li className='border-b-[1px] w-[100%] lg:text-start'> About </li>
                    <li className='border-b-[1px] w-[100%] lg:text-start'> Services</li>
                    <li className='border-b-[1px] w-[100%] lg:text-start'> Sell</li>
                    <li className='border-b-[1px] w-[100%] lg:text-start'> Buy</li>
                    <li className='border-b-[1px] w-[100%] lg:text-start'> Blogs</li>
                    <li className='border-b-[1px] w-[100%] lg:text-start'> Contact</li>
                    <li> icon</li>
                        
                    </ul>

                    <IoMdClose onClick={mobilenavbar} className='text-white absolute right-2 top-2 '/>



                </div>
                </div>}
                

            </div>
  
        </div>
       
    </div>
  )
}

export default Navbar
