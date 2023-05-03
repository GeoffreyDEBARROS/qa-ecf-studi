import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const handleClick = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const userName = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleUserButtonClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/mon-compte");
    } else {
      navigate("/créer-un-compte");
    }
  };

  return (
    <div className="nav-container">
      <div id="userCo">
        <button onClick={handleUserButtonClick}>
          <img src="./img/user.svg" alt="Icone compte" height="20px" />
        </button>

        {userName}
      </div>
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
