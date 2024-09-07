import React from 'react'
import './SecEducationStyle.css'
const SecEducation = () => {
return (
    <div className='Education' id='Education'>
        <div className='Title'>
        <h1 >Education</h1> </div>
        <div className='timeline-items'>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2019/2025</div>
                    <div className='timeline-content'>
                        <h3>Electronic and Communication</h3>
                        <p> I Study Electronic and Communication Engineering at Damascus University.</p>
                    </div>
            </div>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2023/2024</div>
                    <div className='timeline-content'>
                        <h3>Front-End Development</h3>
                        <p> Website programming 'Front-end Development with Vica Web Solution -Zero Point.</p>
                    </div>
            </div>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2022</div>
                    <div className='timeline-content'>
                        <h3>Smart Device & Mobile Emerging Technologies</h3>
                        <p>Studied The 'Smart Device & Emerging Technologies' course from Yonsei University in South Korea
                            / online on Coursera .</p>
                    </div>
            </div>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    <div className='timeline-date'>2022</div>
                    <div className='timeline-content'>
                        <h3>IOT (internet of things) Wireless</h3>
                        <p> studied The 'IOT(internet of things) Wireless & cloud Computing Emerging Technologies' course from Yonsei University in South Korea
                            / online on Coursera.</p>
                    </div>
            </div>
        </div>
    </div>
)
}

export default SecEducation