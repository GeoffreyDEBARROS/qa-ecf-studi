import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/schedule`)
      .then((res) => setSchedule(res.data.horaires));
  }, []);

  const handleFormSubmit = (event, day) => {
    event.preventDefault();
    const { morning_open, morning_close, evening_open, evening_close } =
      event.target.elements;
    axios
      .put(`http://localhost:3001/schedule/${day}`, {
        morning_open: morning_open.value,
        morning_close: morning_close.value,
        evening_open: evening_open.value,
        evening_close: evening_close.value,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="admin-schedule">
      <h3>Les horaires</h3>
      {schedule.map((day) => (
        <div key={day.days} className="day-container">
          <h4>{day.days}</h4>
          <form onSubmit={(event) => handleFormSubmit(event, day.days)}>
            <div className="schedule-container">
              <label htmlFor="morning_open">Matin :</label>
              <input
                type="text"
                id="morning_open"
                defaultValue={day.morning_open}
              />

              <input
                type="text"
                id="morning_close"
                defaultValue={day.morning_close}
              />
            </div>
            <div className="schedule-container">
              <label htmlFor="evening_open">Soirée :</label>
              <input
                type="text"
                id="evening_open"
                defaultValue={day.evening_open}
              />

              <input
                type="text"
                id="evening_close"
                defaultValue={day.evening_close}
              />
            </div>

            <button type="submit"> &#x2714;</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminSchedule;
