import React from 'react'
import './gparcel.css'
import mobileAndWeb from '../../assets/mobile&web.png'
import gparcel from '../../assets/projectpage-gparcel.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Gparcel = () => {
  return (
    <section id='gparcel'>
    <div className="container gparcel__container">
    
    
     
     {/*<div className='gparcelCTA'>
    
       <img  className='CTAbox' src={countPennies} alt="counting coins"/>
     

     <div className='clip-path-bottom-right'></div>
     <div className='clip-path-bottom-left'></div>
     <div className='clip-path-top-left'></div>
</div>*/}  


{<div className='gparcelCTA'>
    
<img  className='gparcelboximg' src={gparcel} alt="counting coins"/>

    </div>}
   
      
    <div className="gparcelExplainer">
      <h3><span >  MOVIE PLAY </span></h3>

         <p>
         MoviePlay is a cutting-edge application that serves as a 
dynamic hub for movie producers, industry executives, and 
passionate movie watchers alike. This all-in-one platform 
seamlessly combines the functions of movie screening, 
rating, and transaction management, revolutionizing the way
the film industry collaborates and engages with audiences.
        </p>

        <span style={{fontSize:"19px",fontWeight:"bold"}}><span className="text-accent"> Mobile Development | Web Admin | UI/UX Design</span></span>
      </div>


</div>
    </section>
  )
}

export default Gparcel