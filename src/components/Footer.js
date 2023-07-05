import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiOutlineInstagram} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"


import {HiLocationMarker} from 'react-icons/hi'
import './Footer.css'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <div className='w-full h-[364px] bg-[#22282e] text-white'>


<footer aria-label="Site Footer" class="footer">
  <div class="mx-auto  px-4 py-10 lg:w-[80%]">

     <div class="lg:flex lg:items-start lg:gap-8">
   

      <div
        class="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16"
      >
        

        <div class="col-span-3 sm:col-span-1">
          <img className='w-[180px] h-[62px] mx-auto lg:mx-0' alt='service' src={logo} />

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class=" text-sm text-start flex items-center justify-start">
            <li>
                <Link to="#"  class="text-white transition hover:text-[#f2480c] w-[40px] h-[40px] flex items-center justify-center rounded-full border-[1px] border-[#fff] hover:border-[#f2480c] ">
                  <AiOutlineInstagram className='text-[18px]'/>
                </Link>
              </li>
              <li>
                <Link to="#" class="text-white transition hover:text-[#f2480c] mx-3 w-[40px] h-[40px] flex items-center justify-center rounded-full border-[1px] border-[#fff] hover:border-[#f2480c] ">
                 <FaFacebookF className='text-[18px]'/>
                </Link>
              </li>

             
            
            </ul>
          </nav>
        </div>

        <div class="col-span-3 sm:col-span-1">
          <h3 class="font-semibold text-white footer-header text-start">Repair Services</h3>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm text-start">
              <li>
                <Link to="service/phone-repair/"  class="text-white transition hover:text-[#f2480c]">
                  Phone Repair
                </Link>
              </li>

              <li>
                <Link to="service/tablets-repair/"  class="text-white transition  hover:text-[#f2480c]">
                Tablets Repair
                </Link>
              </li>
              <li>
                <Link to="service/laptop-repair/"  class="text-white transition  hover:text-[#f2480c]">
                Laptop Repair
                </Link>
              </li>
              <li>
                <Link to="service/computer-repair/"  class="text-white transition  hover:text-[#f2480c]">
                Computer Repair
                </Link>
              </li>
            </ul>
          </nav>
        </div>

       
        <div class="col-span-3 sm:col-span-1">
          <h3 class="font-semibold text-white footer-header text-start">Company</h3>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm text-start">
              <li>
                <Link to="/sell/" class="text-white transition hover:text-[#f2480c]">
                  Sell
                </Link>
              </li>

              <li>
                <Link to="/buy/"  class="text-white transition  hover:text-[#f2480c]">
                Buy
                </Link>
              </li>

              <li>
                <Link to="/about/"  class="text-white transition  hover:text-[#f2480c]">
                About Us
                </Link>
              </li>
              <li>
                <Link to="/contact/"  class="text-white transition  hover:text-[#f2480c]">
                Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-span-1 sm:col-span-1">
          <h3 class="font-semibold text-white text-start footer-header">Contact</h3>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-6 text-sm text-start">
              <li>
                
                <Link to="#"  class="text-white transition hover:text-[#f2480c] d-flex w-full lg:w-[unset] items-center">
                <BsFillTelephoneFill className='mr-2'/>
                 0400404040
                </Link>
              </li>

              <li>
                <Link to="#"  class="text-white transition hover:text-[#f2480c] d-flex  w-full lg:w-[unset]  items-center">
                  <MdEmail  className='mr-2'/>
               example@gmail.com
                </Link>
              </li>

              <li>
                <Link to="#"  class="text-white transition  w-full lg:w-[unset]  hover:text-[#f2480c]">
                  <HiLocationMarker  className='mr-2'/>
                Baku,Azerbaijan
                </Link>
              </li>
            
            </ul>
          </nav>
        </div>


      </div>
    </div>

    <div class="mt-8 border-t border-gray-100 pt-8">
      <div class="sm:flex sm:justify-center ">
        <p class="text-md text-white text-center">
          &copy; 2023. <a href="https://bridgerds.com/">Bridgerds</a>. All rights reserved.
        </p>

     
      </div>
    </div>
  </div>
</footer>
    </div>



  )
}

export default Footer