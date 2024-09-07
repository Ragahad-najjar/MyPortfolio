import React from 'react'
import './FooterStyle.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Box'>
        <h1 className='Logo'>Raghad<span>Najjar</span></h1>
        <div className='buttons'>
            <a href="mailto:raghad.abdnajjar2001@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href='https://www.facebook.com/raghad.najjar.73?mibextid=ZbWKwL' target="_blank">
                <i className="fa-brands fa-facebook"></i></a>
                <a href="https://t.me/Raghad_Najjar" target="_blank"><i className="fab fa-telegram"></i></a>
                <a href="https://github.com/Ragahad-najjar" target="_blank"><i className="fab fa-github"></i></a>               
            </div>
      </div>
    </div>
  )
}

export default Footer