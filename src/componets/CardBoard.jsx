import React, {useState} from 'react';
import './CardBoard.scss'
import { useSelector, useDispatch } from 'react-redux';

const CardBoard = ({ name, image, marginLeft, style,  }) => {

  const [showFront, setShowFront ] = useState(false)
  const currCard = useSelector((state) => state.currCard)
  // const modal = useSelector(state => state.modal)
  // console.log(currCard, 'place')

  // if (currCard.name !== '' && currCard.name === name) {
  //   image = currCard.image
  //   console.log(image)
  // }

  const onClick = () =>{
          setShowFront((v) => !v)
  }

  return (
    <>     
      <div className="card-board" onClick={onClick} style={{ marginLeft: marginLeft}}>
        <div className='card-content-board' >
          <img src={image} alt={name} id='image' className="card-image-front-board" style={style}/>
          
        </div>
      </div>
    </>
  );
};

export default CardBoard;


