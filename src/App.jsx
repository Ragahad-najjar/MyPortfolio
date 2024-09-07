import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
/* import Hero from './components/Hero/Hero'
import AboutMe from './components/SecAboutMe/SecAboutMe'
import Education from './components/SecEducation/SecEducation'
import Portfolio from './components/SecPortfolio/SecPortfolio'
import Contact from './components/SecContact/SecContact' */
import Home from './Pages/Home/Home'
import CardDetail from './Pages/CardDetail/CardDetail'
import Footer from './components/Footer/Footer'
import {Router, Routes, Route } from 'react-router-dom';
function App() {
  const current_theme = localStorage.getItem('current_theme'); 
  const [theme, setTheme ] =useState(current_theme ? current_theme :'light');
    useEffect(()=>{
      localStorage.setItem('current_theme',theme)
    },[theme])
  return (
    <>
    <div className={`App container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme}/>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardDetail/:id" element={<CardDetail />} />
      </Routes>
      <Footer/> 
    </div>
    </>
  )  

}
export default App
