import React from 'react';


const Card = ({ name, image, number, style }) => {

  return (
    <>
    <div className="card">
      <img src={image} alt={name} className="card-image" style={style}/>
    </div>
    </>
  );
};

export default Card;


