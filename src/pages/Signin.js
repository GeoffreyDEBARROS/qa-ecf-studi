import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Signin = () => {
  return (
    <div>
      <Navigation />
      <div className="signin-container">
        <h2>Créer un compte</h2>
        <form action="http://localhost:3001/users" method="POST">
          <label htmlFor="name">Prénom</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="guests">Nb moyen de convives</label>
          <input type="number" id="guests" name="default_guests" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Créer un compte</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
