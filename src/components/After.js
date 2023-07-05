import React from "react";
import ReactCompareImage from "react-compare-image";
import {VscTools} from "react-icons/vsc"
import './After.css'

const After = () => {

    const before =
    "https://fixar.templines.info/wp-content/uploads/2017/01/before.png";
  const after =
    "https://fixar.templines.info/wp-content/uploads/2017/01/after.png";
  return (
    <div className="mt-20 flex relative flex-col lg:flex-row  static w-[100%]  lg:w-[80%] mx-auto h-[auto] lg:h-[720px]   justify-center lg:justify-center xl:justify-center ">
        
            <div >
            <div className="mainWrapper">
        <div className="contentWrapper  w-[300px] lg:w-[400px]  mx-auto">
          <ReactCompareImage
            hover={true}
            vertical={false}
            leftImage={before}
            rightImage={after}
          />
        </div>
      </div>
            </div>
            <div className="lg:right-0  flex   lg:items-start flex-col h-auto px-5 ">
            <div className="flex flex-col  items-start">
            <VscTools className="text-5xl text-[#f2480c] lg:mx-10 mb-5 icon mx-auto my-auto"/>
            <h2 className="text-center lg:text-start mx-auto lg:mx-0 after">Before & After</h2>
            {/* <p className="first-text">Dolor sit amet consectetur elit sed eiusmod tempor incididunt</p> */}
            </div>
           <div className="flex flex-col  items-start my-10">
            <h5>Reliability</h5>
            <p className="text-start mb-5">We prioritize reliability by offering expert repairs and high-quality replacement parts, ensuring your electronic device functions flawlessly for an extended period.</p>
            <h5>Convenience</h5>
            <p className="text-start mb-5">With our quick turnaround times, transparent pricing, and same-day repair options, we provide convenient solutions to minimize disruption and inconvenience caused by device issues.</p>
            <h5>Expertise</h5>
            <p className="text-start mb-5">Our skilled technicians possess extensive knowledge and experience in handling a wide range of electronic devices, guaranteeing accurate diagnoses and effective repairs for optimal performance.</p>
            <h5>Customer Satisfaction</h5>
            <p className="text-start mb-5">We are committed to your satisfaction, offering exceptional customer service, warranty coverage, and personalized assistance to ensure a positive and fulfilling experience with our electronic device services.</p>
            </div>
            </div>
        </div>
    
  )
}

export default After