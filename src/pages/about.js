import React from 'react'
import '../components/About.css'
import { Helmet } from 'react-helmet'

const about = () => {
  return (


    <div className='w-full about-section '>
    <Helmet>
    
    <title>About Phone Repair Auburn | Your Trusted Tech Repair Experts</title>
    <meta name='description' content="Learn more about Phone Repair Auburn, your local tech repair specialists. Over 10,000 customers served with dedication and excellence." />
   </Helmet>
        <div className='w-[96%] lg:w-[80%] mx-auto flex py-20 flex-col lg:flex-row justify-between items-center'>
         <div className='w-full lg:w-[45%] text-start'>
            <h2 className='text-5xl mb-10 footer-header'>Who We Are</h2>
            <p>
            We are a leading phone repair provider located in Auburn, Alabama. With a strong focus on customer satisfaction, we have established ourselves as a trusted destination for reliable <strong>phone repairs</strong> in our community. Our skilled technicians are well-equipped to handle a variety of phone issues, from cracked screens to battery problems.
            </p>
            <p>
            What sets us apart is our commitment to exceptional service. <strong>With over 250 positive reviews on Google</strong>, we have earned a reputation for delivering high-quality repairs and transparent pricing. We value your time and strive for quick turnaround times without compromising on quality. Our goal is to provide convenient and reliable solutions for all your phone repair needs.
            </p>
            <p>
            At our repair center, we prioritize expertise and stay up-to-date with the latest phone models and repair techniques. This ensures accurate diagnoses and effective repairs, restoring your phone's optimal functionality. We also offer a range of phone accessories to enhance your device's performance and protection.
            </p>
            <p>
            We appreciate the trust our customers have placed in us and continuously work to exceed expectations. When you choose us for your phone repair needs, you can be confident in our reliable and reputable service.
            </p>
            <p>
            Thank you for considering our phone repair services. We look forward to serving you and providing the solutions you need to keep your phone in top condition.
            </p>
         </div>
         <div className='w-full lg:w-[50%] '>
            <img alt='service' className='w-full md:w-[full] h-[auto] mt-10 lg:mt-0 lg:h-[330px] xl:h-[400px]' src='https://fixzonecypress.com/static/images/about-1.png'/>
         </div>


        </div>
    </div>
 
  )
}

export default about