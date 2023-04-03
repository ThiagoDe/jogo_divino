import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import CardBoard from './CardBoard';

const cardInfoArray = [
  { name: 'O MAGO', image: '/12 - O MAGO.png' },
  { name: 'A CRIAÇÃO', image: '/1 - A CRIAÇÃO.png' },
  { name: 'O AMANTE', image: '/2 - O AMANTE.png' },
  { name: 'O GOVERNANTE', image: '/3 - O GOVERNANTE.png' },
  { name: 'O SÁBIO', image: '/4 - O SÁBIO.png' },
  { name: 'O INOCENTE', image: '/5 - O INOCENTE.png' },
  { name: 'O CIGANO', image: '/6 - O CIGANO.png' },
  { name: 'O APRENDIZ', image: '/7 - O APRENDIZ.png' },
  { name: 'O POLÍTICO', image: '/8 - O POLÍTICO.png' },
  { name: 'O SACERDOTE', image: '/9 - O SACERDOTE.png' },
  { name: 'O LOUCO', image: '/10 - O LOUCO.png' },
  { name: 'O PROVEDOR', image: '/11 - O PROVEDOR.png' },
];

const cardPlaceholders = [
  { name: 'O MAGO', image: '/placehoders/12.png' },
  { name: 'A CRIAÇÃO', image: '/placehoders/1.png' },
  { name: 'O AMANTE', image: '/placehoders/2.png' },
  { name: 'O GOVERNANTE', image: '/placehoders/3.png' },
  { name: 'O SÁBIO', image: '/placehoders/4.png' },
  { name: 'O INOCENTE', image: '/placehoders/5.png' },
  { name: 'O CIGANO', image: '/placehoders/6.png' },
  { name: 'O APRENDIZ', image: '/placehoders/7.png' },
  { name: 'O POLÍTICO', image: '/placehoders/8.png' },
  { name: 'O SACERDOTE', image: '/placehoders/9.png' },
  { name: 'O LOUCO', image: '/placehoders/10.png' },
  { name: 'O PROVEDOR', image: '/placehoders/11.png' },
]

const destruidorCentral = { name: 'O DESTRUIDOR', image: '/13 - O DESTRUIDOR.png' };

const GameBoard = (props) => {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth)
  const [ windowHeight, setWindowHeight ] = useState(window.innerHeight)
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  

  const boardSize = Math.min(windowWidth, windowHeight) * 0.6;
  const cardSize = (boardSize * 0.2) - 10;
  const cardAngle = (2 * Math.PI) / 12;
  const centerX = (windowWidth / 2) - (cardSize / 2); // left - right
  const centerY = ((windowHeight) / 2) - (cardSize * 1.4 ) ; // up - down

  return (
    <div className="game-board" >
      { props.handleCallback(cardSize) }

      {cardPlaceholders.map((card, index) => {
        const x = centerX + Math.sin(index * cardAngle) * (boardSize / 2 - cardSize / 2);
        const y = centerY - Math.cos(index * cardAngle) * (boardSize / 2 - cardSize / 2);
        return (
          <>
            <CardBoard
              key={card.name}
              number={index + 1}
              name={card.name}
              image={card.image}
              placeHolder={true}
              style={{
                position: 'absolute',
                top: y,
                left: x,
                width: cardSize,
                // height: cardSize,
                border: '1px solid black',
                
              }}
            />
            
          </>
        );
      })}
      <CardBoard
        number={13}
        name={destruidorCentral.name}
        image={'/placehoders/13.png'}
        placeHolder={true}
        style={{
          position: 'absolute',
          top: centerY,
          left: centerX,
          width: cardSize,
          // height: cardSize,
          border: '1px solid black',
        }}
      />
      
    </div>
  );
};


export default GameBoard;