import React from "react";
import Home from "./pages/Home";
import Card from "./pages/Card"
import Login from "./pages/Login"
import Infos from "./pages/Infos"

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carte" element={<Card />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/informations" element={<Infos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
