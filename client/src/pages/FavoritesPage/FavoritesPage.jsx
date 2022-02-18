import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import Favorite from "../../components/Favorite/Favorite";

function FavoritesPage() {
  const [dataUser, setDataUser] = useState([]);
  const idUser = JSON.parse(localStorage.getItem("id"));

  const getUser = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/users/${idUser}`,
      {
        headers: {
          Authorization: {
            toString() {
              return `Bearer ${localStorage.getItem("token")}`;
            },
          },
        },
      }
    );
    setDataUser(res.data.userDB.fav)
    

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

  return <div>
  {dataUser.map(item=><div>
    <p>{item.name}</p>
    <p>{item.brand}</p>
    <img src={item.image} alt=""/>
  </div>)}
  <button>Volver</button>
  </div>;
}

export default FavoritesPage;
