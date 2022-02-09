import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Confirmation.scss";
function Confirmation({ props, props2, props3 }) {
  const [allergens, setAllergens] = useState([]);
  console.log(props3);

  const goBack = () => {};

  const onClickForm = () => {
    const finalData = [];
    props3.map((item, index) => finalData.push(item[1]));
    props({
      ...props2,
      allergens: finalData,
    });

    axios
      .post("http://localhost:8000/api/users/register", {
        name: props2.name,
        email: props2.email,
        phone: props2.phone,
        password: props2.password,
        emergyContact: {
          name: props2.emergyContact.name,
          phone: props2.emergyContact.phone,
          email: props2.emergyContact.email,
          insurance: {
            company: props2.emergyContact.company,
          },
        },
        allergens: finalData,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAllergens = async () => {
    const res = await axios("http://localhost:8000/api/allergens", {
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${localStorage.getItem("token")}`;
          },
        },
      },
    });

    setAllergens(res.data);
  };
  useEffect(() => {
    getAllergens();
  }, []);
  return (
    <div>
      <h2>Confirma tu selección.</h2>
      <p>
        A continuacion te resumimos los alimentos registrados como peligrosos
        para ti
      </p>
      <p>Marca para deseleccionar o añadir uno nuevo</p>
      <div>
        {props3.map((item, index) => item[0])}
        <button onClick={goBack}>Añadir nuevos</button>
      </div>
      <button onClick={onClickForm}>Confirmar</button>
    </div>
  );
}

export default Confirmation;