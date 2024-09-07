import React from 'react'
import Hero from './../../components/Hero/Hero'
import AboutMe from './../../components/SecAboutMe/SecAboutMe'
import Education from './../../components/SecEducation/SecEducation'
import Portfolio from './../../components/SecPortfolio/SecPortfolio'
import Contact from './../../components/SecContact/SecContact'
const Home = () => {
  return (
    <>
  <Hero/>
  <AboutMe/>   
  <Education/>
  <Portfolio/>
  <Contact/>  
    </>
  )
}

export default Home