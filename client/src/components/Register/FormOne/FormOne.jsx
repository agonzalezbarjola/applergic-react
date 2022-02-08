import React from "react";
import { useForm } from "react-hook-form";
import "./FormOne.scss";
function FormOne( {props, props2} ) {
  const { register, handleSubmit } = useForm();
  console.log(props, props2);
  const onClickForm = (formData) => {
    //console.log(formData);

    props({...props2,name: formData.name, email: formData.email, phone: formData.phone, password: formData.password});
  };

  return (
    <div>
      <div>
        <h2>Dinos quien eres.</h2>
      </div>

      <form className="form" onSubmit={handleSubmit(onClickForm)}>
        <div className="form__circle">
          <label htmlFor="upload-photo">
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644339967/D67E0CB8-AB0E-4A07-89FB-8FFEA5597A92_rxmbuy.png"
              alt=""
            ></img>
            subir foto
          </label>
          <input type="file" name="photo" id="upload-photo" />
        </div>
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
        <button type="submit">Guardar perfil</button>
      </form>
    </div>
  );
}

export default FormOne;
