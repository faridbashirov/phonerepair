import React from 'react'
import { useState } from 'react';
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Offers.css'

const imageDict={
    
    battery:"https://fixar.templines.info/wp-content/uploads/2018/08/battary-repair.png",
    screen:"https://fixar.templines.info/wp-content/uploads/2018/08/unlock-repair.png",
    water:"https://fixar.templines.info/wp-content/uploads/2018/08/water-repair.png",
    microphone:"https://fixar.templines.info/wp-content/uploads/2018/08/lcd-repair.png"

}
const Offers = () => {

    
   const [hover,Sethover]=useState(imageDict["battery"])

  const setScreen = (filter)=>{
    Sethover(imageDict[filter])

  }

  return (
    <div className='h-auto  bg-[#22282e] w-full py-20 lg:py-0 lg:pb-20  offers'>
        <div className='flex flex-col  items-center  py-16'>
           <VscTools className=' text-5xl text-[#f2480c] '/>
           <h2 className='text-[#fff] uppercase lg:text-[44px] my-2 text-[32px] offer'>Featured Offers</h2>
           <p className='text-white text-[10px]'>BEST SERVICES ATY DISCOUNTED PRICE</p>

        
        </div>
      <div className='w-full d-flex items-start justify-between'>
       <div className='flex flex-col lg:flex-row py-30 lg:py-0 w-[96%] lg:w-[90%] mx-auto  items-center  justify-between'> 


         <div className=' flex flex-col items-center justify-between h-[700px]  w-[100%] lg:w-[33%] items-center  lg:[600px]'>
         <Card onMouseOver={()=> Sethover(imageDict["screen"])}  className='relative flex flex-col items-center transition duration-300  h-fit-content lg:h-[200px] ease-in-out w-[100%] lg:w-[100%]  hover:scale-110'>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Smartphone Body Repair
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Aabore dolore maga aliquat veniam nostrud exercitation utabore etas dolore magna aliquau enim .
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
         <Card   className='relative flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110  h-fit-content lg:h-[200px] ease-in-out w-[100%] lg:w-[100%] '>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
            Battery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
         <Card onMouseOver={()=> Sethover(imageDict["water"])}    className='relative flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110  h-fit-content lg:h-[200px] ease-in-out w-[100%] lg:w-[100%] '>
      <CardActionArea>
       
        <CardContent className='text-start py-4'>
          <Typography gutterBottom variant="h5" component="div">
          Water Damage Repair
          </Typography>
          <Typography variant="body2" color="text.secondary ">
          Aabore dolore maga aliquat veniam nostrud exercitation utabore etas dolore magna aliquau enim .
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
         <div className=' hidden lg:block text-center lg:w-[40%] lg:h-[800px]' >
            <img className='w-[100%]  lg:h-[850px] object-contain'  src={hover}></img>
         </div>
         <div className=' flex flex-col  justify-between h-[700px] w-[100%]  lg:w-[33%] items-center mt-20 lg:mt-0 lg:h-[700px] '>
         <Card  onMouseOver={()=> Sethover(imageDict["microphone"])} className='relative flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110  h-fit-content lg:h-[200px] ease-in-out w-[100%] lg:w-[100%] '>
      <CardActionArea >
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Speaker Microphone Fix
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Aabore dolore maga aliquat veniam nostrud exercitation utabore etas dolore magna aliquau enim .
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
         <Card onMouseOver={()=> Sethover(imageDict["battery"])}  className='relative flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110   h-fit-content lg:h-[200px] ease-in-out w-[100%] lg:w-[100%] '>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Battery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
         <Card  className='relative flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110 h-fit-content lg:h-[200px] ease-in-out w-[100%] lg:w-[100%] '>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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