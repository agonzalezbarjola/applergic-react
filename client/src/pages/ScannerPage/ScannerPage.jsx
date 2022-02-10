import React, { useEffect, useState } from "react";
import "./ScannerPage.scss";
import axios from "axios";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import ScannerResult from "../../components/ScannerResult/ScannerResult";
function ScannerPage() {
  const [data, setData] = React.useState("Not Found");
  const [product, setProduct] = React.useState([]);
  const [text, setText] = React.useState("codigo de barras");
  console.log(data);
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

    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, [data]);
  console.log(product);
  return (
    <>
      {!product.length ? (
        <div className="c-scannerPage">
          <div className="c-scannerPage__title">
            <div className="navbar__close">
              <img
                src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
                alt="exit"
              />
            </div>
            <div className="c-scannerPage__title--text">
              <h1>Escaneando...</h1>
              <p>
                Tan solo tienes que centrar el <span>{text}</span> el producto
                requerido.
              </p>
            </div>
          </div>

          <div className="c-scannerPage__scanner">
            <div className="c-scannerPage__scanner--cam">
              <BarcodeScannerComponent
                width={300}
                height={200}
                onUpdate={(err, result) => {
                  if (result) setData(result.text);

                  // else setData("Not Found");
                }}
              />
            </div>
            <div className="c-scannerPage__scanner--btn">
              <div className="c-scannerPage__scanner--btn--item">
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/barcode2_3x_kjy5xg.png"
                  alt=""
                ></img>
                <p>Codigo de barras</p>
              </div>
              <div className="c-scannerPage__scanner--btn--item">
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644489577/qr_3x_rnjgxu.png"
                  alt=""
                ></img>
                <p>Codigo QR</p>
              </div>
              <div className="c-scannerPage__scanner--btn--item">
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644489507/nfc_yn7rro.png"
                  alt=""
                ></img>
                <p>NFC</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ScannerResult props={product}/>
      )}
    </>
  );
}

export default ScannerPage;
