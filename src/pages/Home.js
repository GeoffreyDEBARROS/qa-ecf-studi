import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Galerie from "../components/Galerie";

const Home = () => {
  const [isImgVisible, setIsImgVisible] = useState(false);
  const [isReserveRed, setIsReserveRed] = useState(false);
  const handleImageMove = () => {
    setIsImgVisible(!isImgVisible);
    setIsReserveRed(!isReserveRed);
  };

  return (
    <div>
      <Navigation handleImageMove={handleImageMove} />
      <div className="home">
        <h1>LE QUAI ANTIQUE</h1>

        <img
          src={require("../assets/img/home.png")}
          alt="Un plat"
          height="580px"
          className={`img-visible ${isImgVisible ? "img-hidden" : ""}`}
        />

        <div className="btn-container">
          <button className={isReserveRed ? "nav-reserve-btn" : "reserv-btn"}>
            RESERVER
          </button>
        </div>
      </div>
      <Galerie />
    </div>
  );
};

export default Home;
