import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const GameBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 70%;
  // max-height: 70%;
  // padding-bottom: 70%;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 120px;
  transform: translate(-50%, -50%);
`;

const cardInfoArray = [
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
  { name: 'O MAGO', image: '/12 - O MAGO.png' },
];

const destruidorCentral = { name: 'O DESTRUIDOR', image: '/13 - O DESTRUIDOR.png' };

const GameBoard = () => {
  return (
    <GameBoardContainer>
      {cardInfoArray.map((cardInfo, index) => {
        const angle = index * (360 / cardInfoArray.length);
        const cardX = Math.cos((angle - 90) * Math.PI / 180) * 250;
        const cardY = Math.sin((angle - 90) * Math.PI / 180) * 250;
        return (
          <CardContainer key={index} style={{ top: `${cardY}px`, left: `${cardX}px` }}>
            <Card cardInfo={cardInfo} />
          </CardContainer>
        );
      })}
      <CardContainer style={{ top: '50%', left: '50%' }}>
        <Card cardInfo={destruidorCentral} />
      </CardContainer>
    </GameBoardContainer>
  );
};

export default GameBoard;
