import React, { useEffect, useState } from "react";
import axios from "axios";

function DiaryList() {
  const diaryListArray = localStorage.getItem("code").split(",");
  //   console.log(diaryListArray);
  const diaryFinal = [];
  const [product, setProduct] = useState();
  diaryListArray.forEach((item) => {
    //pushes only unique element
    if (!diaryFinal.includes(item)) {
      diaryFinal.push(item);
    }
  });
  const diaryList = diaryFinal.filter((item) => item !== "");
  console.log(diaryList);
  const promises = [];
  const user = [];
  useEffect(() => {
    for (const code of diaryList) {
      promises.push(
        axios
          .get(`http://localhost:8000/api/products/${code}`, {
            headers: {
              Authorization: {
                toString() {
                  return `Bearer ${localStorage.getItem("token")}`;
                },
              },
            },
          })
          .then((res) => {
            //   console.log(res.data);
            res.data.length && setProduct(res.data);
            user.push(res.data[0]);
            // setProduct(...product, res.data);
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
    Promise.all(promises).then(() => console.log(user));
  }, []);
  console.log(user);
//   console.log(product);
  return <div><p>{}</p></div>;
}

export default DiaryList;
