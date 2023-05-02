import React, { useState, useContext } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      setName(response.data.name);
      setToken(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="login-container">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Connexion</button>

          {name && <p>Bonjour, {name}!</p>}
          {token && <p>Votre token est: {token}</p>}
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
