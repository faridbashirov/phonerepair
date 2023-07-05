import React from 'react'
import { useState } from 'react';
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import './Offers.css'

const imageDict={
    brokenlcd:"https://fixar.templines.info/wp-content/uploads/2018/08/lcd-repair.png",
    screen:"https://fixar.templines.info/wp-content/uploads/2018/08/body-repair.png",
    battery:"https://fixar.templines.info/wp-content/uploads/2018/08/battary-repair.png",
    password:"https://fixar.templines.info/wp-content/uploads/2018/08/unlock-repair.png",
    water:"https://fixar.templines.info/wp-content/uploads/2018/08/water-repair.png",
    microphone:"https://fixar.templines.info/wp-content/uploads/2018/08/speaker-repair.png"

}
const Offers = () => {

    
   const [hover,Sethover]=useState(imageDict["battery"])

 

  return (
    <div className='h-auto  bg-[#22282e] w-full py-20  lg:pb-20 lg:py-0 offers'>
        <div className='flex flex-col  items-center  py-16'>
           <VscTools className=' text-5xl text-[#f2480c] '/>
           <h2 className='text-[#fff] uppercase lg:text-[44px] my-2 text-[32px] offer'>Featured Offers</h2>
           <p className='text-white text-[15px] sub-text'>BEST SERVICES ATY DISCOUNTED PRICE</p>

        
        </div>
      <div className='w-full d-flex items-start justify-between'>
       <div className='flex flex-col lg:flex-row py-30 lg:py-0 w-[96%] lg:w-[90%] mx-auto  items-center  justify-between'> 


         <div className=' flex flex-col items-center justify-between   w-[100%] lg:w-[33%] items-center  lg:h-[700px]'>
         <Card onMouseOver={()=> Sethover(imageDict["screen"])}  className='relative flex flex-col items-center transition duration-300   ease-in-out w-[100%] mb-10 lg:mb-0 lg:w-[100%] h-[210px] lg:h-[200px]  hover:scale-110'>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Smartphone Body Repair
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Restore your smartphone's appearance with our professional smartphone body repair services.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <div  className='absolute bottom-0 right-0 py-2 px-10 text-white bg-[#f2480c] '>
          25% DISCOUNT
        </div>
        <div  className='absolute bottom-[10px] left-[10px] py-2  text-[#f2480c] '>
          25% DISCOUNT
        </div>
      </CardActions>
    </Card>
         <Card onMouseOver={()=> Sethover(imageDict["password"])}   className='relative flex flex-col items-center transition duration-300   h-[210px]  mb-10 lg:mb-0 ease-in-out w-[100%] lg:w-[100%] lg:h-[200px]  hover:scale-110'>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Universal Unlocking
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Unlock your device from any carrier with our universal unlocking service, allowing you to use it with any SIM card worldwide.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div  className='absolute bottom-0 right-0 py-2 px-10 text-white bg-[#f2480c] '>
          25% DISCOUNT
        </div>
        <div  className='absolute bottom-[10px] left-[10px] py-2  text-[#f2480c] '>
          25% DISCOUNT
        </div>
      </CardActions>
    </Card>
         <Card onMouseOver={()=> Sethover(imageDict["water"])}   className='relative flex flex-col h-[210px]  mb-10 lg:mb-0  items-center transition duration-300   ease-in-out w-[100%] lg:w-[100%] lg:h-[200px]  hover:scale-110'>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Water Damage Repair
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Revive your water-damaged device with our expert water-damage repair services, ensuring a thorough restoration and maximum chances of recovery.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div  className='absolute bottom-0 right-0 py-2 px-10 text-white bg-[#f2480c] '>
          25% DISCOUNT
        </div>
        <div  className='absolute bottom-[10px] left-[10px] py-2  text-[#f2480c] '>
          25% DISCOUNT
        </div>
      </CardActions>
    </Card>

         </div>
         <div className=' hidden lg:block text-center' >
            <img alt='service' className='w-[100%] lg:h-[850px] object-contain'  src={hover}></img>
         </div>
         <div className=' flex flex-col  justify-between  w-[100%]  lg:w-[33%] items-center mt-20 lg:mt-0 lg:h-[700px] '>
         <Card  onMouseOver={()=> Sethover(imageDict["microphone"])} className='relative h-[210px]  mb-10 lg:mb-0  flex flex-col items-center transition duration-300   ease-in-out w-[100%] lg:w-[100%] lg:h-[200px]  hover:scale-110'>
      <CardActionArea >
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Speaker Microphone Fix
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Experience clear and crisp audio again with our speaker and microphone fix services, addressing any issues with your device's audio output and input functionalities.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div  className='absolute bottom-0 right-0 py-2 px-10 text-white bg-[#f2480c] '>
          25% DISCOUNT
        </div>
        <div  className='absolute bottom-[10px] left-[10px] py-2  text-[#f2480c] '>
          25% DISCOUNT
        </div>
      </CardActions>
    </Card>
         <Card onMouseOver={()=> Sethover(imageDict["brokenlcd"])}  className='relative flex h-[210px]  mb-10 lg:mb-0 flex-col items-center transition duration-300   ease-in-out w-[100%] lg:w-[100%] lg:h-[200px]  hover:scale-110'>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Broken LCD Repair
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Say goodbye to the frustration of a broken LCD screen with our professional repair service, restoring your device's display to its pristine condition for a seamless visual experience.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div  className='absolute bottom-0 right-0 py-2 px-10 text-white bg-[#f2480c] '>
          25% DISCOUNT
        </div>
        <div  className='absolute bottom-[10px] left-[10px] py-2  text-[#f2480c] '>
          25% DISCOUNT
        </div>
      </CardActions>
    </Card>
         <Card onMouseOver={()=> Sethover(imageDict["battery"])}   className='relative flex flex-col items-center transition duration-300  h-[210px]  mb-10 lg:mb-0  ease-in-out w-[100%] lg:w-[100%] lg:h-[200px]  hover:scale-110'>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
            Battery
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Regain optimal battery life and performance for your device with our battery repair and replacement services, ensuring long-lasting power to keep you connected throughout the day.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div  className='absolute bottom-0 right-0 py-2 px-10 text-white bg-[#f2480c] '>
          25% DISCOUNT
        </div>
        <div  className='absolute bottom-[10px] left-[10px] py-2  text-[#f2480c] '>
          25% DISCOUNT
        </div>
      </CardActions>
    </Card>

         </div>
      </div>
</div>

    </div>
  )
}

export default Offers