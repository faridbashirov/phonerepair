import React, { Component } from "react";
import ReactCompareImage from "react-compare-image";
import {VscTools} from "react-icons/vsc"

const After = () => {

    const before =
    "https://fixar.templines.info/wp-content/uploads/2017/01/before.png";
  const after =
    "https://fixar.templines.info/wp-content/uploads/2017/01/after.png";
  return (
    <div className="flex relative  static w-[100%]  lg:w-[80%] mx-auto h-[900px] lg:h-[900px]   justify-center lg:justify-start  ">
        
            <div >
            <div className="mainWrapper">
        <div className="contentWrapper h-[500px] w-[500px]">
          <ReactCompareImage
            hover={true}
            vertical={false}
            leftImage={before}
            rightImage={after}
          />
        </div>
      </div>
            </div>
            <div className="absolute top-[900px] lg:right-0 lg:top-[5px] flex   lg:items-start flex-col h-auto  ">
            <div className="flex flex-col  items-start">
            <VscTools className="text-5xl text-[#f2480c]"/>
            <h2>Before & After</h2>
            <p>Dolor sit amet consectetur elit sed eiusmod tempor incididunt</p>
            </div>
           <div className="flex flex-col  items-start my-10">
            <h3>Use Only Genuine Parts</h3>
            <p className="text-start">Aabore dolore maga aliquat veniam nostrud exercitation utabore dolore sed ipsum magna aliquau enim</p>
            </div>
            </div>
        </div>
    
  )
}

export default After