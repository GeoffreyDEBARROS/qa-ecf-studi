import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import AdminSchedule from "../components/AdminSchedule";

const Admin = () => {
  const [starters, setStarters] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const hideSuccessMessage = () => {
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1500);
  };

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
        setDesserts(res.data.dessert);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fonction pour modifier les entrées //
  const updateStarter = (item) => {
    axios
      .put(`http://localhost:3001/starters/${item.id}`, {
        starter: item.starter,
        price: item.price,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  // Fonction pour modifier les plats //
  const updateDishes = (item) => {
    axios
      .put(`http://localhost:3001/dishes/${item.id}`, {
        dishe: item.dishe,
        price: item.price,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //
  // Fonction pour modifier les désserts //
  const updateDesserts = (item) => {
    axios
      .put(`http://localhost:3001/desserts/${item.id}`, {
        dessert: item.dessert,
        price: item.price,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //

  return (
    <div>
      <Navigation />
      <h2>Administration</h2>
      <div className="admin-panel">
        <div className="admin-card">
          <h3>La carte</h3>
          <div className="card-cat">
            <h5>Les entrées</h5>
            {starters.map((item, index) => (
              <div className="item-container" key={index}>
                <input
                  className="item-name"
                  type="text"
                  value={item.starter}
                  onChange={(e) =>
                    setStarters((prevState) =>
                      prevState.map((start) =>
                        start.id === item.id
                          ? { ...start, starter: e.target.value }
                          : start
                      )
                    )
                  }
                />

                <input
                  className="price"
                  type="text"
                  value={item.price}
                  onChange={(e) =>
                    setStarters((prevState) =>
                      prevState.map((start) =>
                        start.id === item.id
                          ? { ...start, price: e.target.value }
                          : start
                      )
                    )
                  }
                />
                <button
                  onClick={() => {
                    updateStarter(item);
                    setShowSuccessMessage(true);
                    hideSuccessMessage();
                  }}
                >
                  &#x2714;
                </button>
              </div>
            ))}
          </div>

          <div className="card-cat">
            <h5>Les plats</h5>
            {dishes.map((item, index) => (
              <div className="item-container" key={index}>
                <input
                  className="item-name"
                  type="text"
                  value={item.dishe}
                  onChange={(e) =>
                    setDishes((prevState) =>
                      prevState.map((start) =>
                        start.id === item.id
                          ? { ...start, dishe: e.target.value }
                          : start
                      )
                    )
                  }
                />
                <input
                  className="price"
                  type="text"
                  value={item.price}
                  onChange={(e) =>
                    setDishes((prevState) =>
                      prevState.map((start) =>
                        start.id === item.id
                          ? { ...start, price: e.target.value }
                          : start
                      )
                    )
                  }
                />
                <button
                  onClick={() => {
                    updateDishes(item);
                    setShowSuccessMessage(true);
                    hideSuccessMessage();
                  }}
                >
                  &#x2714;
                </button>
              </div>
            ))}
          </div>

          <div className="card-cat">
            <h5>Les desserts</h5>
            {desserts.map((item, index) => (
              <div className="item-container" key={index}>
                <input
                  className="item-name"
                  type="text"
                  value={item.dessert}
                  onChange={(e) =>
                    setDesserts((prevState) =>
                      prevState.map((start) =>
                        start.id === item.id
                          ? { ...start, dessert: e.target.value }
                          : start
                      )
                    )
                  }
                />
                <input
                  className="price"
                  type="text"
                  value={item.price}
                  onChange={(e) =>
                    setDesserts((prevState) =>
                      prevState.map((start) =>
                        start.id === item.id
                          ? { ...start, price: e.target.value }
                          : start
                      )
                    )
                  }
                />
                <button
                  onClick={() => {
                    updateDesserts(item);
                    setShowSuccessMessage(true);
                    hideSuccessMessage();
                  }}
                >
                  &#x2714;
                </button>
              </div>
            ))}
            {showSuccessMessage && <p>Modification enregistrée !</p>}
          </div>
        </div>
      </div>
      <AdminSchedule />
    </div>
  );
};

export default Admin;
