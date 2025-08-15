import React from "react";
import "./ParallaxSection.css";

const FullPageSection = ({ id, bgImage, children }) => {
  return (
    <section 
      id={id} 
      className="fullpage-section" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-content">{children}</div>
    </section>
  );
};

export default FullPageSection;