import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/schedule")
      .then((res) => {
        setSchedule(res.data.horaires);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="schedule">
      {schedule.map((item, index) => (
        <div className="days" key={index}>
          <h5>{item.days}</h5>
          <div className="morning">
            {item.morning_open} - {item.morning_close}
          </div>
          <div className="evening">
            {item.evening_open} - {item.evening_close}
          </div>
        </div>
      ))}

      <NavLink to="/reservation">
        <button className="reserv-btn">RESERVER</button>
      </NavLink>
    </div>
  );
};

export default Footer;
