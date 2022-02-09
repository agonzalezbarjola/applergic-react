import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./FormThree.scss";

function FormThree({ props, props2 }) {
  const [allergens, setAllergens] = useState([]);
  const { register, handleSubmit } = useForm();

  const getAllergens = async () => {
    const res = await axios("http://localhost:8000/api/allergens/");

    setAllergens(res.data);
  };

  useEffect(() => {
    getAllergens();
  }, []);

  const onClickForm = (formData) => {
    props({
      ...props2,
      emergyContact: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
      },
    });
  };

  const allergensLetter = [];

  const getLetterAllergen = () => {
    allergens
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((allergen) => {
        if (!allergensLetter.includes(allergen.name.charAt(0))) {
          allergensLetter.push(allergen.name.charAt(0));
        }
      });
  };

  getLetterAllergen();
  console.log(allergensLetter);

  return (
    <div>
      <div>
        <h2>Ahora selecciona tus alergias e intolerancias.</h2>
        <p>
          Los elementos marcados seran identificados en tus busquedas como
          peligrosos para ti.
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit(onClickForm)}>
        {allergensLetter.map((letter) => {
          return <a href={`#`+letter}>{letter}</a>;
        })}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default FormThree;
