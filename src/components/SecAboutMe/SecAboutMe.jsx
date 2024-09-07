import React from 'react'
import './SecAboutMeStyle.css'
const SecAboutMe = () => {
  return (
    <div className='About' id="About" >
      <div className='Title'>
      <h1 >About Me</h1> </div>
      <div className='AboutMe'>
          <div className='CardAbout'>
            <h2> Iam<span>Raghad Najjar</span> </h2>
            <h2>An engineer and <span>Front-end Developer</span></h2>
            <p>Iam junior frontend developer, passionate about creating responsive </p>
            <p>visually appealing web applications ,iam always looking for new</p>
            <p>ways to bring my designs to life 
            ,in addition to my skills . </p>
            <p>Iam enjoy collaborating with other to finde the best solutions</p>
            <p>  and i look forward to learning from new
            challenges and gaining valuable experiences in my filed.</p>
          </div>
          <div className='CardSkills'>
            <h2>Skills</h2>
            <div className='skill-bar'>
              <div className="info">
                <p>Html</p>
                <p>80%</p>
              </div>
              <div className='bar'>
                <span className='Html'></span>
              </div>
            </div>
            <div className='skill-bar'>
              <div className="info">
                <p>Css</p>
                <p>75%</p>
              </div>
              <div className='bar'>
                <span className='Css'></span>
              </div>
            </div>
            <div className='skill-bar'>
              <div className="info">
                <p>Java script</p>
                <p>62%</p>
              </div>
              <div className='bar'>
                <span className='JavaScript'></span>
              </div>
            </div>
            <div className='skill-bar'>
              <div className="info">
                <p>React</p>
                <p>70%</p>
              </div>
              <div className='bar'>
                <span className='React'></span>
              </div>
            </div>
            <div className='skill-bar'>
              <div className="info">
                <p>Bootstrap</p>
                <p>65%</p>
              </div>
              <div className='bar'>
                <span className='BootStrap'></span>
              </div>
            </div>
            <div className='skill-bar'>
              <div className="info">
                <p>Tailwind</p>
                <p>50%</p>
              </div>
              <div className='bar'>
                <span className='Tailwind'></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecAboutMe
