import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import CardBoard from './CardBoard';
import { useSelector, useDispatch } from 'react-redux';
import { updateCardSize } from '../features/cardSize/cardSizeSlice';


const cardPlaceholders = [
  { name: 'O MAGO', image: '/placeholders/12.png', id: '12' },
  { name: 'A CRIAÇÃO', image: '/placeholders/1.png', id: '1' },
  { name: 'O AMANTE', image: '/placeholders/2.png', id: '2' },
  { name: 'O GOVERNANTE', image: '/placeholders/3.png', id: '3' },
  { name: 'O SÁBIO', image: '/placeholders/4.png', id: '4' },
  { name: 'O INOCENTE', image: '/placeholders/5.png', id: '5' },
  { name: 'O CIGANO', image: '/placeholders/6.png', id: '6' },
  { name: 'O APRENDIZ', image: '/placeholders/7.png', id: '7' },
  { name: 'O POLÍTICO', image: '/placeholders/8.png', id: '8' },
  { name: 'O SACERDOTE', image: '/placeholders/9.png', id: '9' },
  { name: 'O LOUCO', image: '/placeholders/10.png', id: '10' },
  { name: 'O PROVEDOR', image: '/placeholders/11.png', id: '11' },
]

const destruidorCentral = { name: 'O DESTRUIDOR', image: '/placehoders/13.png' };

const GameBoard = () => {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight)
  const boardSize = Math.min(windowWidth, windowHeight) * 0.6;
  const cardSize = (boardSize * 0.2) - 10;
  const cardHeight = (cardSize / 127.99) * 181.7


  const cardAngle = (2 * Math.PI) / 12;
  const centerX = (windowWidth / 2) - (cardSize / 2); // left - right
  const centerY = ((windowHeight) / 2) - (cardSize * 1.4 ) ; // up - down
  const currCard = useSelector((state) => state.currCard)

  // update image path card placeholders
  if (currCard.name !== '') {
    cardPlaceholders.map((card, index) => {
      if (currCard.name === card.name) {
          card.image = currCard.image
      }
    })
  }

  // edge case update image path destruidor central
  if (destruidorCentral.name === currCard.name) {    
     destruidorCentral.image = currCard.image 
  }
  
  // update window width value
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

   // update window height value
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // const percent = destruidorCentral.image.includes('placehoders') ? "0%" : "100%"

  const board = (
    <div className="game-board" >
      <div className='moon'>
        <img src={process.env.PUBLIC_URL +"/moon.png"} alt="moon" />
      </div>
      <ul>
        {cardPlaceholders.map((card, index) => {
          const percent = card.image.includes('placeholders') ? "60%" : "100%"
          const x = centerX + Math.sin(index * cardAngle) * (boardSize / 2 - cardSize / 2);
          const y = centerY - Math.cos(index * cardAngle) * (boardSize / 2 - cardSize / 2);
          
          return (
              <CardBoard
                key={card.id + card.name}
                id={card.id + card.name}
                name={card.name}
                image={card.image}
                placeHolder={true}
                style={{
                  position: 'absolute',
                  top: y,
                  left: x,
                  width: cardSize,
                  height: cardHeight,
                  // border: '1px solid black',   
                  opacity: percent,
                }}
              />
            )
          
        })}
      </ul>
      <CardBoard
        id={"destruidor-central"}
        key={"destruidor-central"}
        name={destruidorCentral.name}
        image={destruidorCentral.image}
        placeHolder={true}
        style={{
          position: 'absolute',
          top: centerY,
          left: centerX,
          width: cardSize,
          border: '1px solid black',
          opacity: destruidorCentral.image.includes('placehoders') ? "0%" : "100%"
        }}
      />
      
      
      <div className='sun'>
        <img src={process.env.PUBLIC_URL + "/sun.png"} alt="" />
      </div>
    </div>
  );

  return board
};


export default GameBoard;