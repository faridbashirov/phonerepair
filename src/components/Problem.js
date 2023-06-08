import React from 'react'
import {
  useState
} from 'react'
import './Problem.css'
const phoneproblems = {
  1: {
    name: "Battery",
    solution: "battery solution"
  },
  2: {
    name: "Charger",
    solution: "charger solution dafasfasfasdsfds fsd fsf dsf dsf sdf ds f dsf sf dsf s fsd fs dfasfdasfdasf dsafasdf  asdf saf dsa f safda sf saf sa fs af saf sa fda sf asf sa f saf sa f"
  },
  3: {
    name: "Screen",
    solution: "screen solution"
  },


}


const phonesproblems = {
  1: [{
      name: "Broken display",
      id: 1,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Sound problems",
      id: 3,
    },
    {
      name: "Battery replacement",
      id: 4,
    },
    {
      name: "Replacement camera",
      id: 5,
    },
    {
      name: "Charger replacement",
      id: 6,
    },
    {
      name: "Screen replacement",
      id: 7,
    },
  ],
  2: [{
      name: "Broken display",
      id: 1,
    },
    {
      name: "Not working camera",
      id: 2,
    },
    {
      name: "Charger replacement",
      id: 3,
    },
    {
      name: "Screen replacement",
      id: 4,
    },
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 6,
    },
    {
      name: "Replacement camera",
      id: 7,
    },
  ],
  3: [
    {
      name: "Charger replacement",
      id: 1,
    },
    {
      name: "Screen replacement",
      id: 2,
    },
    {
      name: "Broken display",
      id: 3,
    },
    {
      name: "Not working camera",
      id: 4,
    },
    
    {
      name: "Sound problems",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 6,
    },
    {
      name: "Replacement camera",
      id: 7,
    },
  ],
  4: [
    {
      name: "Charger replacement",
      id: 1,
    },
    {
      name: "Screen replacement",
      id: 2,
    },
    {
      name: "Sound problems",
      id: 3,
    },
    {
      name: "Battery replacement",
      id: 4,
    },
    {
      name: "Broken display",
      id: 5,
    },
    {
      name: "Not working camera",
      id: 6,
    },
    {
      name: "Replacement camera",
      id: 7,
    },
  ],
  5: [
    {
      name: "Screen replacement",
      id: 1,
    },
    {
      name: "Sound problems",
      id: 2,
    },
    {
      name: "Charger replacement",
      id: 3,
    },
    {
      name: "Battery replacement",
      id: 4,
    },
    {
      name: "Broken display",
      id: 5,
    },
    {
      name: "Not working camera",
      id: 6,
    },
    {
      name: "Replacement camera",
      id: 7,
    },
  ],
  6: [
    {
      name: "Screen replacement",
      id: 1,
    },
    {
      name: "Sound problems",
      id: 2,
    },
    {
      name: "Charger replacement",
      id: 3,
    },
    {
      name: "Not working camera",
      id: 4,
    },
    {
      name: "Replacement camera",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 6,
    },
    {
      name: "Broken display",
      id: 7,
    },
  ],
  7: [
    {
      name: "Charger replacement",
      id: 1,
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
      id: 4,
    },
    {
      name: "Replacement camera",
      id: 5,
    },
    {
      name: "Battery replacement",
      id: 6,
    },
    {
      name: "Broken display",
      id: 7,
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
    name: "battery replacement",
    id: 1,
  },
  {
    name: "charger replacement",
    id: 2,
  },
  {
    name: "screen replacement",
    id: 3,
  }



]

const Problem = () => {

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

  return ( <
    div >
    <
    div className = 'grid w-[96%] mx-auto grid-cols-12 gap-5 lg:w-[80%] lg:h-[500px] mb-20 lg:mb-0 problems' >

    <
    div className = 'h-[400px] py-4 col-span-12 lg:col-span-3 problem' >
    <
    h3 className = 'w-full py-5 mb-10  bg-[#22282e] text-white text-xl ' > Select your device < /h3> <
    ul className = 'text-start px-2' > {
      phone.map((item, index) => {
        return <li onClick = {
          () => handleProblem(item.id)
        }
        className = 'mb-2 text-lg hover:text-[#f2480c] ' > {
          item.name
        } < /li>
      })
    }


    <
    /ul> <
    /div> <
    div className = 'h-[400px]  py-4  col-span-12 lg:col-span-3 problem' >
    <
    h3 className = 'w-full py-5 mb-10  bg-[#22282e] text-white text-xl ' > Select your problem < /h3> <
    ul className = 'text-start px-2' > {
      problem.map((item, index) => {
        return <li onClick = {
          () => handleSolution(item.id)
        }
        className = 'mb-2 text-lg hover:text-[#f2480c] ' > {
          item.name
        } < /li>
      })
    }

    <
    /ul> <
    /div> <
    div className = 'h-[400px]  py-4 col-span-12 lg:col-span-6  problem' >
    <
    h3 className = 'w-full py-5 mb-10  bg-[#22282e] text-white text-xl ' > {
      solution.name
    } < /h3> <
    p className = 'text-start ' > {
      solution.solution
    } < /p>

    <
    div class = "flex flex-col overflow-x-hidden" >
    <
    div class = "sm:-mx-6 lg:-mx-8" >
    <
    div class = "inline-block min-w-full py-2 sm:px-6 lg:px-8" >
    <
    div class = "overflow-x-auto" >

    <
    /div> <
    /div> <
    /div> <
    /div>

    <
    /div>


    <
    /div> <
    /div>
  )
}

export default Problem