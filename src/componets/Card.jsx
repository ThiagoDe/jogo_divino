import React, {useState, useEffect, useRef} from 'react';
import './Card.scss'
import { CSSTransition } from 'react-transition-group';


const Card = ({ name, image, marginLeft, style, placeHolder }) => {
  const [showFront, setShowFront] = useState(true)
  const [cardHeight, setCardHeight] = useState()
  const [placeLeft, setPlaceLeft] = useState()
  const [placeTop, setPlaceTop] = useState()
  const [currLeft, setCurrLeft] = useState()
  const [currTop, setCurrTop] = useState()

  // find the final card position
  useEffect(() => {
    const refCard = document.querySelector(`img[alt="${name}"]`)
    if (refCard) {
      const {left, top } = refCard.getBoundingClientRect()
      setPlaceLeft(left)
      setPlaceTop(top)
    }
  }, [name])

  // handle card click from the spread board
  const onClick = (e) =>{
    setShowFront(false)
    const cardElement = e.target.getBoundingClientRect();
    setCurrTop(cardElement.top)
    setCurrLeft(cardElement.left);
    // setPlaceLeft(cardElement.left); // Update the final position to the clicked position
    // setPlaceTop(cardElement.top);
    setTimeout(() => {
      document.querySelector('.card-content').classList.add('move'); // Add the move class to animate the card movement
    }, 0);
}

  setTimeout(() => {
    requestAnimationFrame(() => {
      document.querySelector('.card-content').classList.add('move');
    });
  }, 0);



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
          
            <div className={`card-content ${showFront ? '' : 'move'}`} onClick={onClick}  
                style={{ 
                  width: style.width, 
                  height: cardHeight, 
                  marginLeft: marginLeft,
                  '--start-top': currTop,
                  '--start-left': currLeft,
                  '--end-top': placeTop,
                  '--end-left': placeLeft,
                  }}>
              
              <img src={image} alt={name} className="card-image-front"  style={{ width: style.width, marginLeft: marginLeft}}/>
            
            <img src={'/sun-moon2.png'} alt={name} className="card-image-back" style={{ width: style.width, marginLeft: marginLeft}}/>
            </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Card;


