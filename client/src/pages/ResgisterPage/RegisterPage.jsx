import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormOne from "../../components/Register/FormOne/FormOne";
import FormTwo from "../../components/Register/FormTwo/FormTwo";
import FormThree from "../../components/Register/FormThree/FormThree";
import FormFour from "../../components/Register/FormFour/FormFour";
function RegisterPage() {
  const [register, setRegister] = useState([]);
   const [pagination, setPagination] = useState(1);

  //funcion a ejecutar en el hijo
  const addData = (data) => {
    //const newRegister = ({...register, data});
    setRegister(data);
    setPagination(pagination + 1);
  };
  

  console.log("reg1", register);
  
  console.log(pagination);
  return (
    <div>
      <div>
        <Link to={"/login"}>
          {" "}
          <img
            src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644332335/volver_3x_nszfrh.png"
            alt="back"
          ></img>{" "}
          volver
        </Link>
        <p>{pagination} de 4</p>
      </div>
      {pagination === 1 && <FormOne props={addData} props2={register} />}
      {pagination === 2 && <FormTwo props={addData} props2={register} />}
      {pagination === 3 && <FormThree />}
      {pagination === 4 && <FormFour />}
    </div>
  );
}

export default RegisterPage;
