import React from 'react'
import '../components/Sell.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const sell = () => {
  return (
    <div className='w-full sell-section '>
      <Helmet>
      
 
<title>Sell Your Phone in Auburn AL | Get the Best Value Here</title>
<meta data-react-helmet="true" name='description' content="Looking to sell your phone in Auburn? Get top dollar for your device with our easy, transparent process. Contact us for a quick quote!" />


      </Helmet>
    <div className='w-[96%] lg:w-[80%] mx-auto flex py-20 flex-col lg:flex-row justify-between items-center'>
    <div className='w-full lg:w-[55%] 2xl:w-[35%] '>
        <img alt='service' className='w-full md:w-[full] h-[auto] mt-10 lg:mt-0 lg:h-[330px] xl:h-[380px] 2xl:h-[450px]' src='https://fixzonecypress.com/static/images/about-1.png'/>
     </div>
     <div className='w-full lg:w-[45%] text-center lg:text-start pt-20 lg:pt-0'>
        <h2 className='text-5xl mb-10 first-text ml-20'>Who We Are</h2>
        <p className='ml-20'>
        Welcome to our phone store, your destination for new and used phones. We offer a diverse selection of high-quality devices to cater to your communication and technology needs.
        </p>
        <p className='ml-20'>
        Our inventory includes new phones from top brands, ensuring authenticity and manufacturer warranties for your peace of mind. Whether you're looking for the latest flagship or a budget-friendly option, our new phones provide cutting-edge features and sleek designs.
        </p>
        <p className='ml-20'>
        In addition to new phones, we meticulously test and inspect our used phones to guarantee their quality and functionality. These devices undergo necessary repairs or refurbishments to offer a reliable user experience at an affordable price.
        </p>
        <p className='ml-20'>
        Our knowledgeable staff is here to assist you in finding the perfect device to match your preferences and requirements. We offer competitive pricing, transparent information about each phone's condition, and detailed specifications for an informed decision-making process.
        </p>
        <p className='ml-20'>
        At our store, customer satisfaction is our priority. We continuously update our inventory to provide the latest models and popular devices. Whether you're a tech enthusiast, a business professional, or a casual user, we have a phone that suits your lifestyle.
        </p>
        <p className='mb-20 ml-20'>
        Visit our phone store today to explore our wide range of new and used phones. Our friendly team is ready to help you find the ideal device that enhances your connectivity and digital experience. Trust us to deliver quality phones that unlock endless possibilities.
        </p>
        <Link to="#" className='btn-call uppercase font-semibold px-10 py-5 mt-20 ml-20'>Call 04004400404</Link>
     </div>
     


    </div>
</div>
  )
}

export default sell