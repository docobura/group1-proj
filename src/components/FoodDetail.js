import React, { useState } from 'react';

const FoodDetail = ({ description }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <button onClick={toggleDetail}>
        {showDetail ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetail && <p>{description}</p>}
    </div>
  );
};

export default FoodDetail;
