import React from 'react';
import './FormFour.scss';

function FormFour() {
  return (

    <div className="c-formfour">

      <div className="c-formfour__title">
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644431764/ok_wpyxsr.png" alt="its ok" />
        <h4>Hemos termionado, ya puedes escanear tu primer producto.</h4>
      </div>

      <div className="c-formfour__btn">
        <button className="button" type="submit">Escanea un producto</button>
      </div>

    </div>
  )
}

export default FormFour;
