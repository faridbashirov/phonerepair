import React from 'react'
import { useEffect } from 'react'
import Slider from '../components/Slider'
import Services from '../components/Services'
import Problem from '../components/Problem'
import Offers from '../components/Offers'

import After from '../components/After'
import Blogs from '../components/Blogs'
import Sell from '../components/Sellsection'
import Carousels from '../components/Carousel'
import { Helmet } from 'react-helmet'



const Home = () => {
 



  return (
    <>
    <Helmet>
    <script defer async src='https://cdn.trustindex.io/loader.js?09c837e25a9734288e9675cf71b'></script>
    <script defer async src='https://cdn.trustindex.io/loader.js?fd74e1b2554f3433c046e264256'></script>
 
<title>Top Phone Repair Service in Auburn AL | Over 10.000+ Customers</title>
<meta data-react-helmet="true" name='description' content="Expert phone repair in Auburn AL with 10,000+ satisfied customers. Fast, reliable service for all major brands. See why we're highly rated!" />
</Helmet>
 
  
   
  
    <div>
      
      
     
        <Slider/>
        <Problem/>
        <div  className='w-[96%]' src='https://cdn.trustindex.io/loader.js?09c837e25a9734288e9675cf71b'></div>
        <div  className='w-[96%]' src='https://cdn.trustindex.io/loader.js?fd74e1b2554f3433c046e264256'></div>
        <Services/>
        <Offers/>
        
        <After/>
        <Blogs/>
        <Carousels/>
        <Sell/>
   
        
       
     
       
        
       
    
       
           
       

    </div>
    </>
     
  
  )
}

export default Home