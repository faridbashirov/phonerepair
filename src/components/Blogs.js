import React,{useEffect,useState} from 'react'
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import './Blogs.css'

const Blogs = () => {

  const [blog,setBlog]=useState([])

  const navigate= useNavigate()


useEffect(()=>{
  axios.get("https://api.phonerepairweb.com/api/blogs/")
  .then(res=>{
      setBlog(res.data)
      console.log(res.data)
    })
  .catch(err=>{
        console.log(err)
      })

},[])
  return (
    <div className='flex flex-col w-[96%] lg:w-[90%] py-[5em] mx-auto items-center'>
    <VscTools className='text-5xl  text-[#f2480c]'/>

    <h2 className='lg:text-[44px] text-[32px]'>Blogs</h2>
    {/* <p className='mt-5 w-[80%] sub-text'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p> */}

   <div className='cards service-cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 my-10 lg:flex-row justify-between '>
    {blog.map((item,index)=>{
      return    <Card  className='card w-[96%] sm:w-[45%] lg:w-[23%] pb-5  h-[auto] sm:h-[520px] md:h-[520px] lg:h-[530px] xl:h-[520px]  2xl:h-[690px]  flex flex-col items-center '>
      <CardActionArea onClick={()=> navigate(`/blog/${item.slug}`)} className='sm:h-[500px]'>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
          className=''
        />
        <CardContent>
          <Typography gutterBottom   component="div" className='blog-title text-[18px] font-semibold sm:h-[70px] lg:h-[120px] xl:h-[96px]'>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='sm:h-[70px] lg:h-[150px] xl:h-[120px]'>
            {item.small_description}
          </Typography>
        </CardContent>
      
      <CardActions>
      <button onClick={()=> navigate(`/blog/${item.slug}`)} size="small" color="primary" className='border-2 mx-auto border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
          Read more
        </button>
      </CardActions>
      </CardActionArea>
    </Card>
    })}

    {/* <Card  className='card w-[96%] sm:w-[47%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
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
    <Card  className='card w-[96%] sm:w-[47%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
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
    <Card  className='card w-[96%] sm:w-[47%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
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
    </Card> */}


   </div>
 
      
  </div>
  )
}

export default Blogs