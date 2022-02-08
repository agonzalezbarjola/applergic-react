import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";
function HomePage() {
  const dropMenu = () => {
    const drop$$ = document.querySelector(".navbar");
    drop$$.classList.toggle("dropmenu")
  }

  return (
    <div>
      <div>
      <Dropdown />
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644328277/CBFCD905-C712-401A-8FF1-7B5C8274A64A_bfmfk3.png"
          alt="dropdown" onClick={dropMenu}
        ></img>
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/gris_3x_va6ggw.png"
          alt="info"
        ></img>
      </div>
      <img
        src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/logoApplergicFinal_3x_aod5sh.png"
        alt="Logo"
      ></img>
      <div className="main">
        <div className="main__btn">
          <button>
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/barcode2_3x_kjy5xg.png"
              alt="barcode"
            ></img>
            Escaner
          </button>
          <p>Escane un nuevo producto.</p>
        </div>

        <div className="main__btn">
          <button>
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/buscar_3x_ajq3ej.png"
              alt="search"
            ></img>
            Buscar
          </button>
          <p>Busca un comercio o un restaurante para ti.</p>
        </div>
        <div className="main__btn">
          <button>
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/sos1_3x_e9lomw.png"
              alt="sos"
            ></img>
            S.O.S.
          </button>
          <p>¿Necesitas ayuda urgente? contactamos con emergencias</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default HomePage;
