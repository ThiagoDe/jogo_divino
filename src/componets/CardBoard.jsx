import React, {useState} from 'react';
import './CardBoard.scss'
import { useSelector, useDispatch } from 'react-redux';
import cardInfoArray from '../cardsRef';
import { updateCurrCard } from '../features/currCard/currCardSlice';
import { updateModal } from '../features/modal/modalSlice';

const CardBoard = ({ name, image, marginLeft, style, id}) => {

  // const currCard = useSelector((state) => state.currCard)
  const dispatch = useDispatch()

  const onClick = (e) =>{
      // get the full card's info 
    const card = cardInfoArray.filter(c => c.name === e.target.alt)[0]
      
    // check if it has substring placeholders
    if (!e.target.src.includes("placehoders")) {
      // update curr card
      dispatch(updateCurrCard(card))
        // trigger modal
      dispatch(updateModal())
    }
  }
  return (
    <>     
      <li key={id} className="card-board" onClick={onClick} style={{ marginLeft: marginLeft}}>
        <div className='card-content-board' >
          <img src={process.env.PUBLIC_URL + image} alt={name} id='image' className="card-image-front-board" style={style}/>
          
        </div>
      </li>
    </>
  );
};

export default CardBoard;


