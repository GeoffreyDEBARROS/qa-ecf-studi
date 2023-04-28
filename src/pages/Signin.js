import React from "react";
import Navigation from "../components/Navigation";

const Signin = () => {
  return (
    <div>
      <Navigation />
      <div className="signin-container">
        <h2>Créer un compte</h2>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" />
          <button type="submit">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
