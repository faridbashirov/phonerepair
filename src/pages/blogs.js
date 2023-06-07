import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {VscTools} from "react-icons/vsc"
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import '../components/Blog-page.css'


const Blog = () => {

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
    <div className=' py-20 w-[96%] lg:w-[80%] mx-auto'>
       <VscTools className='text-5xl  text-[#f2480c]'/>

<h2 className='lg:text-[44px] text-[32px] font-semibold'>Get started with your device repair</h2>
<p className='mt-5 w-[full] sub-text'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>
<div className='w-full flex lg:flex-row flex-col justify-between mt-20'>
         <div className='flex flex-col w-[full]  lg:w-[70%]  items-center'>
   

   <div className='cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 lg:flex-row '>
    { blog.map((item,index)=>{
      return  <Card key={index}  className='card w-[96%] sm:w-[47%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[520px] xl:h-[500px]  2xl:h-[680px]  flex flex-col items-center mb-15'>
      <CardActionArea onClick={()=> navigate(`/blog/${item.slug}`)}>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
          className=''
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.small_description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button onClick={()=> navigate(`/blog/${item.slug}`)} size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
          Read more
        </button>
      </CardActions>
    </Card>
    })}
  
   


   </div>

   
 
      
  </div>
  {/* <div className='w-full lg:w-[30%] mt-20 lg:mt-0 py-10 px-10 text-start category-blog'>
    <h2 className='font-semibold text-xl footer-header'>Categories</h2>
    <ul className='mt-10'>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>
      <li className='mb-7 font-medium hover:text-[#f2480c]'><a href=''>Category</a></li>

    </ul>
   </div> */}
   </div>


    </div>
  )
}

export default Blog