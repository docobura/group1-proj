import React from 'react';

const CardDetail = ({ foodItem }) => {
  const { name, price, image } = foodItem;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: ${price}</p>
        {/* Add any additional information you want to display */}
      </div>
    </div>
  );
};

export default CardDetail;
