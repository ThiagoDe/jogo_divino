import React, {useState} from 'react';
import './CardBoard.scss'


const CardBoard = ({ name, image, marginLeft, style, placeHolder }) => {
  const [showFront, setShowFront ] = useState(false)

  const onClick = () =>{
          setShowFront((v) => !v)
  }

  return (
    <>     
      <div className="card-board" onClick={onClick} style={{ marginLeft: marginLeft}}>
        <div className='card-content-board'>
          <img src={image} alt={name} className="card-image-front-board" style={style}/>
          { !placeHolder &&
            <img src={'/sun-moon2.png'} alt={name} className="card-image-back-board" style={style}/>
          }
        </div>
      </div>
    </>
  );
};

export default CardBoard;


