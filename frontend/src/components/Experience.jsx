import React, { useRef, useState } from "react";
import '../assets/experience.css';
import Hotel from "./Hotel";
import Cars from "./Cars";
import Flight from "./Flight";

const Experience = () => {
  const sectionRefs = {
    idFlight: useRef(null),
    idHotel: useRef(null),
    idCars: useRef(null),
  };

  const [audioStarted, setAudioStarted] = useState(false);

  const playAudio = async (text) => {
    try {
      const response = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128",
        {
          method: "POST",
          headers: {
            "xi-api-key": "sk_3296d96092b28e8171fd79ea34a6b3d3faa79097146463651", // reemplaza por tu API key
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            model_id: "eleven_multilingual_v2",
          }),
        }
      );

      if (!response.ok) throw new Error("Error generando audio");

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("Error en playAudio:", error);
    }
  };

  const handleStart = () => {
    const combinedText = `
      Bienvenido a la experiencia Aviatur.
      Recuerda llegar 2 horas antes para tu vuelo.
      Recuerda llegar 4 horas antes para tu hotel.
      Tu auto espera por ti.
    `;
    playAudio(combinedText);
    setAudioStarted(true);
  };

  return (
    <div>
      {/* Botón flotante en la esquina superior derecha */}
      {!audioStarted && (
        <button
          onClick={handleStart}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            padding: "12px 20px",
            fontSize: "16px",
            zIndex: 1000,
            cursor: "pointer",
            borderRadius: "8px",
            backgroundColor: "#025DB8",
            color: "#fff",
            border: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          Iniciar Experiencia
        </button>
      )}

      {/* Secciones renderizadas normalmente */}
      <section
        className="container-fluid"
        id="idFlight"
        ref={sectionRefs.idFlight}
        style={{ height: "650px" }}
      >
        <Flight />
      </section>

      <section
        className="container-fluid"
        id="idHotel"
        ref={sectionRefs.idHotel}
        style={{ height: "650px" }}
      >
        <Hotel />
      </section>

      <section
        className="container-fluid"
        id="idCars"
        ref={sectionRefs.idCars}
        style={{ height: "650px" }}
      >
        <Cars />
      </section>
    </div>
  );
};

export default Experience;
