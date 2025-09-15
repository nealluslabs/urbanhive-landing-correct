import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {useState} from 'react'
//import navIcon from '../../assets/navicon.svg'
import navIcon from '../../assets/apiLogo.png'


import HamburgerMenu from './HamburgerMenu'


const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav>
  
     <div className='navContainer' >
      <div style={{fontSize:"2rem",color:"white",fontWeight:"900"}}>
        NEALLUS
        {/*<img src={navIcon} style={{width:"200px"}} alt="agency partner  logo"/>*/}
      </div>
    
    
      <div className='navLinks desktopDisp' >    
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#'? 'active':''}>Services</a>
         <a href="/projects" onClick={()=>{setActiveNav('projects')}} className={activeNav === 'projects'? 'active':''}>Our Work</a>
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#experience'? 'active':''}>Industries</a>
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#experience'? 'active':''}>About Us</a>
         <a href="/#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#experience'? 'active':''}>Blog</a>
      </div>  

      <HamburgerMenu className="mobileDisp"/>

    </div>
    </nav>
  )
}

export default Nav