import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { JwtContext } from "../../shared/JwtContext/JwtContext";
import { useNavigate, Link } from "react-router-dom";
import { API } from "../../shared/service/api";
const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { setJwt } = useContext(JwtContext);
  const [error, setError] = useState("");
  //   const [token, setToken] = useState("");
  const onSubmit = (formData) => {
    console.log(formData);
    API.post("login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        console.log(res.data);
        navigate("/home");
        setJwt(true);
      })
      .catch((err) => {
        setError("La contraseña o el email no es correcto, compruebalo!");
      });
  };
  
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644312302/image-login_ym4hwl.png"
        alt=""
      ></img>
      <div>
        <h2>¡Bienvenidos de nuevo!</h2>
        <p>Porfavor, introduce tus datos para continuar.</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="email" {...register("email")} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
          />

          {error && <span>{error}</span>}
          <p>¿Olvidaste tu contraseña?</p>

          <button type="submit">enviar</button>
          <p>¿Nuevo en Applergic?</p>
          <Link to={"/register"}>Crea tu cuenta aquí</Link>
          <p>Me registraré en otro momento</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
