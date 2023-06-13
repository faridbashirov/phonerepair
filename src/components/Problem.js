import React from 'react'
import {
  useState
} from 'react'
import './Problem.css'
const phoneproblems = {
  1: {
    name: "Battery",
    solution: "Battery Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  2: {
    name: "Not working camera",
    solution: "Not working camera Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  3: {
    name: "Screen",
    solution: "Screen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  4: {
    name: "Broken Display",
    solution: "Broken Display Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  5: {
    name: "Sound Problem",
    solution: "Sound Problem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  6: {
    name: "Camera Replacement",
    solution: "Camera Replacement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  7: {
    name: "Charger Replacement",
    solution: "Charger Replacement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },


}
const phonesproblems = {
  1: [{
      name: "Broken display",
      id: 4,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
    {
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Screen replacement",
      id: 3,
    },
  ],
  2: [{
      name: "Broken display",
      id: 4,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Screen replacement",
      id: 3,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
  ],
  3: [{
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Screen replacement",
      id: 3,
    },
    {
      name: "Broken display",
      id: 4,
    },
    {
      name: "Not working camera",
      id: 2,
    },

    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
  ],
  4: [{
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Screen replacement",
      id: 3,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Broken display",
      id: 4,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
  ],
  5: [{
      name: "Screen replacement",
      id: 3,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Broken display",
      id: 4,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
  ],
  6: [{
      name: "Screen replacement",
      id: 3,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Broken display",
      id: 4,
    },
  ],
  7: [{
      name: "Charger replacement",
      id: 7,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Screen replacement",
      id: 3,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Replacement camera",
      id: 6,
    },
    {
      name: "Battery replacement",
      id: 1,
    },
    {
      name: "Broken display",
      id: 4,
    },
  ],

}

 
    const phones = [{
      name: "Iphone 14 Pro Max",
      id: 1
    },
    {
      name: "Iphone 14 Pro",
      id: 2
    },
    {
      name: "Iphone 14",
      id: 3
    },
    {
      name: "Iphone 13 Pro",
      id: 4
    },
    {
      name: "Iphone 13",
      id: 5
    },
    {
      name: "Iphone 13 Mini",
      id: 6
    },
    {
      name: "Iphone 12 Pro",
      id: 7
    },
  ]
  const problems = [{
    name: "Broken display",
    id: 4,
  },
  {
    name: "Not working camera",
    id: 2,
  },
  {
    name: "Sound problems",
    id: 5,
  },
  {
    name: "Battery replacement",
    id: 1,
  },
  {
    name: "Replacement camera",
    id: 6,
  },
  {
    name: "Charger replacement",
    id: 7,
  },
  {
    name: "Screen replacement",
    id: 3,
  }



]

const Problem = () => {
  const [active, setActive] = useState(null)
  
  const [active1, setActive1] = useState(null)
  const [problem, setProblems] = useState(problems)
  const phone = phones
  const [solution, setSolution] = useState({
    solution: "Solution",
    name: "Solution"
  })


  const handleProblem = (filter) => {
    const newproblems = phonesproblems[filter]
    setProblems(newproblems)
  }
  const handleSolution = (filter) => {
    const newproblems = phoneproblems[filter]
    setSolution(newproblems)
  }

  return ( <div>
    <div className = 'grid w-[96%] mx-auto grid-cols-12 gap-5 lg:w-[80%] lg:h-[500px] mb-20 lg:mb-0 problems' >

    <div className = 'h-[400px] py-4 col-span-12 lg:col-span-3 problem' >
    <h3 className = 'w-full py-5 mb-10  bg-[#22282e] text-white text-xl ' > Select your device </h3>
     <ul className = 'text-start px-2' > {
      phone.map((item, index) => {
        return <li onClick = {
          () => {handleProblem(item.id)
          setActive(item)}
          
        }
        className = {`mb-2 text-lg hover:text-[#f2480c] ${active === item && 'active-problem'}`} > {
          item.name
        } </li>
      })
    }


    </ul> </div> 
    <div className = 'h-[400px]  py-4  col-span-12 lg:col-span-3 problem' >
    <h3 className = 'w-full py-5 mb-10  bg-[#22282e] text-white text-xl ' > Select your problem </h3> 
    <ul className = 'text-start px-2' > {
      problem.map((item, index) => {
        return <li onClick = {
          () =>{ handleSolution(item.id)
            setActive1(item)
         }
        }
        className = {`mb-2 text-lg hover:text-[#f2480c] ${active1 === item  && 'active-problem'}`}> {
          item.name
        } </li>
      })
    }

    </ul>
     </div >
      <div className = 'h-[400px]  py-4 col-span-12 lg:col-span-6  problem' >
    <h3 className = 'w-full py-5 mb-10  bg-[#22282e] text-white text-xl ' > {
      solution.name
    } 
    </h3> 
    <p className = 'text-start ' > {
      solution.solution
    } </p>

    <div class = "flex flex-col overflow-x-hidden" >
    <div class = "sm:-mx-6 lg:-mx-8" >
    < div class = "inline-block min-w-full py-2 sm:px-6 lg:px-8" >
    <div class = "overflow-x-auto" >

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