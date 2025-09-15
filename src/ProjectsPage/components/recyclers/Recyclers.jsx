import React from 'react'
import './recyclers.css'
import mobileAndWeb from '../../assets/mobile&web.png'
import recyclers from '../../assets/projectpage-recyclers.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Recyclers = () => {
  return (
    <section id='recyclers'>
    <div className="container recyclers__container">
      {/*<h5>Hello I'm</h5>
      <h1>Amber Roe</h1>
      <h5 className="text-light">Artist and Set Designer</h5>
     <CTA/> 
     <recyclersSocials/>

     <div className="me">
      <img src={ME} alt="Amber profile photo" />
     </div>
   
    <a href="#contact" className="scroll__down">Scroll Down</a>
  */}

      <div className="recyclersExplainer">
      <h3><>  RECYCLERS BANK </></h3>

         <p>
         Tackle recycling by providing convenient recycling services
        and enabling masses to dispose waste through the proper 
        recycling channels thereby alleviating environment pollution. 
        With the innovative means and convenience created to 
        dispose of plastics through the right channels it enables and
        promotes consumers to build a recycling mentality.
        </p>

        <span style={{fontSize:"19px",fontWeight:"bold"}}><span className="text-accent"> Mobile Development | Web Admin | UI/UX Design</span></span>
      </div>
     
     {/*<div className='recyclersCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='recyclersCTA'>
    
<img  className='recyclersboximg' src={recyclers} alt="counting coins"/>

    </div>}
   
      



</div>
    </section>
  )
}

export default Recyclers