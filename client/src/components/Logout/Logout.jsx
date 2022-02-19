import React, { useContext, useEffect } from "react";
import { JwtContext } from "../../shared/JwtContext/JwtContext";
import { useNavigate, Link, Navigate } from "react-router-dom";
function Logout() {
  const { Jwt, setJwt } = useContext(JwtContext);
  const navigate = useNavigate();
  Jwt && localStorage.removeItem("token");
  
  useEffect(()=>{
    setTimeout(() => {
      setJwt(false);
    console.log(Jwt);
    // localStorage.removeItem("code");
    // localStorage.removeItem("allergens");
    // localStorage.removeItem("userComplete");
    // localStorage.removeItem("email");
    // localStorage.removeItem("user");
    // localStorage.removeItem("id");
    localStorage.clear();
    !Jwt && navigate("/login");
    }, 1000);
    
  },[])
    
  

  return (
    <div className="isloading">
      <img
        src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644532203/loading_yhwlmu.gif"
        alt=""
      ></img>
    </div>
  );
}

export default Logout;
