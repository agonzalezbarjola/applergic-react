import React from 'react';

function Card({restaurant}) {
  return(
    <div >
      <img alt={restaurant.name} src={process.env.PUBLIC_URL + restaurant.imgPath} />
      <div>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.email}</p>
      </div>
    </div>
  );
}

export default Card;