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
    <div className="flex relative flex-col lg:flex-row  static w-[100%]  lg:w-[80%] mx-auto h-[auto] lg:h-[700px]   justify-center lg:justify-center xl:justify-center ">
        
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
            <p className="first-text">Dolor sit amet consectetur elit sed eiusmod tempor incididunt</p>
            </div>
           <div className="flex flex-col  items-start my-10">
            <h5>Use Only Genuine Parts</h5>
            <p className="text-start mb-5">Aabore dolore maga aliquat veniam nostrud exercitation utabore dolore sed ipsum magna aliquau enim</p>
            <h5>Leaders in the Repair Industry</h5>
            <p className="text-start mb-5">Aabore dolore maga aliquat veniam nostrud exercitation utabore dolore sed ipsum magna aliquau enim</p>
            <h5>Offer 6 Months Repair Warrenty</h5>
            <p className="text-start mb-5">Aabore dolore maga aliquat veniam nostrud exercitation utabore dolore sed ipsum magna aliquau enim</p>
            <h5>Experienced Specialists at Work</h5>
            <p className="text-start mb-5">Aabore dolore maga aliquat veniam nostrud exercitation utabore dolore sed ipsum magna aliquau enim</p>
            </div>
            </div>
        </div>
    
  )
}

export default After