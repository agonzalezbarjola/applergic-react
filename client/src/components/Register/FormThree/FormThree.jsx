import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./FormThree.scss";

function FormThree({ props, props2 }) {
  const [allergens, setAllergens] = useState([]);
  const { register, handleSubmit } = useForm();
  console.log(localStorage.getItem("token"));
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
        <div>
          {allergensLetter.map((letter) => {
            return (
              <div key={letter}>
                <a href={`#` + letter}>{letter}</a>
              </div>
            );
          })}
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit(onClickForm)}>
        {allergensLetter.map((letter) => {
          return (
            <div key={letter}>
              <p>{letter}</p>
              <div id={`#` + letter}>
                {allergens.map((allergen) =>
                  allergen.name.charAt(0) === letter ? (
                    <button onClick={(e) => e.preventDefault()}>
                      {allergen.name}
                    </button>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          );
        })}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default FormThree;
