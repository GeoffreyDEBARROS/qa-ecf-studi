import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Reservation() {
  const userId = localStorage.getItem("id");
  const [userCo, setUserCo] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [email, setEmail] = useState("");
  const [default_guests, setDefault_guests] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${userId}`)
      .then((res) => setUserCo(res.data.client));
  }, []);

  useEffect(() => {
    if (userCo) {
      setEmail(userCo.email);
      document.getElementById("email").setAttribute("disabled", "disabled");
      setDefault_guests(userCo.default_guests);
    }
  }, [userCo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/reservations", {
        date,
        hour,
        email,
        default_guests,
      })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <Navigation />
      <h2>Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date :</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />

        <label htmlFor="hour">Heure :</label>
        <input
          type="time"
          id="hour"
          value={hour}
          onChange={(event) => setHour(event.target.value)}
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="guests">Nombre de convives :</label>
        <input
          type="number"
          id="guests"
          value={default_guests}
          onChange={(event) => setDefault_guests(event.target.value)}
          required
        />

        <button type="submit">Réserver</button>

        {message && <p id="reservation-msg">{message}</p>}
      </form>
      <Footer />
    </div>
  );
}

export default Reservation;
