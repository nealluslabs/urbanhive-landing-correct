import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import laptop from '../../assets/laptop.svg'

import LoanSlider from './LoanSlider'



const Header = () => {

   const [input,setInput] = useState(1000)

   const handleChange = (e) => {
    setInput(e.target.value);
    console.log("this is the parent speaking")
  };

  return (
    <header>
    <div className="container Pheader__container-1">
      

      <div className="PheaderExplainer">
      <h1  style={{fontSize:"72px"}} className="text-light">Our Projects</h1>

         <p  style={{fontSize:"22px"}} className="text-light">
         Our Portfolio cuts across fintech, SaaS, health tech, entertainment technology
        </p>

      </div>
    

    </div>
    </header>
  )
}

export default Header