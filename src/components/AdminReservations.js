import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/reservations`)
      .then((res) => setReservations(res.data));
  }, []);

  const handleDeleteReservation = (id) => {
    axios
      .delete(`http://localhost:3001/reservations/${id}`)
      .then(() => {
        setReservations(reservations.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="admin-reservations">
      <h3>Les réservations</h3>
      {reservations.map((item, index) => (
        <div className="item-container" key={index}>
          <p className="item hour">{item.hour}</p>
          <p className="item date">
            {new Date(item.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "numeric",
              year: "2-digit",
            })}
          </p>
          <p className="item number">Nb : {item.default_guests}</p>
          <p className="item email">{item.email}</p>
          <button
            className="delete-button"
            onClick={() => handleDeleteReservation(item.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminReservations;
