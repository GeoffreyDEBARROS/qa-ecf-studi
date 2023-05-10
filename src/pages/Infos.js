import React from "react";
import Navigation from "../components/Navigation";

const Infos = () => {
  return (
    <div>
      <Navigation />
      <h2>Informations</h2>
      <div className="infos-container">
        <p>
          Le quai antique est un restaurant situé à Chambéry, spécialisé dans la
          cuisine à base de poulet.<br></br> Le Chef Arnaud Michant aime
          passionnément les produits et producteurs de la Bresse, c’est pourquoi
          il s’y fourni en volaille de grandes qualités.<br></br> Au quai
          antique, vous dégusterez des recettes classiques revisité avec gout et
          originalité pour des repas inoubliables.
        </p>
        <div className="contact-container">
          <h3>Contact</h3>
          <p>Tèl : 04 05 10 11 12</p>
          <p>Email : quai-antique@antique.com</p>
          <ul>
            <li onClick={() => window.open("https://www.facebook.com")}>
              <img
                src={require("../assets/img/fb.svg.png")}
                alt="logo facebook"
                height="35px"
              />
            </li>
            <li onClick={() => window.open("https://www.instagram.com")}>
              <img
                src={require("../assets/img/insta.png")}
                alt="logo facebook"
                height="35px"
              />
            </li>
            <li onClick={() => window.open("https://www.tripadvisor.com")}>
              <img
                src={require("../assets/img/trip.png")}
                alt="logo facebook"
                height="37px"
              />
            </li>
          </ul>
        </div>
        <img
          id="chicken"
          src={require("../assets/img/chicken.png")}
          alt="Un plat"
          height="500px"
          width="800px"
        />
      </div>
    </div>
  );
};

export default Infos;
