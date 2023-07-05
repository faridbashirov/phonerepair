import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ServiceDetail = () => {
     const [service,setService]=useState([])
     const [services,setServices] = useState([])
     const  navigate=useNavigate()
     
    const {slug}=useParams();
    console.log(slug)
    useEffect(() => {
        axios.get(`https://api.phonerepairweb.com/api/service/${slug}/`)
        .then(res=>{
            setService(res.data)
           
          })
        .catch(err=>{
              console.log(err)
            })
        }, [slug]);
    useEffect(() => {
        axios.get(`https://api.phonerepairweb.com/api/service/`)
        .then(res=>{
            setServices(res.data)
           
          })
        .catch(err=>{
              console.log(err)
            })
        }, []);

    console.log(service)

    const sanitized = service.description;
  return (
    
        <div className=' pb-20 w-[96%] lg:w-[80%]  mx-auto'>
            <div className='w-full flex lg:flex-row flex-col justify-between mt-10'>
                <div className='flex flex-col w-[full]  lg:w-[67%]  items-center'>


                    <div className='blog-detail flex flex-col w-full  shadow-lg-1000 '>
                        <img alt='service' className='w-full h-[250px] lg:h-[300px] mb-5' src={service.image} />
                        <h2 className='lg:text-[34px] text-[24px] text-start font-semibold mb-5'>{service.name}</h2>
                        <p className='w-[96%] text-start'>
                            <span dangerouslySetInnerHTML={{ __html: sanitized }} />
                        </p>


                    </div>




                </div>
                <div className='w-full lg:w-[30%] mt-20 lg:mt-0 py-10 px-10 text-start category-blog'>
                    <h2 className='font-semibold text-xl footer-header'>Services</h2>
                    <ul className='mt-10'>
                        {services.map((item,index)=>{
                            return <li key={index} onClick={()=>navigate(`/service/${item.slug}`)} className='mb-7 font-medium hover:text-[#f2480c]'>{item.name}</li>
                        })}
                        
                      

                    </ul>
                </div>
            </div>


        </div>
    
  )
}

export default ServiceDetail