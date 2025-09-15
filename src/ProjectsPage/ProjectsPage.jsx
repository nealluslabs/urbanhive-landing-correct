import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import RangeTable from './components/rangeTable/RangeTable'
import Experience from './components/experience/Experience'
import Choice from './components/choice/Choice'
import Solutions from './components/solutions/Solutions'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Faq from './components/Faq/Faq'
import Cooler from './components/cooler/Cooler'
import Gparcel from './components/gparcel/Gparcel'
import JbCleaning from './components/jbcleaning/Jbcleaning'
import Talo from './components/talo/Talo'
import Recyclers from './components/recyclers/Recyclers'

const ProjectsPage = () => {
 
    return (
        <>
        <Nav/>
        <Header />
        <Cooler />
        <Gparcel />
        <JbCleaning />
        <Talo/>
        <Recyclers/>
        {/*<Choice/>*/}
       
        <Footer/>
        </>
      )
}

export default ProjectsPage