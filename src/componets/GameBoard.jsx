// import React from 'react';
// import styled from 'styled-components';
// import Card from './Card';

// const GameBoardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 80%;
//   max-height: 70%;
//   // padding-bottom: 70%;
//   // border: 2px solid black;
//   border-radius: 50%;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// const CardContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 80px;
//   height: 120px;
//   transform: translate(-50%, -50%);
// `;

// const cardInfoArray = [
//   { name: 'A CRIAÇÃO', image: '/1 - A CRIAÇÃO.png' },
//   { name: 'O AMANTE', image: '/2 - O AMANTE.png' },
//   { name: 'O GOVERNANTE', image: '/3 - O GOVERNANTE.png' },
//   { name: 'O SÁBIO', image: '/4 - O SÁBIO.png' },
//   { name: 'O INOCENTE', image: '/5 - O INOCENTE.png' },
//   { name: 'O CIGANO', image: '/6 - O CIGANO.png' },
//   { name: 'O APRENDIZ', image: '/7 - O APRENDIZ.png' },
//   { name: 'O POLÍTICO', image: '/8 - O POLÍTICO.png' },
//   { name: 'O SACERDOTE', image: '/9 - O SACERDOTE.png' },
//   { name: 'O LOUCO', image: '/10 - O LOUCO.png' },
//   { name: 'O PROVEDOR', image: '/11 - O PROVEDOR.png' },
//   { name: 'O MAGO', image: '/12 - O MAGO.png' },
// ];

// const destruidorCentral = { name: 'O DESTRUIDOR', image: '/13 - O DESTRUIDOR.png' };

// const GameBoard = () => {
//   return (
//     <GameBoardContainer>
//       {cardInfoArray.map((cardInfo, index) => {
//         const angle = index * (360 / cardInfoArray.length);
//         const cardX = Math.cos((angle - 90) * Math.PI / 180) * 250;
//         const cardY = Math.sin((angle - 90) * Math.PI / 180) * 250;
//         return (
//           <CardContainer key={index} style={{ top: `${cardY}px`, left: `${cardX}px` }}>
//             <Card cardInfo={cardInfo} />
//           </CardContainer>
//         );
//       })}
//       <CardContainer style={{ top: '50%', left: '50%' }}>
//         <Card cardInfo={destruidorCentral} />
//       </CardContainer>
//     </GameBoardContainer>
//   );
// };

// export default GameBoard;


// --------------- v2 -------------


import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import Card from './Card';

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

const destruidorCentral = { name: 'O DESTRUIDOR', image: '/13 - O DESTRUIDOR.png' };

const GameBoard = () => {

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
  

  const boardSize = Math.min(windowWidth, windowHeight) * 0.8;
  const cardSize = boardSize * 0.2;
  const cardAngle = (2 * Math.PI) / 12;
  const centerX = (windowWidth / 2) - (cardSize / 2);
  const centerY = (windowHeight / 2)- (cardSize / 2);

  return (
    <div className="game-board" >
      {cardInfoArray.map((card, index) => {
        const x = centerX + Math.sin(index * cardAngle) * (boardSize / 2 - cardSize / 2);
        const y = centerY - Math.cos(index * cardAngle) * (boardSize / 2 - cardSize / 2);
        return (
          <>
            <Card
              key={index}
              number={index + 1}
              name={card.name}
              image={card.image}
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
      <Card
        number={13}
        name={destruidorCentral.name}
        image={destruidorCentral.image}
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