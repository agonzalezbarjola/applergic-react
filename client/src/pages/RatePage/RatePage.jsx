import { React, useState } from "react";
import "./Rated.scss";
import { Rating } from "react-simple-star-rating";

export default function MyComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="c-rated">
      <div className="c-rated__hero">
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644261304/logoApplergic_laexqz.png" alt=""/>
        <h3>¡Gracias por usar Applergic!</h3>

        <Rating onClick={handleRating} ratingValue={rating} />
        <h3>Por favor evalúa tu experiencia.</h3>
      </div>

      <p>Enviar sugerencias</p>
    </div>
  );
}
