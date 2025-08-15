import React from "react";
import '@google/model-viewer';

export default function Auto3D() {
  return (
    <model-viewer
      src="/car.glb"   // Ruta a tu modelo descargado de Sketchfab
      alt="Modelo 3D de un auto"
      camera-controls
      auto-rotate
      autoplay
      style={{ width: "70%", height: "100vh" }}
    ></model-viewer>
  );
}
