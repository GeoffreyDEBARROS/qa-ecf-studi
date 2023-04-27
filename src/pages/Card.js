import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Card = () => {
  const [starters, setStarters] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/starters")
      .then((res) => {
        setStarters(res.data.entrée);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/dishes")
      .then((res) => {
        setDishes(res.data.plat);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/desserts")
      .then((res) => {
        setDessert(res.data.dessert);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="card">
        <h2>La carte</h2>
        <div className="starter-container">
          <h3>Les entrées</h3>
          {starters.map((item, index) => (
            <div className="item-container" key={index}>
              <p className="item">{item.starter}</p>
              <p className="price">{item.price} €</p>
            </div>
          ))}
        </div>

        <div className="dishes-container">
          <h3>Les plats</h3>
          {dishes.map((item, index) => (
            <div className="item-container" key={index}>
              <p className="item">{item.dishe}</p>
              <p className="price">{item.price} €</p>
            </div>
          ))}
        </div>

        <div className="dessert-container">
          <h3>Les desserts</h3>
          {dessert.map((item, index) => (
            <div className="item-container" key={index}>
              <p className="item">{item.dessert}</p>
              <p className="price">{item.price} €</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
