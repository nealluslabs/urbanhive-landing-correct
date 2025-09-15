import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import agileBased from  '../../assets/agileBased.png'
import businessOriented from  '../../assets/businessOriented.png'
import collaboration from  '../../assets/collaboration.png'
import experience from  '../../assets/experience.png'
import userFriendly from  '../../assets/userFriendly.png'
import scalable from  '../../assets/scalable.png'

const Experience = () => {
  return (
    <section  id='experience'>

 

   <h1 className= "shifting-marginBottom" style={{scale:"0.7"}}>Benefits Of Our Web Application Development Services</h1>
   
   <div style={{scale:"0.7"}} className="container experience__container">
   
      <div className="experience__backend">

     <div  className="small-image" >
      <img src={experience} alt="" />
     </div>

       <div className="large-desc"  >
         <h3>Web Development</h3>
         <p>
         We understand the crucial role technology plays in today's digital
          landscape. Our team of skilled developers, designers, and project 
          managers are dedicated to crafting exceptional web applications 
          that empower our clients to thrive in the ever-evolving digital world.
         </p>
       </div>
       
      </div>

       <div className="experience__backend">
        
       <div className="small-image">
      <img src={businessOriented} alt="" />
     </div>
      
      
     <div className="large-desc">
       <h3>Mobile Development</h3>
       <p>
       Our software agency specializes in mobile development, 
       creating exceptional and user-friendly mobile applications 
       that deliver seamless experiences across iOS and Android platforms.
       </p>
      </div>

       </div>

       <div className="experience__backend">
      
       <div className="small-image">
      <img src={agileBased} alt="" />
     </div>
      
     <div className="large-desc">
       <h3>Product Design (UI/UX)</h3>
       <p>
       Our software agency offers top-notch product design (UI/UX) 
       services, where our talented team of designers combines 
       creativity and expertise to create intuitive and visually
        appealing user interfaces.
       </p>
      </div>

       </div>

       <div className="experience__backend">
       
       <div className="small-image">
        <img src={userFriendly} alt="" />
      </div>
       
       
      <div className="large-desc">
       <h3>Scalable Architecture</h3>
       <p>
       With our scalable architecture designs, you can 
       confidently scale your business without worrying 
       about technical limitations. We ensure your software 
       systems can handle increased workloads and accommodate new features.
       </p>
      </div>

       </div>

       <div className="experience__backend">
       
       <div className="small-image">
        <img src={collaboration} alt="" />
       </div>
       
       <div className="large-desc">
       <h3>Market Research</h3>
      
          <p>
          With a deep understanding of user behavior 
          and market trends, we design seamless user experiences 
          that captivate users and drive engagement, ultimately
           helping businesses achieve their goals.
          </p>
       </div>

       </div>

       <div className="experience__backend">
        
       <div className="small-image">
      <img src={scalable} alt="" />
      </div>

      <div className="large-desc">
       <h3>Agile Processes</h3>
        <p>
        We embrace agile processes to deliver 
        efficient and successful software development
         projects. With our agile approach, we prioritize collaboration,
          adaptability and continuous improvement.

        </p>
  
       </div>
      </div>    

   </div>

     
      <center className= "shifting-marginTop" >
      <Link to= {'/page2'}>
       <button className='btn btn-primary'>Get Started</button>
       </Link>
      </center>


     
  </section>
  )
}

export default Experience