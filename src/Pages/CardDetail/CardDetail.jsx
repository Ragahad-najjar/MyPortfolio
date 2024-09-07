import React , { useState } from 'react'
import { useParams } from 'react-router-dom';
import './CardDetailStyle.css'
import Image1 from './../../assets/img/project-1.jpg'
import Image2 from './../../assets/img/Project3.png'
import Image3 from './../../assets/img/Project2.png'
import Image4 from './../../assets/img/project-4.png'
import Image5 from './../../assets/img/project-5.png' 
import ImgPro1Sec1 from './../../assets/img/pro1-sec1.png'
import ImgPro1Sec2 from './../../assets/img/pro1-sec2.png'
import ImgPro1Sec3 from './../../assets/img/pro1-sec3.png'
import  ImgPro2Sec2 from './../../assets/img/pro2-sec2.png'
import  ImgPro2Sec3 from './../../assets/img/pro2-sec3.png'
import  ImgPro2Sec4 from './../../assets/img/pro2-sec4.png'
import  ImgPro2Sec5 from './../../assets/img/pro2-sec5.png'
import  ImgPro2Sec6 from './../../assets/img/pro2-sec6.png'
import  ImgPro3Sec1 from './../../assets/img/pro3-sec1.png'
import  ImgPro3Sec2 from './../../assets/img/pro3-sec2.png'
import  ImgPro3Sec3 from './../../assets/img/pro3-sec3.png'
import  ImgPro3Sec4 from './../../assets/img/pro3-sec4.png'
import  ImgPro3Sec5 from './../../assets/img/pro3-sec5.png'
import  ImgPro3Sec6 from './../../assets/img/pro3-sec6.png'
import  ImgPro3Sec7 from './../../assets/img/pro3-sec7.png'
import ImgPro4sec1 from './../../assets/img/pro4-sec1.png'
import ImgPro4sec2 from './../../assets/img/pro4-sec2.png'
import ImgPro4sec3 from './../../assets/img/pro4-sec3.png'
import ImgPro4sec4 from './../../assets/img/pro4-sec4.png'
import ImgPro4sec5 from './../../assets/img/pro4-sec5.png'
import ImgPro4sec6 from './../../assets/img/pro4-sec6.png'
import ImgPro4sec7 from './../../assets/img/pro4-sec7.png'
import ImgPro4sec8 from './../../assets/img/pro4-sec8.png'
import ImgPro4sec9 from './../../assets/img/pro4-sec9.png'
import ImgPro5sec1 from './../../assets/img/pro5-sec1.png'
import ImgPro5sec2 from './../../assets/img/pro5-sec2.png'
import ImgPro5sec3 from './../../assets/img/pro5-sec3.png'
import ImgPro5sec4 from './../../assets/img/pro5-sec4.png'
import ImgPro5sec5 from './../../assets/img/pro5-sec5.png'

const ProjectData = [
  {
    id:1,
    title:"Project-1",
    images:[Image1,ImgPro1Sec1,ImgPro1Sec2,ImgPro1Sec3],
    githubLink:"https://ragahad-najjar.github.io/Project_1/"
  },
  {
    id:2,
    title:"Project-2",
    images:[Image2, ImgPro2Sec2, ImgPro2Sec3, ImgPro2Sec4,ImgPro2Sec5,ImgPro2Sec6],
    githubLink:"https://ragahad-najjar.github.io/Project-2/"
  },
  {
    id:3,
    title:"Project-3",
    images:[Image3,ImgPro3Sec1, ImgPro3Sec2 ,ImgPro3Sec3, ImgPro3Sec4, ImgPro3Sec5, ImgPro3Sec6, ImgPro3Sec7],
    githubLink:"https://ragahad-najjar.github.io/project-team-5/"
  },
  {
    id:4,
    title:"Project-4",
    images:[Image4,ImgPro4sec1, ImgPro4sec2, ImgPro4sec3,ImgPro4sec4,
      ImgPro4sec5,ImgPro4sec6,ImgPro4sec7,ImgPro4sec8,ImgPro4sec9],
  },
  {
    id:5,
    title:"Project-5",
    images:[Image5, ImgPro5sec1, ImgPro5sec2, ImgPro5sec3,ImgPro5sec4,ImgPro5sec5],
  },
]

function CardDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Project.images.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + Project.images.length) % Project.images.length
    );
  };
  const { id } = useParams();
  const Project = ProjectData.find(p => p.id === parseInt(id));
  return (
    <div className='CardDetails'>
      <h1 className='Title'>{Project.title}</h1>
      <div className='ImagePro'>
        <img src={Project.images[currentIndex]}/>
      </div>
      <button onClick={prevImage} className='prevImage' >❮</button>
      <button onClick={nextImage} className='nextImage'>❯</button>
      <a href={Project.githubLink} target="_blank">
      <button className='BtnDetail'>
        Go to GitHub
      </button>
    </a>
      </div>
      
  );
}

export default CardDetail;
