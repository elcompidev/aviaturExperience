import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const FlightAnimation = () => {
  const planeRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  const planeSize = 500; // tamaño del avión (ahora está disponible para el JSX también)

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const timeline = anime.timeline({
      easing: "easeInOutSine",
    });

    // Paso 1: desde la esquina superior derecha (fuera de pantalla) al centro
    timeline.add({
      targets: planeRef.current,
      translateX: [screenWidth  , ((screenWidth - planeSize) / 2) - 300],
      translateY: [-planeSize, ((screenHeight - planeSize) / 2) - 50],
      duration: 2000,
    });

    // Paso 2: pausa en el centro
    timeline.add({
      targets: planeRef.current,
      duration: 5000,
    });

    // Paso 3: moverse a la esquina inferior izquierda (fuera de pantalla)
    timeline.add({
      targets: planeRef.current,
      translateX: [ ((screenWidth - planeSize) / 2) - 300, -planeSize],
      translateY: [((screenHeight - planeSize) / 2) - 50, screenHeight],
      duration: 2000,
      complete: () => setShowImage(true),
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "97vw",
        height: "100vh",
        overflow: "hidden",
        left: "-120px"
      }}
    >
      {/* Avión */}
      <img
        ref={planeRef}
        src="./avianca.png"
        alt="Avión"
        style={{
          width: planeSize,
          height: planeSize,
          position: "absolute",
        }}
      />
            {showImage && (
        <img
          src="./finalImage.png" // reemplaza con la ruta de tu imagen
          alt="Final"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // centra la imagen
            width: "300px", // ajusta tamaño si quieres
            height: "auto",
          }}
        />
      )}
    </div>
  );
};

export default FlightAnimation;
