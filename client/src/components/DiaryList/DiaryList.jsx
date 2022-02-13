import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
function DiaryList() {
  const diaryListArray = localStorage.getItem("code").split(",");
  //   console.log(diaryListArray);
  const diaryFinal = [];
  const [product, setProduct] = useState([]);
  diaryListArray.forEach((item) => {
    //pushes only unique element
    if (!diaryFinal.includes(item)) {
      diaryFinal.push(item);
    }
  });
  const diaryList = diaryFinal.filter((item) => item !== "");
  console.log(diaryList);
 

  const getProducts = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/products/`, {
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
      })
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
  }, []);

  
     console.log(product);
  return (
    <div>
      <p>{product.map((item)=>item.name)}</p>
    </div>
  );
}

export default DiaryList;
