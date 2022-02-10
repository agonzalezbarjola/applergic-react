import React, { useContext, useState } from "react";
import './LoginPage.scss';
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
        localStorage.setItem("user", JSON.stringify(res.data.userDB.name));
        localStorage.setItem("id", JSON.stringify(res.data.userDB._id));
        localStorage.setItem("email", JSON.stringify(res.data.userDB.email));
        console.log(res.data);
        navigate("/home");
        setJwt(true);
      })
      .catch((err) => {
        setError("La contraseña o el email no es correcto, compruebalo!");
      });
  };

  return (
    <div className="loginPage">

      <div className="loginPage__header">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644312302/image-login_ym4hwl.png" alt="Foods" />
      </div>

      <div className="loginPage__title">
        <h3>¡Bienvenidos de nuevo!</h3>
        <p>Porfavor, introduce tus datos para continuar.</p>
      </div>

      <div className="loginPage__form">
        <form className="loginPage__form--inp" onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Dirección e.mail" {...register("email")} />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {error && <span>{error}</span>}
          <p>¿Olvidaste tu contraseña?</p>

          <button type="submit" className= "button">Entrar</button>
        </form>

        <div className="loginPage__info">
           <span>¿Nuevo en Applergic?</span>
          <Link to={"/register"}><h4>Crea tu cuenta aquí</h4></Link>
          <p>Me registraré en otro momento</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
