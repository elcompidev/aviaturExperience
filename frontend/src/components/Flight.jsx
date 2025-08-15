import React from "react";
import FlightTicket from "./FlightTicket";
import Passengers from "./Passengers";
import Vuelo from "./Vuelo";

  const flightData = {
    flightId: 77,
    airline: "Avianca",
    aircraftModel: "Airbus A320",
    departure: {
      airport: "El Dorado International Airport",
      city: "Bogotá",
      country: "Colombia",
      iataCode: "BOG",
      dateTime: "2025-08-10T08:00:00"
    },
    arrival: {
      airport: "Rafael Núñez International Airport",
      city: "Cartagena",
      country: "Colombia",
      iataCode: "CTG",
      dateTime: "2025-08-10T09:30:00"
    },
    price: 350.0
  };

const Flight = () => {
  return (
            <div className="row">
        <div className="col">
          <div className="card border-0" style={{ background: "transparent" }}>
            <div className="row"  style={{ height: "650px" }}>
              <div className="col-1"></div>
              <div className="col-5">
                <Vuelo/>
              </div>
              <div className="col-1"></div>
              <div className="col-4">
                <FlightTicket flight={flightData} />
                <Passengers/>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Flight;
