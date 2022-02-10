import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormOne.scss";
function FormOne({ props, props2 }) {
  const { register, handleSubmit } = useForm();
  const [img, setImg] = useState([]);

  const onClickForm = (formData) => {
    if (!formData.image.length) {
      formData.image = "";
    }
    props({
      ...props2,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      image: formData.image,
    });
  };

 

  return (
    <div className="c-formone">
      <div className="c-formone__title">
        <h3>Dinos quien eres.</h3>
      </div>

      <form className="c-formone__form" onSubmit={handleSubmit(onClickForm)}>
        <div className="c-formone__form--circle">
          <label htmlFor="upload-photo">
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644339967/D67E0CB8-AB0E-4A07-89FB-8FFEA5597A92_rxmbuy.png"
              alt=""
            />
            <p>subir foto</p>
          </label>
          <input
            type="file"
            alt=""
            name="photo"
            id="upload-photo"
            
            {...register("image")}
          />
        </div>

        <div className="c-formone__form--info">
          <input
            type="text"
            placeholder="Nombre completo"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Dirección e.mail"
            {...register("email")}
          />
          <input type="number" placeholder="Móvil" {...register("phone")} />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <button className="button" type="submit">
          Guardar perfil
        </button>
      </form>
    </div>
  );
}

export default FormOne;
