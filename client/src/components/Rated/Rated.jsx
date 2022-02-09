import React from 'react';
import './Rated.scss';
import ReactStars from "react-rating-stars-component";


const Rated = () => {

  const secondExample = {
    size: 50,
    count: 10,
    color: "black",
    activeColor: "red",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
      console.log(`Example 2: new value is ${newValue}`);
    }
  };


    




  return (
      <div className="c-rated">

          <div className="c-rated__hero">
          <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644261304/logoApplergic_laexqz.png" />
          <h3>¡Gracias por usar Applergic!</h3>
          <ReactStars {...secondExample} />

          <h3>Por favor evalua tu experiencia.</h3>

          </div>

          <p>Enviar sugerencias</p>

          

      </div>
  )
};

export default Rated;
