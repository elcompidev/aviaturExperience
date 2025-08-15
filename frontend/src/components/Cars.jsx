import React from "react";
import Model3d from "./Model3d";

const cars = [
  {
    rentalCompany: "Localiza",
    carModel: "Chevrolet Spark GT",
    segments: [
      {
        type: "Airport to Hotel",
        pickupLocation: "CTG Airport",
        pickupDateTime: "2025-08-10T10:00:00",
        dropoffLocation: "Hotel Estelar Cartagena",
        dropoffDateTime: "2025-08-10T10:30:00",
      },
      {
        type: "Hotel to Airport",
        pickupLocation: "Hotel Estelar Cartagena",
        pickupDateTime: "2025-08-14T10:00:00",
        dropoffLocation: "CTG Airport",
        dropoffDateTime: "2025-08-14T10:30:00",
      },
    ],
    pricePerSegment: 30.0,
    totalPrice: 60.0,
  },
];

const CarCard = ({ car }) => {
  return (
    <div
      className="card"
      style={{
        borderRadius: "1rem",
        zIndex: 99,
        top: "230px",
        position: "relative",
        boxShadow: "0 1.125rem 1.25rem rgba(0, 0, 0, 0.075)",
        margin: "0px",
      }}
    >
      <div className="card-body p-3">
        <h5 className="card-title text-center mb-3">{car.carModel}</h5>
        <div className="row text-sm" style={{
  paddingLeft: "17px"
}}>
          {car.segments.map((segment, idx) => (
            <React.Fragment key={idx}>
              <div className="col-md-12 mb-2">
                <strong>Recogida:</strong>
                <p>
                  {segment.pickupLocation} <br />
                  {new Date(segment.pickupDateTime).toLocaleString()}
                </p>
              </div>
              <div className="col-md-12 mb-2">
                <strong>Devolución:</strong>
                <p>
                  {segment.dropoffLocation} <br />
                  {new Date(segment.dropoffDateTime).toLocaleString()}
                </p>
              </div>
            </React.Fragment>
          ))}
          <div className="col-md-12 mb-2">
            <strong>Precio total:</strong>
            <p className="text-success fw-semibold">${car.totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CarsList = () => {
  return (
    <div
      className="container py-4"
      style={{
        maxWidth: "1200px",
      }}
    >
      <div style={{ position: "relative" }}>
        <Model3d />
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%" }}>
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsList;
