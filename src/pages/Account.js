import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const userId = localStorage.getItem("id");
  const [userCo, setUserCo] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((res) => setUserCo(res.data.client));
  }, []);

  // Fonctions pour modifier le nom du client //
  const handleNameChange = (event) => {
    setUserCo({
      ...userCo,
      name: event.target.value,
    });
  };
  const updateName = () => {
    axios
      .put(`http://localhost:3001/users/${userId}/name`, { name: userCo.name })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  //

  // Fonctions pour modifier le mail du client //
  const handleEmailChange = (event) => {
    setUserCo({
      ...userCo,
      email: event.target.value,
    });
  };
  const updateEmail = () => {
    axios
      .put(`http://localhost:3001/users/${userId}/email`, {
        email: userCo.email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  //

  // Fonctions pour modifier le nombre de convives par défaut du client //
  const handleDefault_guestsChange = (event) => {
    setUserCo({
      ...userCo,
      default_guests: event.target.value,
    });
  };
  const updateDefault_guests = () => {
    axios
      .put(`http://localhost:3001/users/${userId}/default_guests`, {
        default_guests: userCo.default_guests,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  //

  // Fonction pour modifier le mot de passe de convives par défaut du client //
  const updatePassword = () => {
    axios
      .put(`http://localhost:3001/users/${userId}/password`, {
        password: passwordInput,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };
  //

  // Fonction pour se déconnecter du compte //
  const decoAccount = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );
    if (confirmation) {
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      navigate("/");
    }
  };
  //

  // Fonction pour supprimer le compte du clien //
  const deleteAccount = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (confirmation) {
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      axios.delete(`http://localhost:3001/users/${userId}`);
      window.location.reload();
    }
  };
  //

  return (
    <div>
      <Navigation />
      <div className="account">
        <h2>Mon compte</h2>
        <div className="accountInfos">
          <p>Consulté ou modifié les informations de votre compte.</p>
          <div className="userInfos userName">
            Mon prénom :
            <input
              type="text"
              value={userCo.name}
              onChange={handleNameChange}
            />
            <button onClick={updateName}>Modifier mon prénom</button>
          </div>

          <div className="userInfos userEmail">
            Mon email :
            <input
              type="text"
              value={userCo.email}
              onChange={handleEmailChange}
            />
            <button onClick={updateEmail}>Modifier mon adresse email</button>
          </div>

          <div className="userInfos userEmail">
            Mes convives :
            <input
              type="text"
              value={userCo.default_guests}
              onChange={handleDefault_guestsChange}
            />
            <button onClick={updateDefault_guests}>
              Modifier mon nb de convives
            </button>
          </div>

          <div className="userInfos userPassword">
            Mon mot de passe :
            <input
              type="password"
              value={passwordInput}
              onChange={handlePasswordChange}
            />
            <button onClick={updatePassword}>Modifier mon mot de passe</button>
          </div>
          <button id="decoAccount" onClick={decoAccount}>
            Déconnexion
          </button>
          <button id="deleteAccount" onClick={deleteAccount}>
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
