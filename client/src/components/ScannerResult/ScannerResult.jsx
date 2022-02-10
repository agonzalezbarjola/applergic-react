import React, { useState, useEffect } from "react";
import axios from "axios";
function ScannerResult({ props }) {
  const product = props[0];
  const [user, setUser] = useState([]);
  const [check, setCheck] = useState([]);

  const getUserById = async () => {
    const idStorage = JSON.parse(localStorage.getItem("id"));
    const res = await axios(`http://localhost:8000/api/users/${idStorage}`, {
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${localStorage.getItem("token")}`;
          },
        },
      },
    });
    const haveAllergy = [];
    for (const item of res.data.userDB.allergens) {
      product.allergens.includes(item) && haveAllergy.push(item);
    }

    setCheck(haveAllergy);
    setUser(res.data);
  };

  useEffect(() => {
    getUserById();
  }, []);
  console.log("producto:", props);
  console.log("usuario:", user);
  console.log("check:", check);
  return (
    <div>
      <div>
        <button>volver</button>
        <button>x</button>
      </div>
      <div>
        <h1>Aqui tienes el resultado</h1>
      </div>
      <div>
        {check.length ? <p>hay alergia</p> : !check.length ? <p>Es apto para ti</p> : <p>3</p>}

        <div>
          <div>
            <img src="" alt=""></img>
            <img src={product.image} alt=""></img>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/favorito_3x_uuzvff.png"
              alt=""
            ></img>
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/diario_3x_nsw6xi.png"
              alt=""
            ></img>
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/red_3x_ivwedb.png"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <h3>{product.name}</h3>
          <h4>{product.brand}</h4>
          <p>
            <strong>Ingredientes:</strong> {product.ingredients}
          </p>
        </div>
        <button>Escanea otro producto</button>
      </div>
    </div>
  );
}

export default ScannerResult;
