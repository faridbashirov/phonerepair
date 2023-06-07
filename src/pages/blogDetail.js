import React,{useState,useEffect} from 'react'

import { useParams } from 'react-router-dom';
import axios from 'axios'


import '../components/Blog-page.css'


const BlogDetail = () => {
    const [blog,setBlog]=useState([])
    const {slug}=useParams()

    useEffect(() => {
        axios.get(`https://api.phonerepairweb.com/api/blog/${slug}/`)
        .then(res=>{
            setBlog(res.data)
           
          })
        .catch(err=>{
              console.log(err)
            })
        }, [slug]);

    return (
        <div className=' pb-20 w-[96%] lg:w-[80%]  mx-auto'>
            <div className='w-[90%] mx-auto flex lg:flex-row flex-col justify-between mt-10'>
                <div className='flex flex-col w-[full]   lg:w-full  items-center'>


                    <div className='blog-detail flex flex-col w-full  shadow-lg-1000 '>
                        <img alt='service' className='w-full h-[250px] lg:h-[500px] mb-5' src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80' />
                        <h2 className='lg:text-[34px] text-[24px] text-start font-semibold mb-5'>{blog.title}</h2>
                        <p className='w-[96%] text-start'>
                            {blog.description}
                        </p>


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

export default BlogDetail