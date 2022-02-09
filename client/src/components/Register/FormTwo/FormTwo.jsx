import React from "react";
import { useForm } from "react-hook-form";
import "./FormTwo.scss";
function FormTwo({ props, props2 }) {
  const { register, handleSubmit } = useForm();

  const onClickForm = (formData) => {
    props({
      ...props2,
      emergyContact: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company
      },
    });
  };

  return (
    <div>
      <div>
        <h2>Vamos a añadir tu contacto en caso de emergencia</h2>
        <p>
          Nos pondremos en contacto con tu persona de confianza y/o compañia de
          seguros en caso de emergencia.
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit(onClickForm)}>
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
          type="text"
          placeholder="Compañia de seguros / Nº Poliza"
          {...register("company")}
        />
        <button type="submit">Guardar perfil</button>
      </form>
    </div>
  );
}

export default FormTwo;
