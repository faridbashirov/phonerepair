import React from 'react'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

import {HiLocationMarker} from 'react-icons/hi'
import './Footer.css'
const Footer = () => {
  return (
    <div className='w-full h-[500px] bg-[#22282e] text-white'>


<footer aria-label="Site Footer" class="footer">
  <div class="mx-auto  px-4 py-10 lg:w-[80%]">
    <div className='w-full flex flex-col lg:flex-row justify-between mb-10'>
  <div className='w-full lg:w-[40%]'>
            <h2 class="text-2xl font-bold text-white">
              Get the latest news!
            </h2>

            <p class="mt-4 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
              cupiditate quae nam molestias.
            </p>
          </div>
          <div className='w-full lg:w-[55%]'>
          <form class="w-full">
            <label for="UserEmail" class="sr-only"> Email </label>

            <div
              class="border border-gray-100 lg:p-2 p-5 focus-within:ring sm:flex flex-col lg:flex-row sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                class="w-full border-none py-3 mb-10 lg:mb-0  px-5 focus:border-transparent focus:ring-transparent sm:text-sm text-black"
              />

              <button
                class="mt-1 w-full border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white  px-6 py-3 text-sm font-bold uppercase tracking-wide text-white sm:mt-0 sm:w-auto sm:shrink-0"
              >
                Sign Up
              </button>
            </div>
          </form>
          </div>
          </div>
     <div class="lg:flex lg:items-start lg:gap-8">
   

      <div
        class="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16"
      >
        

        <div class="col-span-3 sm:col-span-1">
          <img className='w-[163px] h-[44px] mx-auto lg:mx-0' src='https://fixzonecypress.com/static/images/logo_white.png' />

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class="space-y-4 text-sm text-start">
            <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>
              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-span-3 sm:col-span-1">
          <h3 class="font-semibold text-white footer-header text-start">Repair Services</h3>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm text-start">
              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>
              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>
              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>
            </ul>
          </nav>
        </div>

       
        <div class="col-span-3 sm:col-span-1">
          <h3 class="font-semibold text-white footer-header text-start">Repair Services</h3>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-4 text-sm text-start">
              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c]">
                  Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>
              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>
              <li>
                <a href="#" class="text-white transition  hover:text-[#f2480c]">
                Phone repair
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-span-1 sm:col-span-1">
          <h3 class="font-semibold text-white text-start footer-header">Contact</h3>

          <nav aria-label="Footer Navigation - Company" class="mt-6">
            <ul class="space-y-6 text-sm text-start">
              <li>
                
                <a href="#" class="text-white transition hover:text-[#f2480c] d-flex w-full lg:w-[unset] items-center">
                <BsFillTelephoneFill className='mr-2'/>
                 0400404040
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition hover:text-[#f2480c] d-flex  w-full lg:w-[unset]  items-center">
                  <MdEmail  className='mr-2'/>
               example@gmail.com
                </a>
              </li>

              <li>
                <a href="#" class="text-white transition  w-full lg:w-[unset]  hover:text-[#f2480c]">
                  <HiLocationMarker  className='mr-2'/>
                Baku,Azerbaijan
                </a>
              </li>
            
            </ul>
          </nav>
        </div>


      </div>
    </div>

    <div class="mt-8 border-t border-gray-100 pt-8">
      <div class="sm:flex sm:justify-center ">
        <p class="text-md text-white text-center">
          &copy; 2023. Bridgerds. All rights reserved.
        </p>

     
      </div>
    </div>
  </div>
</footer>
    </div>



  )
}

export default Footer