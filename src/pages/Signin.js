import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Signin = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    default_guests: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password } = formData;
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    if (password.length < 8 || !hasNumber || !hasUpperCase) {
      setErrorMessage(
        "Le mot de passe doit contenir au moins 8 caractères, dont au moins un chiffre et une majuscule"
      );
    } else {
      setErrorMessage("Compté crée avec succes");
      // Soumettre les données du formulaire
      // en utilisant la méthode fetch ou axios
      fetch("http://localhost:3001/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Navigation />
      <div className="signin-container">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Prénom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="guests">Nb moyen de convives</label>
          <input
            type="number"
            id="guests"
            name="default_guests"
            value={formData.default_guests}
            onChange={handleChange}
          />
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Min 8 caractères, dont 1 chiffre et 1 majuscule"
            onChange={handleChange}
          />
          <span id="error">{errorMessage}</span>
          <button type="submit">Créer un compte</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Signin;
