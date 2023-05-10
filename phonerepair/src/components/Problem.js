import React from 'react'
import { useState } from 'react'
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
    <div className='grid w-[80%] mx-auto grid-cols-12 gap-5 lg:w-[80%] lg:h-[500px]'>

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
        <div className='h-[400px]  py-10  col-span-12 lg:col-span-4 '>
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
        <div className='h-[400px]  py-10  col-span-12 lg:col-span-5  '>
        <p className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>Select your device</p>
        <p className='text-start '>sdfsdfdsfdsf dsfsdf dkslmfk ldsmfk lsdmfklsdmfklsdmfklsdmfklsdmfkldsmfklsdmklv ksdmfkldsmfklsdmfkdlsmklfsmvksdmvklsd skdmdsklfms sdfsdfsdf sdfsdf</p>
    <table class="border-collapse border border-slate-400 w-full ">
     
    <tbody>
      <tr>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Indiasdasdasdadasdasdasdas sadasana</td>
      <td  className='py-3 border border-slate-300'  class="border border-slate-300 ...">Indianapolis</td>
      <td  className='py-3 border border-slate-300'  class="border border-slate-300 ...">Indianapolis</td>
      <td className='py-3 border border-slate-300 '  class="border border-slate-300 ...">Indianapolis</td>
     </tr>
     <tr>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Ohio</td>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Columbus</td>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Columbus</td>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Columbus</td>
     </tr>
     <tr>
      <td className='py-3 border border-slate-300' class="border border-slate-300 ...">Michigan</td>
      <td className='py-3 border border-slate-300' class="border border-slate-300 ...">Detroit</td>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Detroit</td>
      <td className='py-3 border border-slate-300'  class="border border-slate-300 ...">Detroit</td>
        </tr>
    </tbody>
        </table>
  
          </div>


    </div>
    </div>
  )
}

export default Problem