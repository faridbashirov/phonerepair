import React from 'react'
import '../components/Sell.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Buy = () => {
  return (
    <div className='w-full sell-section '>
       <Helmet>
      
 
      <title>Buy Phones in Auburn AL | Quality Guaranteed</title>
      <meta data-react-helmet="true" name='description' content="Purchase quality-assured, pre-owned phones in Auburn. Explore our wide selection of devices at great prices. Warranty included!" />
      
      
            </Helmet>
    <div className='w-[96%] lg:w-[80%]  mx-auto flex py-20 flex-col lg:flex-row justify-between items-center'>
    <div className='w-full lg:w-[50%] 2xl:w-[35%] '>
        <img alt='service' className='w-full md:w-[full] h-[auto] mt-10 lg:mt-0 lg:h-[330px] xl:h-[380px] 2xl:h-[450px]' src='https://fixzonecypress.com/static/images/about-1.png'/>
     </div>
     <div className='w-full lg:w-[45%] text-start'>
        <h2 className='text-5xl mb-10 first-text'>Who We Are</h2>
        <p>
        Upgrade your phone experience by trading in your used device and replacing it with a brand new one. At our store, we offer a hassle-free process that allows you to sell your used phone and put its value towards the purchase of a new device.
        Choose Us for all your mobile phone repair needs and experience the difference that comes with working with the best in the industry. Our commitment to quality, efficiency, and customer satisfaction sets us apart. Give your devices the care they deserve, and let our experts bring them back to life.
        </p>
        <p>
        We understand that technology advances rapidly, and you may want to stay up to date with the latest features and innovations. By selling your used phone to us, you can unlock its residual value and apply it towards the purchase of a new phone, making the upgrade more affordable.
        </p>
        <p>
        Our knowledgeable team will assess the condition of your used phone and provide you with a fair and competitive offer. Once the value is determined, you can explore our extensive collection of new phones, including the latest models from top brands. Choose the device that suits your needs, and we will deduct the value of your used phone from the total cost.
        </p>
        <p>
        Not only does this process simplify the upgrade process, but it also ensures that your used phone finds a new home, reducing electronic waste and promoting sustainability.
        </p>
        <p className='mb-20'>
        Visit our store today to explore the possibilities of trading in your used phone and treating yourself to a new, cutting-edge device. Upgrade to the latest technology while maximizing the value of your used phone with our convenient and cost-effective solution.
        </p>
        <Link to="#" className='btn-call uppercase font-semibold px-10 py-5 mt-20'>Call 04004400404</Link>
     </div>
     


    </div>
</div>
  )
}

export default Buy