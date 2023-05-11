import React from 'react'
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../components/Blog-page.css'


const Blog = () => {
  return (
    <div className=' py-20 w-[96%] mx-auto'>
       <VscTools className='text-5xl  text-[#f2480c]'/>

<h2 className='lg:text-[44px] text-[32px] font-semibold'>Get started with your device repair</h2>
<p className='mt-5 w-[full] sub-text'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>
<div className='w-full flex lg:flex-row flex-col justify-between mt-20'>
         <div className='flex flex-col w-[full]  lg:w-[70%]  items-center'>
   

   <div className='cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 lg:flex-row '>
   <Card  className='card w-[96%] sm:w-[47%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[520px] xl:h-[500px]  2xl:h-[680px]  flex flex-col items-center mb-15'>
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
    <Card  className='card w-[96%] sm:w-[47%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[520px] xl:h-[500px]  2xl:h-[680px]  flex flex-col items-center mb-15'>
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
    <Card  className='card w-[96%] sm:w-[47%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[520px] xl:h-[500px]  2xl:h-[680px]  flex flex-col items-center mb-15'>
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
    <Card  className='card w-[96%] sm:w-[47%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[520px] xl:h-[500px]  2xl:h-[680px]  flex flex-col items-center mb-15'>
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
  <div className='w-full lg:w-[30%] mt-20 lg:mt-0 py-10 px-10 text-start category-blog'>
    <h2 className='font-semibold text-xl footer-header'>Categories</h2>
    <ul className='mt-10'>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>

    </ul>
   </div>
   </div>


    </div>
  )
}

export default Blog