import React, {useEffect, useState} from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import Footer from "../../components/Footer/Footer";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading((loading) => !loading);
    };
    loadData();
  }, []);

 
  
  const dropMenu = () => {
    const drop$$ = document.querySelector(".navbar");
    drop$$.classList.toggle("dropmenu");
  };

  if (loading) {
    return (
      <div>
        {" "}
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644532203/loading_yhwlmu.gif"
          alt=""
        ></img>
      </div>
    );
  }

  return (
    <div className="homepage">
      <div className="homepage__header">
        <Dropdown />
        <img
          className="homepage__header--burger"
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644328277/CBFCD905-C712-401A-8FF1-7B5C8274A64A_bfmfk3.png"
          alt="burgerMenu"
          onClick={dropMenu}
        />
        <img
          className="homepage__header--info"
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/gris_3x_va6ggw.png"
          alt="info"
        />
      </div>

      <div className="homepage__logo">
        <img
          src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/logoApplergicFinal_3x_aod5sh.png"
          alt="Logo"
        />
      </div>

      <div className="homepage__main">
        <div className="homepage__main--btn">
          <Link to="/scanner">
            <button className="homepage__main--btn-scan">
              <img
                src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326248/barcode2_3x_kjy5xg.png"
                alt="barcode"
              />
              Escanear
            </button>
          </Link>

          <p>Escane un nuevo producto.</p>
        </div>

        <div className="homepage__main--btn">
          <button className="homepage__main--btn-serch">
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/buscar_3x_ajq3ej.png"
              alt="search"
            />
            Buscar
          </button>
          <p>Busca un comercio o un restaurante para ti.</p>
        </div>
        <div className="homepage__main--btn">
          <button className="homepage__main--btn-sos">
            <img
              src="https://res.cloudinary.com/dkv0drgbb/image/upload/v1644326247/sos1_3x_e9lomw.png"
              alt="sos"
            />
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
