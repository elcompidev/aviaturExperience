import React from "react";
import "../assets/FlightTicket.css";

export default function FlightTicket({ flight }) {
  const {
    airline,
    aircraftModel,
    departure,
    arrival,
    price
  } = flight;

  // Función para formatear fecha y hora
  const formatDate = (dateTime) => {
    const dateObj = new Date(dateTime);
    return {
      date: dateObj.toLocaleDateString("es-CO", { day: "2-digit", month: "short", year: "numeric" }),
      time: dateObj.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
    };
  };

  const dep = formatDate(departure.dateTime);
  const arr = formatDate(arrival.dateTime);

  return (
    <div className="ticket d-flex flex-row border overflow-hidden shadow-sm" style={{borderRadius: '1rem', marginTop: '20px'}}>
      
      {/* Columna izquierda */}
      <div className="ticket-left p-3 bgAviatur text-white flex-fill">
        <span className="fw-bold text-uppercase mb-2">
          {airline}
          <p className="small mb-1">{aircraftModel}</p>
        </span>

        {/* Ruta */}
        <div className="text-center my-3">
          <h5 className="fw-bold text-white">{departure.city} ({departure.iataCode})</h5>
          <span className="fs-3">✈</span>
          <h5 className="fw-bold text-white">{arrival.city} ({arrival.iataCode})</h5>
        </div>

        {/* Precio */}
        <div className="mt-4 text-center">
          <p className="small mb-0">Precio</p>
          <h5 className="fw-bold text-white">${price.toFixed(2)} USD</h5>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="ticket-right p-3 bg-white flex-fill border-start">
        <div>
          <p className="small mb-0">Salida</p>
          <span className="fw-bold">{dep.date} <br/>{dep.time}</span>
        </div>
        <br/>
        <div>
            <p className="small mb-0">Llegada</p>
            <span className="fw-bold">{arr.date} <br/>{arr.time}</span>
          </div>
        <div className="barcode mt-3 text-center">
          <div className="barcode-box"></div>
        </div>
      </div>
    </div>
  );
}
