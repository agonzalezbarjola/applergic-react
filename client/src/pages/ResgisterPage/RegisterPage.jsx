import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormOne from "../../components/Register/FormOne";
import FormTwo from "../../components/Register/FormTwo";
import FormThree from "../../components/Register/FormThree";
import FormFour from "../../components/Register/FormFour";
function RegisterPage() {
  const [register, setRegister] = useState("jean");
  const [pagination, setPagination] = useState(1);
 
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
      {pagination === 1 && <FormOne prop1={register} prop2={{setRegister}}/>}
      {pagination === 2 && <FormTwo />}
      {pagination === 3 && <FormThree />}
      {pagination === 4 && <FormFour />}
      
    </div>
  );
}

export default RegisterPage;
