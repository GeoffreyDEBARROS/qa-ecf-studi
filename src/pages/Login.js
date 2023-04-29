import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navigation />
      <div className="login-container">
        <h2>Connexion</h2>
        <form action="http://localhost:3001/login" method="POST">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Connexion</button>
        </form>
      </div>
      <div className="sign-in-container">
        <p>
          Pas encore de compte ? Cliqué{" "}
          <NavLink to="/créer-un-compte">ici</NavLink> pour en créé un.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
