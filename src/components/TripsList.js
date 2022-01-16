import React, { useEffect, useState } from "react";
import "./TripList.css";

function TripsList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTrips(data));
  }, [url]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          Europe Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=America")}
        >
          America Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Saudi Arabia")}
        >
          Saudi Arabia Trips
        </button>
      </div>
    </div>
  );
}

export default TripsList;
