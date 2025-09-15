import React from 'react'
import './solutionshome.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import {BsWatch} from 'react-icons/bs'
import {FaLaptopCode,FaLock} from 'react-icons/fa'



import opencart from '../../assets/opencart.png'

import dynamics from '../../assets/dynamics.png'
import php from '../../assets/php.png'

import node from '../../assets/node.png'
import magento from '../../assets/magento.png'
import webflow from '../../assets/webflow.png'
import shopify from '../../assets/shopify.png'
import react from '../../assets/react.png'
import laravel from '../../assets/laravel.png'
import javascript from '../../assets/javascript.png'
import angular from '../../assets/angular.png'
import wordpress from '../../assets/wordpress.png'

const Solutions = () => {
  return (
    <section id='solutionshome'>
   
   

   <center style={{maxWidth:"70%", margin:"0 auto"}}>
   <h1>Innovative Digital Solutions That Accelerate Your Growth</h1>
  
   From WordPress and Shopify to Magento and more custom applications, our design and development teams work with every major programming
language. Whatever your business case, we’ll lead you toward the fastest, most-scalable return on investment.
   
   </center>
   
   <div className="container solutionshome__container">
   
     
        <div className='solutions-iconContainer'>
         <center>
        <img  src={dynamics} alt="" />
        </center>
        </div>
      
      
       <div className='solutions-iconContainer'>
       <center>
       <img src={php} alt="" />
       </center>
        </div>
       
      

       <div className='solutions-iconContainer'>
       <center>
       <img src={node} alt="" />
       </center>
       </div>


       <div className='solutions-iconContainer'>
       <center>
       <img src={magento} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       
       <center>
       <img src={webflow} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={shopify} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={react} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={laravel} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={javascript} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={angular} alt="" />
       </center>
       </div>

       <div className='solutions-iconContainer'>
       
       <center>
       <img src={wordpress} alt="" />
       </center>
      
       </div>

       <div className='solutions-iconContainer'>
       <center>
       <img src={opencart} alt="" />
       </center>
       </div>

     
          

   </div>

     
     
    </section>
  )
}

export default Solutions