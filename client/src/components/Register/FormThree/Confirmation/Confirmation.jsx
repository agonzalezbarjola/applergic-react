import React, { useEffect } from "react";
import axios from "axios";
import "./Confirmation.scss";
function Confirmation({ props, props2, props3 }) {
  const goBack = () => {};

  const onClickForm = () => {
    props({
      ...props2,
      allergens: props3,
    });
    axios
      .post("http://localhost:8000/api/users/register", {
        name: props2.name,
        email: props2.email,
        phone: props2.phone,
        password: props2.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // console.log(props3);
  return (
    <div>
      <h2>Confirma tu selección.</h2>
      <p>
        A continuacion te resumimos los alimentos registrados como peligrosos
        para ti
      </p>
      <p>Marca para deseleccionar o añadir uno nuevo</p>
      <div>
        {props3.map((allergen) => {
          return <div>{allergen}</div>;
        })}
        <button onClick={goBack}>Añadir nuevos</button>
      </div>
      <button onClick={onClickForm}>Confirmar</button>
    </div>
  );
}

export default Confirmation;
