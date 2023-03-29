import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 120px;
  transform: translate(-50%, -50%);
`;

const CardImage = styled.img`
  width: 80px;
  height: 120px;
`;

const CardNumber = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-weight: bold;
`;

const Card = ({ cardInfo, number }) => {
  return (
    <CardContainer style={{ transform: `rotate(${number * 30}deg) translate(-50%, -50%)` }}>
      <CardImage src={cardInfo.image} alt={cardInfo.name} />
      <CardNumber>{cardInfo.name}</CardNumber>
    </CardContainer>
  );
};

export default Card;
