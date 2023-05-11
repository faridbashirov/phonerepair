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
    <div className='h-auto lg:h-[1000px] bg-[#22282e] w-full py-20 lg:py-0'>
        <div className='flex flex-col  items-center  py-16'>
           <VscTools className=' text-5xl text-[#f2480c] '/>
           <h2 className='text-[#fff] uppercase lg:text-[44px] my-2 text-[32px] offer'>Featured Offers</h2>
           <p className='text-white text-[10px]'>BEST SERVICES ATY DISCOUNTED PRICE</p>

        
        </div>

       <div className='flex flex-col lg:flex-row py-30 lg:py-0 w-[96%] lg:w-[96%] mx-auto  items-center  justify-between'> 


         <div className=' flex flex-col items-center justify-between h-[700px]  w-[100%] lg:w-[43%] items-center  lg:[600px]'>
         <Card onMouseOver={()=> Sethover(imageDict["screen"])}  className='flex flex-col items-center transition duration-300 min-w-[300px] h-fit-content ease-in-out w-[100%] lg:w-[60%]  hover:scale-110'>
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
      <button  className='py-2 px-10 text-white bg-[#f2480c] '>
          Share
        </button>
      </CardActions>
    </Card>
         <Card   className='flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110 min-w-[300px] h-fit-content ease-in-out w-[100%] lg:w-[60%] '>
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
      <button  className='py-2 px-10 text-white bg-[#f2480c] '>
          Share
        </button>
      </CardActions>
    </Card>
         <Card onMouseOver={()=> Sethover(imageDict["water"])}    className='flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110 min-w-[300px] h-fit-content ease-in-out w-[100%] lg:w-[60%] '>
      <CardActionArea>
       
        <CardContent className='text-start'>
          <Typography gutterBottom variant="h5" component="div">
          Water Damage Repair
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Aabore dolore maga aliquat veniam nostrud exercitation utabore etas dolore magna aliquau enim .
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button  className='py-2 px-10 text-white bg-[#f2480c] '>
          Share
        </button>
      </CardActions>
    </Card>

         </div>
         <div className=' hidden lg:block text-center' >
            <img className=''  src={hover}></img>
         </div>
         <div className=' flex flex-col  justify-between h-[700px] w-[100%]  lg:w-[43%] items-center mt-20 lg:mt-0 lg:h-[700px] '>
         <Card  onMouseOver={()=> Sethover(imageDict["microphone"])} className='flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110  min-w-[300px] h-fit-content ease-in-out w-[100%] lg:w-[60%] '>
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
      <button  className='py-2 px-10 text-white bg-[#f2480c] '>
          Share
        </button>
      </CardActions>
    </Card>
         <Card onMouseOver={()=> Sethover(imageDict["battery"])}  className='flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110  min-w-[300px] h-fit-content ease-in-out w-[100%] lg:w-[60%] '>
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
      <button  className='py-2 px-10 text-white bg-[#f2480c] '>
          Share
        </button>
      </CardActions>
    </Card>
         <Card  className='flex flex-col items-center transition duration-300 ease-in-out  hover:scale-110  min-w-[300px] h-fit-content ease-in-out w-[100%] lg:w-[60%] '>
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
      <button  className='py-2 px-10 text-white bg-[#f2480c] '>
          Share
        </button>
      </CardActions>
    </Card>

         </div>
      </div>


    </div>
  )
}

export default Offers