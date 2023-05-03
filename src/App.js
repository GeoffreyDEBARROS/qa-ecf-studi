import React, { useState } from "react";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Infos from "./pages/Infos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Reservation from "./pages/Reservation";
import Account from "./pages/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carte" element={<Card />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/informations" element={<Infos />} />
        <Route path="/créer-un-compte" element={<Signin />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/mon-compte" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
