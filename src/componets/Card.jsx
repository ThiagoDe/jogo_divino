import React, {useState, useEffect} from 'react';
import './Card.scss'
// import './CardBoard.scss'
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrCard } from '../features/currCard/currCardSlice';
import { updateModal } from '../features/modal/modalSlice';
import { updateUsingBoard } from '../features/game/gameSlice';
import { updateCardSize } from '../features/cardSize/cardSizeSlice';


const Card = ({ name, image, marginLeft, style, index, cardInfo, isGameOn }) => {
 
  const [showFront, setShowFront] = useState(true)
  const [animationDir, setAnimationDir] = useState(0)

  const [cardHeight, setCardHeight] = useState()
  const [placeLeft, setPlaceLeft] = useState()
  const [placeTop, setPlaceTop] = useState()
  const [currLeft, setCurrLeft] = useState()
  const [currTop, setCurrTop] = useState()



  const currCard = useSelector((state) => state.currCard)
  const sizes = useSelector( state => state.cardSize)
  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()

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
  const onClick = (e) => {
    // update currCard global state

    // switch back to using board
    dispatch(updateUsingBoard())
    
    // triggers modal 
    setTimeout(() => {
      dispatch(updateCurrCard(cardInfo))
      // opens modal
      dispatch(updateModal())
    }, 600);

    //show the face of the card
    setShowFront(false)
    const cardElement = e.target.getBoundingClientRect();
    setCurrTop(cardElement.top)
    setCurrLeft(cardElement.left);

}

  // handle resize and responsive design 
  useEffect(() => {
    const card = document.querySelector('.card-image-front-board')
    const handleResize = () => setCardHeight(card.offsetHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <li className={`card card-${index + 1}`} 
         
          style={{ zIndex: showFront ? 'auto' : 999, "--height": `${cardHeight}px`,
            // transitionDuration: '1.6s',
            left: isGameOn ? `${-((marginLeft * 1) * index)}px` : `${index * 5}px`,
            // transitionTimingFunction: 'cubic-bezier(0.3, 0.5, 0.3, 0.5)',
            // transform: `rotateZ(${Math.random() * 14 - 7}deg)`,
            // transform: isGameOn ? 
            //   `rotateZ(${-6 + index}deg) translateY(${ (index < 5) ? (index *(-5)): (index *(-5)+ (index -4) * 5)}px)`
            //   : `rotateZ(${Math.random() * 14 - 7}deg) `,

          }}
          onMouseOver={() => {
            const liElement = document.querySelector(`.card-${index + 1}`);
            liElement.style.transform = "translateY(-30px) ";
            
          }}
          onMouseOut={() => {
            const liElement = document.querySelector(`.card-${index + 1}`);
            liElement.style.transform = "translateY(0) ";
          }}
          >
        <CSSTransition
                    in={showFront}
                    timeout={300}
                    classNames='flip'
                >
          
            <div className={`nt ${showFront ? '' : 'move'}`} onClick={onClick}  
                style={{ 
                  width: style.width, 
                  height: style.height, 
                  // marginLeft: (marginLeft * 2 ),
                  '--start-top': currTop,
                  '--start-left': currLeft,
                  '--end-top': placeTop,
                  '--end-left': placeLeft,
              
                  }}>
                    {/* <style>
                      {`
                        @keyframes slide-in {
                          0% {
                            transform: translateX(${0 }px);
                          }
                          100% {
                            transform: translateX(${-marginLeft }px);
                          }
                        }
                      `}
                    </style> */}

              
              <img src={process.env.PUBLIC_URL + image} alt={name} className="card-image-front"  style={{ width: style.width, marginLeft: marginLeft}}/>
            
              <img src={process.env.PUBLIC_URL +'/card-back.png'} alt={name} className="card-image-back" style={{ width: style.width, marginLeft: marginLeft}}/>
            </div>
        </CSSTransition>
      </li>

    </>
  );
};

export default Card;


