import React from 'react'
import './cooler.css'
import mobileAndWeb from '../../assets/mobile&web.png'
import cooler from '../../assets/projectpage-cooler.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Cooler = () => {
  return (
    <section id='cooler'>
    <div className="container cooler__container">
      {/*<h5>Hello I'm</h5>
      <h1>Amber Roe</h1>
      <h5 className="text-light">Artist and Set Designer</h5>
     <CTA/> 
     <coolerSocials/>

     <div className="me">
      <img src={ME} alt="Amber profile photo" />
     </div>
   
    <a href="#contact" className="scroll__down">Scroll Down</a>
  */}

      <div className="coolerExplainer">
      <h3><span >  COOLER </span></h3>

         <p>
         An innovative platform designed to promote financial wellness
         among employees while fostering a sense of community and 
         shared responsibility within the workplace. The platform allows
         employers to facilitate group savings initiatives, where employees
         can collectively contribute a predetermined amount of money 
         month into a shared pool.
        </p>

        <span style={{fontSize:"19px",fontWeight:"bold"}}><span className="text-accent"> Mobile Development | Web Admin | UI/UX Design</span></span>
      </div>
     
     {/*<div className='coolerCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='coolerCTA'>
    
<img  className='coolerboximg' src={cooler} alt="counting coins"/>

    </div>}
   
      



</div>
    </section>
  )
}

export default Cooler