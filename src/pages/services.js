import React,{useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import ClipLoader from "react-spinners/ClipLoader";



const Services = () => {


  const navigate = useNavigate();

const [service,setService]=useState([])
const [loading, setLoading] = useState(false);


useEffect(()=>{
  setLoading(true)
  axios.get("https://api.phonerepairweb.com/api/service/")
  .then(res=>{
      setService(res.data)
      console.log(res.data)
      setLoading(false)
    })
  .catch(err=>{
        console.log(err)
        setLoading(false)
      })

},[])
  return (
    <div className='w-[96%] lg:w-[80%]  mx-auto pt-10'>
        <h2 className='lg:text-5xl text-[32px] font-semibold '>Get started with your device repair</h2>
      <p className='mt-5 w-[full] sub-text'> Dolor sit amet consectetur elit eiusmod tempor dunt aliqua utas enim veniam tempore quis sed ipsum nostrud ipsum lorem
amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.</p>
        <div className='cards flex flex w-full  flex-wrap gap-5 shadow-lg-1000 my-10 lg:flex-row justify-start '>
          {loading ?  <ClipLoader loading={loading} data-testid="loader" speedMultiplier={2} className='text-center' color="#36d7b7" />
: null}
          {service.map((item,index)=>{
            return <Card key={index}  className='card w-[96%] sm:w-[48%] lg:w-[23%] pb-5  h-[auto] sm:h-[500px] md:h-[500px] lg:h-[450px] xl:h-[450px]  2xl:h-[600px]  flex flex-col items-center mb-20'>
            <CardActionArea onClick={()=> navigate(`/service/${item.slug}`)}>
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
         <button  onClick={()=> navigate(`/service/${item.slug}`)} size="small" color="primary" className='border-2 border-[#f2480c] hover:bg-[#f2480c] hover:text-white py-2 px-3'>
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