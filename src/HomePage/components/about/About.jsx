import React from 'react'
import './about.css'
import mobileAndWeb from '../../assets/mobile&web.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
    <div className="container about__container">
   

      <div className="aboutExplainer">
      <h1><span className="text-accent">  Custom Web & Mobile App </span>Development</h1>

         <p>
         With our vast expertise and deep industry knowledge, 
         we provide end-to-end software development services,
          from concept to deployment and ongoing support. Whether
           you need a robust web application, a feature-rich mobile app,
            or a scalable enterprise solution, our team has the skills and 
            experience to turn your vision into a reality.
        </p>

        <button className="btn btn-primary">
           Talk to An Expert &nbsp; <span style={{position:"relative",top:"3.5px"}}><AiOutlineArrowRight/></span>
         </button>
      </div>
     
     {/*<div className='aboutCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='headerCTA'>
    
 
<img  className='CTAboximg' src={mobileAndWeb} alt="counting coins"/>

   
    
    </div>}
   
      



</div>
    </section>
  )
}

export default About