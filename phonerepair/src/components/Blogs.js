import React from 'react'
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Blogs = () => {
  return (
    <div className='flex flex-col w-[90%] lg:w-[80%] mx-auto items-center'>
    <VscTools className='text-5xl  text-[#f2480c]'/>

    <h2 className='text-5xl '>Get started with your device repair</h2>
    <p className='mt-5 w-[80%]'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>

   <div className='cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 my-10 lg:flex-row '>
      <Card  className=' w-[45%] lg:w-[23%] h-auto  flex flex-col items-center '>
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
      <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card>
      <Card   className=' w-[45%] lg:w-[23%] h-auto   flex flex-col items-center' >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
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
    <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card>
      <Card  className='w-[45%] lg:w-[23%] h-auto    flex flex-col items-center' >
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
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
    <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card>
      <Card  className='w-[45%] lg:w-[23%] h-auto    flex flex-col items-center' w>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1528938102132-4a9276b8e320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="green iguana"
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
    <button size="small" color="primary" className='border-4 border-[#f2480c] py-2 px-3'>
        Read more
      </button>
    </CardActions>
  </Card>


   </div>
 
      
  </div>
  )
}

export default Blogs