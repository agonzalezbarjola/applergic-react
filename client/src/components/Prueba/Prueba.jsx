import React, { useState, useEffect } from "react";
import axios from "axios";
import ScannerResult from "../ScannerResult/ScannerResult";

function Prueba({ props }) {
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState();
  const [isFetched, setIsFetched] = useState(false);
  const [isFetched2, setIsFetched2] = useState(false);
  const data = props;
  const haveAllergy = [];

  console.log(haveAllergy);

  const getProduct = async () => {
    const res = await axios(`http://localhost:8000/api/products/${data}`, {
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${localStorage.getItem("token")}`;
          },
        },
      },
    });
    if (res.data.length === 0) {
      setProduct("");
    } else {
      setProduct(res.data);
    }

    setIsFetched2(true);
  };

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

    setUser(res.data.userDB);
    setIsFetched(true);
  };

  useEffect(() => {
    getUserById();
    getProduct();
  }, []);

  return (
    <>
      {isFetched && isFetched2 && (
        <ScannerResult props={user} props2={product} props3={isFetched} />
      )}
      <h1>Espera un poco</h1>
    </>
  );
}

export default Prueba;
