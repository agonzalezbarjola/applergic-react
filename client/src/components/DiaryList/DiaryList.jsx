import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
function DiaryList() {
  const diaryListArray = localStorage.getItem("code").split(",");
  //   console.log(diaryListArray);
  const diaryFinal = [];
  const [product, setProduct] = useState([]);
  const [verify, setVerify] = useState([]);
  diaryListArray.forEach((item) => {
    //pushes only unique element
    if (!diaryFinal.includes(item)) {
      diaryFinal.push(item);
    }
  });
  const diaryList = diaryFinal.filter((item) => item !== "");
  // console.log(diaryList);

  const allergensStorage = JSON.parse(localStorage.getItem("allergens"));
  // console.log(allergensStorage);

  const getProducts = async () => {
    const res = await axios.get(`http://localhost:8000/api/products/`, {
      params: { codes: diaryList },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
      headers: {
        Authorization: {
          toString() {
            return `Bearer ${localStorage.getItem("token")}`;
          },
        },
      },
    });
    setProduct(res.data.res);

    // .then((res) => {
    //   console.log(res);
    //   setProduct(res.data.res)
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  useEffect(() => {
    getProducts();
    console.log(product);
  }, []);
  return (
    <div>
      <div>
        <img src="" alt="calanedar icon" />
        <img src="" alt="filter " />
        <img src="" alt="close" />
      </div>
      <div>
        <h3></h3>
        <p></p>
      </div>
      {product.map(
        (item) =>
          item.allergens.length === 0 && (
            <div key={item._id}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p> </p>
                <p>{item.name} sin datos de alergia</p>
                <p>Nota: </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
                  alt="icon close"
                />
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644753878/editicon_reuedr.png"
                  alt="icon Edit"
                />
              </div>
            </div>
          )
      )}
      {product.map((item) =>
        item.allergens.map((item2) =>
          allergensStorage.includes(item2) ? (
            <div key={item._id}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p> </p>
                <p>{item.name} con alergia</p>
                <p>Nota: </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
                  alt="icon close"
                />
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644753878/editicon_reuedr.png"
                  alt="icon Edit"
                />
              </div>
            </div>
          ) : (
            <div key={item._id}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <div>
                <p> </p>
                <p>{item.name} sin alergia</p>
                <p>Nota: </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png"
                  alt="icon close"
                />
                <img
                  src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644753878/editicon_reuedr.png"
                  alt="icon Edit"
                />
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default DiaryList;
