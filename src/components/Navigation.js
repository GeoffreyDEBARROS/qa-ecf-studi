import React, { useState } from "react";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";

const Navigation = ({ handleImageMove }) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-btn">
        <img
          src="/img/burgerBtn.svg.png"
          alt="Bouton menu"
          height="30px"
          onClick={handleClick}
        />
      </div>
      <div className={`navigation ${isNavigationOpen ? "nav-display" : ""}`}>
        <ul>
          <NavLink to="/">
            <li>accueil</li>
          </NavLink>
          <NavLink to="/carte">
            <li>la carte</li>
          </NavLink>
          <NavLink to="/connexion">
            <li>se connecter</li>
          </NavLink>
          <NavLink to="/informations">
            <li>informations</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
