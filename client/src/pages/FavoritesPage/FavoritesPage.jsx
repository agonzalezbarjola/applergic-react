import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link }  from 'react-router-dom'
import "./FavoritePage.scss";
import qs from "qs";
import Favorite from "../../components/Favorite/Favorite";

function FavoritesPage() {
  const [dataUser, setDataUser] = useState([]);
  const idUser = JSON.parse(localStorage.getItem("id"));

  const getUser = async () => {
    const res = await axios.get(`http://localhost:8000/api/users/${idUser}`, {
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${localStorage.getItem("token")}`;
          },
        },
      },
    });
    setDataUser(res.data.userDB.fav);

    // .then((res) => {
    //   console.log(res);
    //   setProduct(res.data.res)
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(dataUser);

  return (
    <div className="c-Favoritepage">
      <h3>Aquí tienes una lista de tus productos favoritos.</h3>
      {dataUser.map((item) => (
        <div className="c-Favoritepage__products">
          <div className="c-Favoritepage__products--img">
            <img src={item.image} alt="" />
          </div>
          <div className="c-Favoritepage__products--info">
            <p>{item.name}</p>
            <p>{item.brand}</p>
          </div>
        </div>
      ))}
      <Link to='/home' className="c-Favoritepage__btn">
        <button className="button">Volver</button>
      </Link>
    </div>
  );
}

export default FavoritesPage;
