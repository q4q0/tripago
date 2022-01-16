import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

function TripsList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending } = useFetch(url);
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending ? (
        <div>Loading trips...</div>
      ) : (
        <ul>
          {trips &&
            trips.map((trip) => (
              <li key={trip.id}>
                <h3>Title: {trip.title}</h3>
                <p>Price: {trip.price}</p>
                <p>Location: {trip.loc}</p>
              </li>
            ))}
        </ul>
      )}
      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
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
