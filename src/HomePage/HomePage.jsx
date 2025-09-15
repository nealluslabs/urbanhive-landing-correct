import React from 'react'

import Footer from './components/footer/Footer'


import DummyAbout from './components/about-copy/About'
import DummyAbout2 from './components/about2-copy/About2'
import DummyAbout3 from './components/about3-copy/About3'
import DummyHeader from './components/header/Header'

const HomePage = () => {
 
  return (
  <>
   
  <div className="welcomePage baskerville" style={{backgroundColor:"white"}}>
 
  {<DummyHeader />}
  <DummyAbout/>
  <DummyAbout2/>
  <DummyAbout3/>
  
  <Footer/>
  </div>

</>
      )
}

export default HomePage