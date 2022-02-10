import React, { useState, useEffect } from "react";

function ScannerResult({ props, props2 }) {
  let coincidence;
  let text;
  console.log(props2);
  if (props2.length) {
    const productArray = props2[0].allergens;

    const userArray = props.allergens;
    const allArray = [];

    const verify = () => {
      for (const item of productArray) {
        if (!allArray.includes(item)) {
          allArray.push(item);
        }
      }
      for (const item of userArray) {
        if (!allArray.includes(item)) {
          allArray.push(item);
        }
      }
    };
    verify();
    coincidence =
      allArray.length !== productArray.length + userArray.length ? true : false;

    console.log(allArray, coincidence);
  } else {
    text = "No hay datos para mostrar";
  }
  console.log(text);
  console.log(props);
  console.log(props2);

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
        {coincidence ? (
          <p>hay alergia</p>
        ) : text ? (
          <p>No hay datos para mostrar</p>
        ) : (
          <p>Es apto para ti</p>
        )}

        <div>
          <div>
            {/* <img {coincidence ? ( src="url rojo" ) : text ? ( src="url amarilla") : (src="verde")}/>  */}

            {coincidence ? (
          <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644522246/border-rojo_prrt2l.png"/>
        ) : text ? (
          <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644522246/border-amarillo_lctbno.png"/>
        ) : (
          <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644522246/border-verde_lruwuu.png"/>
        )}



            {props2 && <img className="Absolute" src={props2[0].image} alt=""></img>}
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
        {props2 && <h3>{props2[0].name}</h3>}
        {props2 && <h4>{props2[0].brand}</h4>}
        {props2 && 
          <p>
            <strong>Ingredientes:</strong> {props2[0].ingredients}
          </p>}
        </div>
        <button>Escanea otro producto</button>
      </div>
    </div>
  );
}

export default ScannerResult;
