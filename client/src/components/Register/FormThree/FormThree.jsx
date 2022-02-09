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

  const setAllergyConfirm = (data) => {
    const arraySplit = data.allergens.map((item) => item.split("-"));
    console.log(arraySplit);
    const arrayToSet = arraySplit.map((item, index) =>
      item.map((item2) => item2)
    );
    console.log(arrayToSet);
    setAllergens2(arrayToSet);
  };

  console.log(allergens2);

  return (
    <div className="c-formthree">
      <Confirmation props={props} props2={props2} props3={allergens2} />

      <div className="c-formthree__title">
        <h2>Ahora selecciona tus alergias e intolerancias.</h2>
        <p>
          Los elementos marcados seran identificados en tus busquedas como
          peligrosos para ti.
        </p>
      </div>

      <div className="c-formthree__abc">
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

      <div className="c-formthree__abc">
        <form className="form" onSubmit={handleSubmit(setAllergyConfirm)}>
          {allergensLetter.map((letter) => {
            return (
              <div>
                {/* <p>{letter}</p> */}
                <div id={`#` + letter}>
                  {allergens.map((allergen) =>
                    allergen.name.charAt(0) === letter ? (
                      <>
                        <label key={allergen._id}>{allergen.name}</label>
                        <input
                          type="checkbox"
                          value={allergen.name + "-" + allergen._id}
                          name={allergen.name}
                          {...register("allergens")}
                        ></input>
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
    </div>
  );
}

export default FormThree;
