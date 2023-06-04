import React from 'react'
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Services.css'
const Services = () => {
  return (
    <div className='flex flex-col w-fulll lg:w-[90%] mx-auto items-center'>
      <VscTools className='text-5xl  text-[#f2480c]'/>

      <h2 className='lg:text-5xl text-[32px] '>Get started with your device repair</h2>
      <p className='mt-5 w-[80%]'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>

     <div className='service-cards cards flex flex w-full  flex-wrap gap-5 my-10 lg:flex-row justify-between '>
        <Card  className='card w-[96%] sm:w-[45%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="green iguana"
          className=''
        />
        <CardContent>
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
        <button size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
          Read more
        </button>
      </CardActions>
    </Card>
    <Card  className='card w-[96%] sm:w-[45%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="green iguana"
          className=''
        />
        <CardContent>
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
        <button size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
          Read more
        </button>
      </CardActions>
    </Card>
    <Card  className='card w-[96%] sm:w-[45%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="green iguana"
          className=''
        />
        <CardContent>
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
        <button size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
          Read more
        </button>
      </CardActions>
    </Card>
    <Card  className='card w-[96%] sm:w-[45%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=" https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="green iguana"
          className=''
        />
        <CardContent>
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
        <button size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
          Read more
        </button>
      </CardActions>
    </Card>


     </div>
   
        
    </div>
  )
}

export default Services