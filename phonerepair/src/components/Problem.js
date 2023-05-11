import React from 'react'
import { useState } from 'react'
import './Problem.css'
const phones={
    iphone4:{
        "broken display":{
            "Replacement Home button (no Touch ID)":124
        }
        
    },
    iphone5:[
        "broken display",
        "camera"
    ]
}

const Problem = () => {

 const [problem,setProblems] = useState()
  
  return (
    <div>
    <div className='grid w-[96%] mx-auto grid-cols-12 gap-5 lg:w-[96%] lg:h-[500px] mb-20 lg:mb-0'>

        <div className='h-[400px] py-10 col-span-12 lg:col-span-3 '>
            <p className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>Select your device</p>
          <ul className='text-start px-2'>
            <li className='mb-3 text-lg hover:text-[#f2480c] '>iphone 5</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'> iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
          </ul>
        </div>
        <div className='h-[400px]  py-10  col-span-12 lg:col-span-3 '>
        <p className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>Select your device</p>
        <ul className='text-start px-2'>
            <li className='mb-3 text-lg hover:text-[#f2480c] '>iphone 5</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'> iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
            <li className='mb-3 text-lg hover:text-[#f2480c]'>iphone 4</li>
          </ul>
        </div>
        <div className='h-[400px]  py-10  col-span-12 lg:col-span-6  '>
        <p className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>Select your device</p>
        <p className='text-start '>sdfsdfdsfdsf dsfsdf dkslmfk ldsmfk lsdmfklsd mfklsdmfk lsdmfkls dmfkldsm  fklsdmklv ksdmfklds mfklsdmfkdlsm klfsmvksdmvklsd skdmdsklfms sdfsdfsdf sdfsdf</p>
    
        <div class="flex flex-col overflow-x-hidden">
  <div class="sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm font-light border-collapse border border-slate-400">
          
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium border border-slate-300">1</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
            </tr>
            <tr class="border-b dark:border-neutral-500">
            <td class="whitespace-nowrap px-6 py-4 font-medium border border-slate-300">1</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
            </tr>
            <tr class="border-b ">
            <td class="whitespace-nowrap px-6 py-4 font-medium border border-slate-300">1</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
              <td class="whitespace-nowrap px-6 py-4 border border-slate-300">Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  
          </div>


    </div>
    </div>
  )
}

export default Problem