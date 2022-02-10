import React, { useState, useEffect } from "react";
import axios from "axios";
function ScannerResult({ props }) {
  const [user, setUser] = useState([]);
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

    setUser(res.data);
  };

  useEffect(() => {
    getUserById();
  }, []);
  console.log("producto:", props);
  console.log("usuario:", user);
  return (
    <div>
      <div>
        <button>volver</button>
        <button>x</button>
      </div>
      <div>
        <h1>
          Aqui tienes el resultado
        </h1>
        <p>{}</p>
        
      </div>
      {props.map((item) => (
        <div>
          {item.name}
          <img src={item.image} alt=""></img>
        </div>
      ))}
    </div>
  );
}

export default ScannerResult;
