import React, {useState} from 'react';
import './Card.scss'
import { CSSTransition } from 'react-transition-group';


const Card = ({ name, image, marginLeft, style, placeHolder }) => {
  const [showFront, setShowFront ] = useState(false)

  const onClick = () =>{
          setShowFront((v) => !v)
  }


  return (
    <>
     <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
      
      {/* <div className='in-card'> */}
      <div className="card" onClick={onClick} style={{ marginLeft: marginLeft}}>
          <img src={image} alt={name} className="card-image-front" style={style}/>
          { !placeHolder &&
            <img src={'/sun-moon2.png'} alt={name} className="card-image-back" style={style}/>
          }
        </div>
      {/* </div> */}
   </CSSTransition>
    </>
  );
};

export default Card;


