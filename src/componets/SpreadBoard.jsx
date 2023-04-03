import React, { useState, useEffect } from 'react';
import Card from './Card';
import './SpreadBoard.scss';

const cardInfoArray = [
    { name: 'A CRIAÇÃO', image: '/1 - A CRIAÇÃO.png', compCard: 'O APRENDIZ', compImage: '/7 - O APRENDIZ.png' },
    { name: 'O AMANTE', image: '/2 - O AMANTE.png', compCard: 'O POLÍTICO', compImage : '/8 - O POLÍTICO.png'  },
    { name: 'O GOVERNANTE', image: '/3 - O GOVERNANTE.png', compCard: 'O SACERDOTE', compImage: '/9 - O SACERDOTE.png' },
    { name: 'O SÁBIO', image: '/4 - O SÁBIO.png', compCard: 'O LOUCO', compImage: '/10 - O LOUCO.png' },
    { name: 'O INOCENTE', image: '/5 - O INOCENTE.png', compCard: 'O PROVEDOR', compImage: '/11 - O PROVEDOR.png' },
    { name: 'O CIGANO', image: '/6 - O CIGANO.png', compCard: 'O MAGO', compImage: '/12 - O MAGO.png' },
    { name: 'O APRENDIZ', image: '/7 - O APRENDIZ.png', compCard: 'A CRIAÇÃO', compImage: '/1 - A CRIAÇÃO.png'},
    { name: 'O POLÍTICO', image: '/8 - O POLÍTICO.png', compCard: 'O AMANTE', compImage: '/2 - O AMANTE.png' },
    { name: 'O SACERDOTE', image: '/9 - O SACERDOTE.png', compCard: 'O GOVERNANTE', compImage: '/3 - O GOVERNANTE.png' },
    { name: 'O LOUCO', image: '/10 - O LOUCO.png', compCard: 'O SÁBIO', compImage: '/4 - O SÁBIO.png' },
    { name: 'O PROVEDOR', image: '/11 - O PROVEDOR.png', compCard: 'O INOCENTE', compImage: '/5 - O INOCENTE.png' },
    { name: 'O MAGO', image: '/12 - O MAGO.png', compCard: 'O CIGANO', compImage: '/6 - O CIGANO.png' },
    { name: 'O DESTRUIDOR', image: '/13 - O DESTRUIDOR.png', compCard: 'O DESTRUIDOR', compImage: '/13 - O DESTRUIDOR.png' }
];



const SpreadBoard = () => {
    const [cardWidth, setCardWidth ] = useState(null)
    const marginLeft = cardWidth ? -cardWidth / 2 : 0;

    useEffect(() => {
        const waitForElement = async () => {
            while (!document.querySelector('.card-image-front-board')) {
                await new Promise(resolve => setTimeout(resolve, 100))
            }
            const card = document.querySelector('.card-image-front-board');
            setCardWidth(card.offsetWidth)
        }
        waitForElement()
    }, [])

    useEffect(() => {
        const card = document.querySelector('.card-image-front-board')
        const handleResize = () => setCardWidth(card.offsetWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="spread-board" style={{minHeight: '20%'}}>
        {cardInfoArray.map((cardInfo, index) => (
           
                <Card 
                    cardInfo={cardInfo}
                    key={cardInfo.name}
                    image={cardInfo.image}
                    name={cardInfo.name}
                    index={index}
                    placeHolder={false}
                    marginLeft={marginLeft}
                    style={{
                        position: 'absolute',
                        width: cardWidth,
                        border: '1px solid black',
                    }}
                />
        ))}
        </div>
    );
};

export default SpreadBoard;
