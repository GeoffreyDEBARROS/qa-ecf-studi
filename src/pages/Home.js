import React from "react";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="home">
        <h1>LE QUAI ANTIQUE</h1>
        <img
          src={require("../assets/img/home.png")}
          alt="Un plat"
          height="580px"
        />

        <div className="btn-container">
          <NavLink to="/reservation">
            <button className="reserv-btn">RESERVER</button>
          </NavLink>
        </div>
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
