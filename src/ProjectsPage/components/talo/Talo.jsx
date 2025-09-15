import React from 'react'
import './talo.css'
import mobileAndWeb from '../../assets/mobile&web.png'
import talo from '../../assets/projectpage-talo.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Talo = () => {
  return (
    <section id='talo'>
    <div className="container talo__container">
      {/*<h5>Hello I'm</h5>
      <h1>Amber Roe</h1>
      <h5 className="text-light">Artist and Set Designer</h5>
     <CTA/> 
     <taloSocials/>

     <div className="me">
      <img src={ME} alt="Amber profile photo" />
     </div>
   
    <a href="#contact" className="scroll__down">Scroll Down</a>
  */}

    
     
     {/*<div className='taloCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='taloCTA'>
    
<img  className='taloboximg' src={talo} alt="counting coins"/>

    </div>}
   

       <div className="taloExplainer">
      <h3><span >  TALO </span></h3>

         <p>
         Buy & sell fractional real estate as well as earn rental income 
         in their wallet and appreciation when they sell. In addition, 
         users are able to secure credit through their investment 
         (collateral). A platform to invest in real estate, track real time 
         value of properties, fractional purchase and sale of properties
         and receive income in wallet from properties invested.
        </p>

        <span style={{fontSize:"19px",fontWeight:"bold"}}><span className="text-accent"> Mobile Development | Web Admin | UI/UX Design</span></span>
      </div> 



</div>
    </section>
  )
}

export default Talo