import React,{useEffect,useRef} from 'react'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillCaretRight} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'

import './projects.css'

import property from '../../assets/property.png'
import healthcare from '../../assets/healthcare.png'
import education from '../../assets/education.png'
import FinTech from '../../assets/fintech.png'
import automotive from '../../assets/automotive.png'
import startups from '../../assets/startups.png'
import restaurants from '../../assets/restaurants.png'
import charity from '../../assets/charity.png'
import corporate from '../../assets/corporate.png'
import software from '../../assets/software.png'
import retail from '../../assets/retail.png'
import legal from '../../assets/legal.png'



import bonecole from '../../assets/bonecole.png'
import gpnet from '../../assets/gpnet.png'
import bridgetech from '../../assets/bridgetech.png'
import recyclersbank from '../../assets/recyclersbank.png'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {

  const onlyWidth = useWindowWidth()
  
   
  
    return (
      <section id='projects'>
        
     <center style={{maxWidth:"60%", margin:"0 auto"}}>
     <h1>Amazing Web App Development Projects We Have Done</h1>
    
     
     </center>
       
     <Swiper className="container projects__container"
     //swiper js options
     modules={[ Navigation,Pagination, Scrollbar, A11y,Autoplay]}
     
     autoplay={false}
     scrollbar={{ draggable: true }}
     slidesPerView={onlyWidth <= 1000 ?1 :(onlyWidth <= 1000? 2: (onlyWidth <= 1500? 2: 2))}
  
     spaceBetween={30}
     pagination={{clickable:true}}
     
     > 
    
  
   
   {/*1 */}
      <SwiperSlide className="project">
       <div className="project__avatar">
       <img src={recyclersbank} alt="recyclers bank" />
       </div>
      
      <div className='client__name'>
      <h4>Recyclers' Bank</h4>
       <p>Mobile Development/Web Admin/UI UX Design</p>
       </div>


      </SwiperSlide>
  
    {/*2 */}
    <SwiperSlide className="project">
       <div className="project__avatar">
       <img src={gpnet} alt="avatar one" />
       </div>
     
       <div className="client__name" >
       <h4>Grand Parcel</h4>
       <p>Mobile Development/Web Admin/UI UX Design </p>
       </div>
      
  
    
      </SwiperSlide>
  
        {/*3 */}
      <SwiperSlide className="project">
       <div className="project__avatar">
       <img src={bridgetech} alt="avatar one" />
       </div>
      
       <div className="client__name" >
       <h4>BridgeTech</h4>
       <p>Mobile Development/Web Admin/UI UX Design</p>
       </div>
  
      </SwiperSlide>
  
  
  
      
  
        {/*4 */}
      <SwiperSlide className="project">
       <div className="project__avatar">
       <img src={bonecole} alt="avatar one" />
       </div>
      
       <div className="client__name" >
       <h4>School ERP</h4>
       <p>Mobile Development/Web Admin/UI UX Design</p>
       </div>
  
      </SwiperSlide>
  
    </Swiper> 
  
  
      </section>
    )
  }
  
  export default Projects