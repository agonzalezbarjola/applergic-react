import React, { useEffect, useContext } from "react";
import "./FormFour.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../../shared/service/api";
import { JwtContext } from "../../../shared/JwtContext/JwtContext";
function FormFour({ props }) {
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  console.log(props);

  const login = () => {
    API
      .post("login", {
        email: props.email,
        password: props.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.userDB.name));
        localStorage.setItem("id", JSON.stringify(res.data.userDB._id));
        localStorage.setItem("email", JSON.stringify(res.data.userDB.email));
        console.log(res.data);
        navigate("/scanner");
        setJwt(true);
      })
      .catch((err) => {
        navigate("/login");
      });
    console.log("chao");
  };

  return (
    <div className="c-formfour">
      <div className="c-formfour__title">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644431764/ok_wpyxsr.png"
          alt="its ok"
        />
        <h4>Hemos termionado, ya puedes escanear tu primer producto.</h4>
      </div>

      <div className="c-formfour__btn">
        <button className="button" type="submit" onClick={login}>
          Escanea un producto
        </button>
      </div>
    </div>
  );
}

export default FormFour;
