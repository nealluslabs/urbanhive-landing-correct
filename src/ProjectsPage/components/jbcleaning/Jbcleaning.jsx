import React from 'react'
import './jbcleaning.css'
import mobileAndWeb from '../../assets/mobile&web.png'
import jbcleaning from '../../assets/projectpage-jbcleaning.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const JbCleaning = () => {
  return (
    <section id='jbcleaning'>
    <div className="container jbcleaning__container">
    
      <div className="jbcleaningExplainer">
      <h3><span >  JB CLEANING </span></h3>

         <p>
         A comprehensive software solution designed exclusively for 
cleaning companies to optimize their operations, manage 
clients efficiently, coordinate a workforce, and gain insights 
through inspection reports. This all-in-one application 
empowers cleaning businesses to thrive in a highly competitive
industry by streamlining processes, improving customer 
service, and ensuring compliance.
        </p>


        <span style={{fontSize:"19px",fontWeight:"bold"}}><span className="text-accent"> Mobile Development | Web Admin | UI/UX Design</span></span>
      </div>
     
     {/*<div className='jbcleaningCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='jbcleaningCTA'>
    
<img  className='jbcleaningboximg' src={jbcleaning} alt="counting coins"/>

    </div>}
   
      



</div>
    </section>
  )
}

export default JbCleaning