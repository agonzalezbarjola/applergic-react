import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Confirmation from "./Confirmation/Confirmation";
import "./FormThree.scss";

function FormThree({ props, props2 }) {
  const [allergens, setAllergens] = useState([]);
  const [allergens2, setAllergens2] = useState([]);

  const { register, handleSubmit } = useForm();
  //console.log(localStorage.getItem("token"));
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

  // const onClickForm = (formData) => {
  //   props({
  //     ...props2,
  //     allergens: formData.allergens,
  //   });
  // };

  const allergensLetter = [];

  const getLetterAllergen = () => {
    allergens
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((allergen) => {
        if (!allergensLetter.includes(allergen.name.charAt(0))) {
          return allergensLetter.push(allergen.name.charAt(0));
        }
      });
  };

  getLetterAllergen();

  const setAllergyConfirm = (formData) => {
    console.log(formData);
    setAllergens2(formData.allergens);
  };

  return (
    <div>
      <Confirmation props={props} props2={props2} props3={allergens2} />
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

      <form className="form" onSubmit={handleSubmit(setAllergyConfirm)}>
        {allergensLetter.map((letter) => {
          return (
            <div key={letter}>
              <p>{letter}</p>
              <div id={`#` + letter}>
                {allergens.map((allergen) =>
                  allergen.name.charAt(0) === letter ? (
                    <>
                      <label>{allergen.name}</label>
                      <input
                        type="checkbox"
                        key={allergen._id}
                        value={allergen.name}
                        {...register("allergens")}
                      ></input>
                      {/* <input
                        type="hidden"
                        key={allergen._id}
                        value={allergen.name}
                        {...register("name")}
                      ></input> */}
                    </>
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
