import React from 'react'
import { VscTools } from "react-icons/vsc"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const BlogDetail = () => {
    return (
        <div className=' pb-20 w-[96%] mx-auto'>
            <div className='w-full flex lg:flex-row flex-col justify-between mt-10'>
                <div className='flex flex-col w-[full]  lg:w-[67%]  items-center'>


                    <div className='blog-detail flex flex-col w-full  shadow-lg-1000 '>
                        <img className='w-full h-[250px] lg:h-[300px] mb-5' src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80' />
                        <h2 className='lg:text-[34px] text-[24px] text-start font-semibold mb-5'>Blog name</h2>
                        <p className='w-[96%] text-start'>
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                            1914 translation by H. Rackham
                            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                        </p>


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

export default BlogDetail