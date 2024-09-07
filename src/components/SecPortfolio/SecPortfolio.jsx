import React from 'react'
import './SecPortfolioStyle.css'

import image1 from '../../assets/img/project-1.jpg'
import image2 from '../../assets/img/Project2.png'
import image3 from '../../assets/img/Project3.png'
import image4 from '../../assets/img/project-4.png'
import image5 from '../../assets/img/project-5.png'


import { useNavigate } from 'react-router-dom';

const cards = [
  { id: 1,
    title: 'Project-1',
    image:image1,
    description:"This project is built using HTML and CSS. It is responsive to all screen sizes."
  },
  { id: 2,
    title: 'Project-2',
    image: image3,
    description:"This project is built using HTML and CSS. It is responsive to all screen sizes."
  },
  { id: 3,
    title: 'Project-3',
    image:image2 ,
    description:"This is a multi-page project built using HTML, CSS, and Bootstrap. It is responsive to all screen sizes."
  },
  { id: 4,
    title: 'Project-4', 
    image: image4 ,
    description:"This is a multi-page website built using React and Webpack. It is responsive to screen sizes."
  },
  { id: 5,
    title: 'Project-5', 
    image:  image5,
    description:"This website was built using React and Webpack and is responsive to all screen sizes."
  },
];


const SecPortfolio = () => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/cardDetail/${id}`);
  };
  return (
    <div className='SecPortfolio' id="Portfolio">
    <div className='Title'>
    <h1 >Portfolio</h1> </div>
    <div className='card-section'>
    {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <button onClick={() => handleButtonClick(card.id)} className='BtnDetail'>Go to Details</button>
        </div>
      ))}
    </div>
    </div>
  )
}
export default SecPortfolio 