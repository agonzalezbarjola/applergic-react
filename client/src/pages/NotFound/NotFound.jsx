import React, { useState } from "react";
import { Link } from "react-router-dom";


function NotFound() {
  const [Jwt, setJwt] = useState(localStorage.getItem("token") || null);

  return (
    <div>
      <h1>404 - Not Found!</h1>
      {Jwt ? (
        <Link to="/home">Go Home</Link>
      ) : (
        <Link to="/login">Please login first!</Link>
      )}
    </div>
  );
}

export default NotFound;
