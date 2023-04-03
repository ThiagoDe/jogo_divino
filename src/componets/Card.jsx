import React, {useState, useEffect} from 'react';
import './Card.scss'
import { CSSTransition } from 'react-transition-group';


const Card = ({ name, image, marginLeft, style, placeHolder }) => {
  const [showFront, setShowFront ] = useState(true)
  const [cardHeight, setCardHeight] = useState()

  const onClick = () =>{
          setShowFront(false)
  }

  useEffect(() => {
    const card = document.querySelector('.card-image-front-board')
    
    const handleResize = () => setCardHeight(card.offsetHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className="card" style={{ zIndex: showFront ? 'auto' : 999 }} >
        <CSSTransition
                    in={showFront}
                    timeout={300}
                    classNames='flip'
                >
          {/* add height here */}
            <div className='card-content' onClick={onClick}  style={{ width: style.width, height: cardHeight, marginLeft: marginLeft }}>
              
              <img src={image} alt={name} className="card-image-front"  style={{ width: style.width, marginLeft: marginLeft}}/>
            
            <img src={'/sun-moon2.png'} alt={name} className="card-image-back" style={{ width: style.width, marginLeft: marginLeft}}/>
            </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Card;


