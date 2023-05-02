import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const handleClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const userName = localStorage.getItem("name");

  return (
    <div className="nav-container">
      <span>{userName}</span>
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
