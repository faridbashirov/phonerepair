import React,{useEffect,useState} from 'react'
import {VscTools} from "react-icons/vsc"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';

import './Services.css'
const Services = () => {


  const [service,setService]=useState([])
  const navigate=useNavigate()


useEffect(()=>{
  axios.get("https://api.phonerepairweb.com/api/service/")
  .then(res=>{
      setService(res.data.slice(0,4))
      console.log(res.data)
    })
  .catch(err=>{
        console.log(err)
      })

},[])

  return (
    <div className='flex flex-col w-[96%] lg:w-[90%] mx-auto items-center'>
      <VscTools className='text-5xl  text-[#f2480c]'/>

      <h2 className='lg:text-5xl text-[32px] '>Get started with your device repair</h2>
      <p className='mt-5 w-[80%] sub-text'> Our repair center specialises in fixing a wide range of electronic devices, including phones, tablets, laptops, and computers, ensuring your gadgets are in expert hands for a seamless repair experience.
 ̰</p>

     <div className='cards service-cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 my-10 lg:flex-row justify-between '>
      {service.map((item,index)=>{
        return   <Card  key={index} className='card w-[96%] sm:w-[45%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center '>
        <CardActionArea onClick={()=> navigate(`/service/${item.slug}`)} className="sm:h-[500px]" >
          <CardMedia
            component="img"
            height="140"
            image={item.image}
            alt="green iguana"
            className=''
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='sm:h-[30px]'>
             {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className='sm:h-[80px]'>
             {item.small_description}
            </Typography>
          </CardContent>
        
        <CardActions>
          <button onClick={()=> navigate(`/service/${item.slug}`)}  size="small" color="primary" className='mx-auto border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
            Read more
          </button>
        </CardActions>
        </CardActionArea>
      </Card>
      })}



     </div>
   
        
    </div>
  )
}

export default Services