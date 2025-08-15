import React from "react";
import Vista360 from "./View360";

const hotels = [
  {
    hotelName: "Hotel Estelar Cartagena",
    checkIn: "2025-08-10",
    checkOut: "2025-08-14",
    address: "Calle 1A #2-23",
    roomType: "Double Suite",
    guests: 2,
    pricePerNight: 120.0,
    totalPrice: 480.0,
  },
];

const HotelCard = ({ hotel }) => {
  return (
    <div className="card" style={{borderRadius: '1rem',   zIndex: 99,
  top: "-126px",
  position: "relative",
  boxShadow: "0 1.125rem 1.25rem rgba(0, 0, 0, 0.075)",
  margin: "50px"}}>
      <div className="card-body p-3">
        <div className="row text-sm">
          <div className="col-md-3 mb-2">
            <strong>Hotel:</strong>
            <p>{hotel.hotelName}</p>
          </div>
          <div className="col-md-3 mb-2">
            <strong>Check-in:</strong>
            <p>{hotel.checkIn}</p>
          </div>
          <div className="col-md-3 mb-2">
            <strong>Check-out:</strong>
            <p>{hotel.checkOut}</p>
          </div>
          <div className="col-md-3 mb-2">
            <strong>Huéspedes:</strong>
            <p>{hotel.guests}</p>
          </div>
          <div className="col-md-3 mb-2">
            <strong>Tipo de habitación:</strong>
            <p>{hotel.roomType}</p>
          </div>
          <div className="col-3 mb-2">
            <strong>Dirección:</strong>
            <p>{hotel.address}</p>
          </div>
          <div className="col-md-3 mb-2">
            <strong>Precio por noche:</strong>
            <p>${hotel.pricePerNight.toFixed(2)}</p>
          </div>
          <div className="col-md-3 mb-2">
            <strong>Precio total:</strong>
            <p className="text-success fw-semibold">${hotel.totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HotelsList = () => {
  return (
    <div className="container py-4" style={{
  maxWidth: "1200px"
}}>
      <div>
        <Vista360/>
      </div>
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelsList;
