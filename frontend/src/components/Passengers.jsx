import { useState } from "react";

export default function PassengerTabs() {
  const passengers = [
    {
      firstName: "Ana",
      lastName: "González",
      documentId: "1122334455",
      documentType: "CC",
      birthDate: "1990-05-21"
    },
    {
      firstName: "Luis",
      lastName: "Martínez",
      documentId: "9988776655",
      documentType: "CC",
      birthDate: "1985-12-10"
    }
  ];

  const [activeTab, setActiveTab] = useState(passengers[0].firstName);

  return (
    <div className="ticket  border overflow-hidden" style={{ marginTop: '40px', boxShadow: "0 1.125rem 1.25rem rgba(0, 0, 0, 0.075)",   borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem"}}>
      {/* Navegación de pestañas */}
      <nav>
        <div className="nav nav-tabs" role="tablist">
          {passengers.map((p) => (
            <button
              key={p.firstName}
              className={`nav-link bg-white px-5 ${activeTab === p.firstName ? "active bgAviatur text-white" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeTab === p.firstName}
              onClick={() => setActiveTab(p.firstName)}
            >
              {p.firstName}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenido de las pestañas */}
      <div className="tab-content bg-white p-2 pt-3">
        {passengers.map((p) => (
          <div
            key={p.firstName}
            className={`tab-pane fade ${activeTab === p.firstName ? "show active" : ""}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong>Nombre:</strong> {p.firstName}
              </div>
              <div className="col-md-6 mb-2">
                <strong>Apellido:</strong> {p.lastName}
              </div>
              <div className="col-md-6 mb-2">
                <strong>Documento:</strong> {p.documentType} {p.documentId}
              </div>
              <div className="col-md-6 mb-2">
                <strong>Fecha de nacimiento:</strong>{" "}
                {new Date(p.birthDate).toLocaleDateString("es-CO")}
              </div>
              <div className="col-12 text-center">
              <button type="button" className="btn btn-outline-default">
  Solicitar Correción
</button></div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
