import React from 'react'
import {
  useState
} from 'react'
import './Problem.css'
const phoneproblems = {
  1: {
    name: "Battery",
    solution: "Need a battery replacement for your iPhone? Auburn Phone Repair specialises in professional and efficient battery replacement services. Our skilled technicians use high-quality replacement batteries designed specifically for the iPhone, ensuring optimal performance. Say goodbye to a weak battery that drains quickly, and hello to extended battery life. We offer transparent pricing and a quick turnaround time, getting your iPhone back in your hands in no time. Contact us today to schedule your battery replacement and enjoy a fully powered device again."
  },
  2: {
    name: "Not working camera",
    solution: "Capture moments in stunning clarity with a camera replacement for your iPhone at Auburn Phone Repair. Our skilled technicians specialise in replacing faulty or damaged cameras, ensuring you never miss a perfect shot. Experience restored image quality and crisp focus with our high-quality camera replacements. We use genuine parts designed for the iPhone to ensure seamless integration and optimal performance. Don't let a malfunctioning camera hold you back—schedule your iPhone camera replacement with us today. Trust our expertise to bring your photography game back to life."
  },
  3: {
    name: "Screen",
    solution: "Restore the sleek display of your iPhone with our expert screen replacement service at Auburn Phone Repair. If you're dealing with a cracked, shattered, or unresponsive screen, our skilled technicians will replace it with a high-quality, genuine screen designed for the iPhone. Enjoy vibrant colours, sharp details, and smooth touch functionality once again. We prioritise your satisfaction, offering quick turnaround times and transparent pricing for our screen replacement services. Don't let a damaged screen hinder your iPhone experience. Contact us today to schedule your screen replacement and return your device to its full glory."
  },
  4: {
    name: "Broken Display",
    solution: "At Phone Repair Auburn, we specialise in fixing broken displays. Our skilled technicians have extensive experience handling this cutting-edge device and are well-equipped to tackle display-related issues. Whether your iPhone has a cracked screen, unresponsive touch functionality, or any other display problem, we have the expertise to restore it to its pristine condition. We use high-quality replacement parts designed for the iPhone, ensuring seamless and precise repair. Trust us to deliver exceptional results and get your iPhone display looking and functioning like new again."
  },
  5: {
    name: "Sound Problem",
    solution: "At Phone Repair Auburn, we specialise in resolving sound-related problems. If you're experiencing issues with the sound on your device, such as distorted audio, no sound output, or muffled speaker quality, our skilled technicians are here to assist you. We understand the importance of clear and crisp sound for daily activities, whether making calls, listening to music, or watching videos. Using our expertise and diagnostic tools, we will accurately identify the underlying cause of the sound problem and provide an effective repair solution. Trust us to restore the sound functionality of your iPhone, ensuring an enhanced audio experience."
  },
  6: {
    name: "Camera Replacement",
    solution: "Camera Replacement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  7: {
    name: "Charger Replacement",
    solution: "At Phone Repair Auburn, we provide reliable charger replacement services for the iPhone. If your charger is no longer functioning or needs an extra one, we have you covered. Our skilled technicians will ensure you have a compatible, high-quality charger that will safely and efficiently charge your iPhone. We understand the importance of a reliable charging solution for keeping your device powered throughout the day. Trust us to provide a durable, dependable replacement charger that meets your charging needs. Contact us today to get your iPhone charger replaced and stay connected without interruptions."
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