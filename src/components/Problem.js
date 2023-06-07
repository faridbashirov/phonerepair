import React from 'react'
import { useState } from 'react'
import './Problem.css'
const phoneproblems={
    1:{name:"Battery",
       solution:"battery solution"},
    2:{name:"Charger",
       solution:"charger solution dafasfasfasdsfds fsd fsf dsf dsf sdf ds f dsf sf dsf s fsd fs dfasfdasfdasf dsafasdf  asdf saf dsa f safda sf saf sa fs af saf sa fda sf asf sa f saf sa f"},
    3:{name:"Screen",
       solution:"screen solution"},
   
        
}    
    
    
const phonesproblems={
    1:[ { name:"battery replacement",
    id:1,},
    { name:"charger replacement",
    id:2,},
    { name:"screen replacement",
    id:3,},],
    2:[ { name:"battery replacement",
    id:1,},
    { name:"charger replacement",
    id:2,},
    { name:"battery replacement",
    id:3,},],
    3:[ { name:"battery replacement",
    id:1,},
    { name:"charger replacement",
    id:2,},
    ]
  

    }
 
 
const phones=[
    {name:"iphone 4",
      id:1},
    {name:"iphone 5",
      id:2},
    {name:"iphone 6",
      id:3}
  
    
  
]
const problems=[
  { name:"battery replacement",
    id:1,},
  { name:"charger replacement",
    id:2,},
  { name:"screen replacement",
    id:3,
  }
    
  

]

const Problem = () => {

 const [problem,setProblems] = useState(problems)
 const [phone,setPhone] = useState(phones)
 const [solution,setSolution] = useState({solution:"Solution",name:"Solution"})


 const handleProblem= (filter)=>{
  const newproblems=phonesproblems[filter]
  setProblems(newproblems)
 }
 const handleSolution= (filter)=>{
  const newproblems=phoneproblems[filter]
  setSolution(newproblems)
 }
  
  return (
    <div>
    <div className='grid w-[96%] mx-auto grid-cols-12 gap-5 lg:w-[80%] lg:h-[500px] mb-20 lg:mb-0 problems'>

        <div className='h-[400px] py-4 col-span-12 lg:col-span-3 problem'>
            <h3 className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>Select your device</h3>
          <ul className='text-start px-2'>
            {phone.map((item,index)=>{
               return   <li onClick={()=>handleProblem(item.id)} className='mb-2 text-lg hover:text-[#f2480c] '>{item.name}</li>
            })}
           
         
          </ul>
        </div>
        <div className='h-[400px]  py-4  col-span-12 lg:col-span-3 problem'>
        <h3 className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>Select your problem</h3>
        <ul className='text-start px-2'>
        {problem.map((item,index)=>{
               return   <li onClick={()=>handleSolution(item.id)} className='mb-2 text-lg hover:text-[#f2480c] '>{item.name}</li>
            })}
          
          </ul>
        </div>
        <div className='h-[400px]  py-4 col-span-12 lg:col-span-6  problem'>
        <h3 className='w-full py-5 mb-10  bg-[#22282e] text-white text-xl '>{solution.name}</h3>
        <p className='text-start '>{solution.solution}</p>
    
        <div class="flex flex-col overflow-x-hidden">
  <div class="sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        
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