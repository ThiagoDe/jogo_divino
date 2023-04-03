import React, { useState, useEffect } from 'react';
import Card from './Card';
import './SpreadBoard.scss';
import { CSSTransition } from 'react-transition-group';

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
    { name: 'O DESTRUIDOR', image: '/13 - O DESTRUIDOR.png' }
];



const SpreadBoard = ({ cardSize }) => {
    // const [showFront, setShowFront ] = useState(true)
    const numCards = cardInfoArray.length;
    const cardWidth = cardSize
    const spreadWidth = numCards * cardWidth;
    const marginLeft = -cardWidth / 2;

    return (
        <div className="spread-board" style={{minHeight: '20%'}}>
        {cardInfoArray.map((cardInfo, index) => (
            // <CSSTransition
            //     in={showFront}
            //     timeout={300}
            //     classNames='flip'
            // >
                <Card 
                    key={cardInfo.name}
                    image={cardInfo.image}
                    name={cardInfo.name}
                    index={index}
                    placeHolder={false}
                    marginLeft={marginLeft}
                    style={{
                        position: 'absolute',
                        width: cardSize,
                        border: '1px solid black',
                    }}
                />
            // </CSSTransition>
        ))}
        </div>
    );
};

export default SpreadBoard;
