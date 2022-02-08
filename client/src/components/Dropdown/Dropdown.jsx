import React from "react";
import "./Dropdown.scss";
import { NavLink } from "react-router-dom";
function Dropdown() {
  const dropMenu = () => {
    const drop$$ = document.querySelector(".navbar");
    drop$$.classList.toggle("dropmenu")
  }
  return (
    <nav className="navbar">
      <div className="navbar__close" onClick={dropMenu}>
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327667/close_3x_qcn0b4.png" alt=""></img>
      </div>
      <NavLink className="navbar__btn" to="/profile">
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/prof_3x_c84wmr.png" alt=""></img>
      </NavLink>
      <NavLink className="navbar__btn" to="/favorites">
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/fav3x_ucsvfq.png" alt=""></img>
      </NavLink>
      <NavLink className="navbar__btn" to="/diary">
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/diary_hqvgxp.png" alt=""></img>
      </NavLink>
      <NavLink className="navbar__btn" to={"/shared"}>
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/share3x_yabahk.png" alt=""></img>
      </NavLink>
      <NavLink className="navbar__btn" to={"/translate"}>
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/botNMen_3x_d5mpvo.png" alt=""></img>
      </NavLink>
      <NavLink className="navbar__btn" to={"/terms"}>
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/botN_3x_sxrhct.png" alt=""></img>
      </NavLink>
      <NavLink className="navbar__btn" to={"/logout"}>
        <img src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644327457/botNMenAzul_3x_papo9j.png" alt=""></img>
      </NavLink>
    </nav>
  );
}

export default Dropdown;
