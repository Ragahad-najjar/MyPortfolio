import React from 'react'
import './HeroStyle.css'
import HeroImg from '../../assets/img/HeroImg.png'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className='box'>
            <div className='boxText'>
                <p>Hello, </p>
                <h1 className='textName'>I’m<span>Raghad Najjar</span> </h1>
                <p className='textAnimation'>I’m a <span></span> </p>
                <p> An  Electronics and Communications engineer</p>
                <p>and Front-end Developer </p>
                <p>  I build the Front-end portion of website </p>
                <p> Iam intersted in the Web field,</p>
                <p>I aspire to become on the best programmers. </p>
            </div>
            <button className='btnCv'>My Cv</button>
            <div className='buttons'>
            <a href="mailto:raghad.abdnajjar2001@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href='https://www.facebook.com/raghad.najjar.73?mibextid=ZbWKwL' target="_blank">
                <i className="fa-brands fa-facebook"></i></a>
                <a href="https://t.me/Raghad_Najjar" target="_blank"><i className="fab fa-telegram"></i></a>
                <a href="https://github.com/Ragahad-najjar" target="_blank"><i className="fab fa-github"></i></a>               
            </div>
        </div> 
        <div className='ImgHero'>
            <img  src={HeroImg} alt=""/>
        </div>
    </div>
 )
}
export default Hero