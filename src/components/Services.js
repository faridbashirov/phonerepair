import React,{useEffect,useState} from 'react'
import {VscTools} from "react-icons/vsc"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Services.css'
const Services = () => {


  const [service,setService]=useState([])
  const navigate=useNavigate()


useEffect(()=>{
  axios.get("http://127.0.0.1:8000/api/service/")
  .then(res=>{
      setService(res.data.slice(0,4))
      console.log(res.data)
    })
  .catch(err=>{
        console.log(err)
      })

},[])

  return (
    <div className='flex flex-col w-[96%] lg:w-[96%] mx-auto items-center'>
      <VscTools className='text-5xl  text-[#f2480c]'/>

      <h2 className='lg:text-5xl text-[32px] '>Get started with your device repair</h2>
      <p className='mt-5 w-[80%] sub-text'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>

     <div className='cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 my-10 lg:flex-row justify-start '>
      {service.map((item,index)=>{
        return   <Card  key={index} className='card w-[96%] sm:w-[47%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
            className=''
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {item.small_description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button onClick={()=> navigate(`/service/${item.slug}`)}  size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
            Read more
          </button>
        </CardActions>
      </Card>
      })}



     </div>
   
        
    </div>
  )
}

export default Services