import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const [Jwt, setJwt] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(Jwt);
    setTimeout(() => {
      Jwt && navigate("/home");
      !Jwt && navigate("/login")
    }, 1000);
  }, []);

  return (
    <div className="isloading">
      <img
        src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644532203/loading_yhwlmu.gif"
        alt=""
      ></img>
    </div>
  );
}

export default NotFound;
