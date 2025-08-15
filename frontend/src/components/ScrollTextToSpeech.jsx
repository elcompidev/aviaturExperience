import React, { useEffect, useRef, useState } from "react";

const ScrollTextToSpeech = () => {
  const [playedSections, setPlayedSections] = useState({}); // control para cada sección

  const sectionRefs = {
    idFlight: useRef(null),
    idHotel: useRef(null),
    idCars: useRef(null),
  };

  const playAudio = async (text) => {
    try {
      const response = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128",
        {
          method: "POST",
          headers: {
            "xi-api-key": "xi-api-key", // reemplaza por tu API key
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
      console.error(error);
    }
  };

  const handleScroll = () => {
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (!ref.current || playedSections[id]) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setPlayedSections((prev) => ({ ...prev, [id]: true }));

        let textToPlay = "";
        switch (id) {
          case "idFlight":
            textToPlay = "Recuerda llegar 2 horas antes";
            break;
          case "idHotel":
            textToPlay = "Recuerda llegar 4 horas antes";
            break;
          case "idCars":
            textToPlay = "Tu auto espera por ti";
            break;
          default:
            break;
        }

        if (textToPlay) playAudio(textToPlay);
      }
    });
  };

  useEffect(() => {
    // Audio inicial al cargar la página
    playAudio("Bienvenido a la experiencia Aviatur");

    // Scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "300vh", padding: "50px" }}>
      <h1>Experiencia Aviatur</h1>

      <div
        id="idFlight"
        ref={sectionRefs.idFlight}
        style={{
          marginTop: "100vh",
          height: "300px",
          background: "#cce7ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Sección Vuelo
      </div>

      <div
        id="idHotel"
        ref={sectionRefs.idHotel}
        style={{
          marginTop: "100vh",
          height: "300px",
          background: "#ffd9d9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Sección Hotel
      </div>

      <div
        id="idCars"
        ref={sectionRefs.idCars}
        style={{
          marginTop: "100vh",
          height: "300px",
          background: "#d9ffd9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
        }}
      >
        Sección Autos
      </div>
    </div>
  );
};

export default ScrollTextToSpeech;
