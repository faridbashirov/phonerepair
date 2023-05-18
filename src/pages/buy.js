import React from 'react'
import '../components/Sell.css'

const Buy = () => {
  return (
    <div className='w-full sell-section '>
    <div className='w-[96%] mx-auto flex py-20 flex-col lg:flex-row justify-between items-center'>
    <div className='w-full lg:w-[50%] 2xl:w-[35%] '>
        <img className='w-full md:w-[full] h-[auto] mt-10 lg:mt-0 lg:h-[330px] xl:h-[380px] 2xl:h-[450px]' src='https://fixzonecypress.com/static/images/about-1.png'/>
     </div>
     <div className='w-full lg:w-[45%] text-start'>
        <h2 className='text-5xl mb-10 first-text'>Who We Are</h2>
        <p className='mb-20'>
        Welcome to Houston's leading mobile phone repair service provider, your one-stop solution for all your mobile device repair needs. Our expert team of skilled technicians is dedicated to delivering top-notch iPhone repairs, Samsung repairs, Windows desktop PC services, Apple Mac services, and comprehensive mobile phone repairs at competitive prices. We prioritize customer satisfaction and ensure your devices are back in working order quickly and efficiently.
        Our state-of-the-art repair centre specializes in various repair services, including frame, button & switch, LCD & microphone, water damage & speaker, and more. Our years of experience and cutting-edge tools and techniques enable us to provide high-quality and timely repairs for your devices.
        As a customer-centric business, we understand the importance of keeping your gadgets in optimal condition. We take pride in offering reliable and swift repair services that help you stay connected in today's fast-paced world. Our team of industry-leading technicians is skilled and committed to ensuring that every repair is performed to the highest standards.
        Choose Us for all your mobile phone repair needs and experience the difference that comes with working with the best in the industry. Our commitment to quality, efficiency, and customer satisfaction sets us apart. Give your devices the care they deserve, and let our experts bring them back to life.
        </p>
        <a href='' className='btn-call uppercase font-semibold px-10 py-5 mt-20'>Call 04004400404</a>
     </div>
     


    </div>
</div>
  )
}

export default Buy