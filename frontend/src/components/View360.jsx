import React, { useEffect, useRef } from "react";
import * as PANOLENS from "panolens";

export default function Vista360() {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!viewerRef.current) {
      const panorama = new PANOLENS.ImagePanorama("/wmremove-transformed.jpeg");

      const viewer = new PANOLENS.Viewer({
        container: containerRef.current,
        autoRotate: true,
        autoRotateSpeed: 0.5,
        controlBar: true,
        output: "console",
        viewIndicator: true,
        cameraFov: 70
      });

      viewer.add(panorama);
      viewerRef.current = viewer;
    }

    // 👇 sin dispose(), así no se recrea y no duplica
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#f4f4f4",
          borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem"
      }}
    />
  );
}

