import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

//import navIcon from '../../assets/navicon.svg'
import navIcon from '../../assets/apiLogo.png'

const Footer = () => {
  return (
    <footer>

    <div className = "finalCta-container">
        <div className="finalCta-Explainer">
      <h1 className="text-light">Let's Build your next Digital Product</h1>

         <p className="text-light">
         Looking to kick-off your project ?
         Let’s start planning!
        </p>

        
      </div>
     
     <div className='finalCTA'>
     <button className="btn btn-primary">
           Talk to an Expert
         </button>
     </div>

 </div>

 <div className= "footer_divider"></div>
 <br/> 

      {/*<div className='permalinks'>

      <div className = 'socialsAndReviews'>
        < img src={navIcon} alt="" />

      <div className="socialsHolder">
       <span className="circle-container"><FaFacebook/></span>
       <span className="circle-container"><FaInstagram/></span>
       <span className="circle-container"><BsLinkedin/></span>
       <span className="circle-container"><FaTwitter/></span>
      </div>

       <div className="reviewedBox">

        <div className="clutch">
        REVIEWED ON

        <div className="clutchText">
       Clutch
       </div>
        
        </div>

        <div className="starBox">

         <div className="starColor" >
          <span className="starColor" ><AiFillStar/></span>
          <span className="starColor"><AiFillStar/></span>
          <span className="starColor"><AiFillStar/></span>
          <span className="starColor"><AiFillStar /></span>
          <span className="starColor"><AiFillStar/></span>
         </div>

         <p>52 REVIEWS</p>

        </div>
    
       </div>

     <a href="#">View All Testimonials</a>

     </div>

      
      <div >
      <h2>Services</h2>
       <ul>
        <li><a href="/#">Design Services</a></li>
        <li><a href="/#">Digital Marketing</a></li>
        <li><a href="/#">Software Development</a></li>
        <li><a href="/#">Web Development Agency</a></li>
        <li><a href="/#">Mobile App Development</a></li>
        <li><a href="/#">Dev Ops Services</a></li>
        <li><a href="/#">Staff Augmentation</a></li>
       
      </ul>
      </div>

      <div>
      <h2>Company</h2>
      <ul>
        <li><a href="/#">Portfolio</a></li>
        <li><a href="/#">Our Clients</a></li>
        <li><a href="/#">About Us</a></li>
        <li><a href="/#">Career</a></li>
        <li><a href="/#">Media </a></li>
        <li><a href="/#">Blog</a></li>
        <li><a href="/#">Contact Us</a></li>
        {/*<li><a href="/#">California Residents:Do </a></li>
        <li><a href="/#"> Not Sell My Personal</a></li>
        <li><a href="/#">Information</a></li>
      </ul>
      </div>

     

      <div>
        <h2>Headquarters</h2>
      <ul>
        <li><a >Address: Northwood Tower at Midtown
5757 Alpha Rd, Suite 410
Dallas, TX 75240</a></li>
        <li><a >Telephone number: 1-(214) 483-1452</a></li>
        <li><a >Email address: support@agencypartners.com</a></li>
        
      </ul>
      </div>

      </div>*/}

     {/* <div className= "footer_divider"></div>*/}


      <div className="footer__copyright">
       <small>
       CopyRight &copy; 2023 Neallus LLC.
       </small>
      </div>


    </footer>
  )
}

export default Footer