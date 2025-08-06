import React from "react";
import logo from "../assets/Latam-logo_.png"; // Asegúrate de tener un logo o cambia la ruta
import '../assets/boarding.css';

const BoardingPass = () => {
  return (
   <div class="boarding-pass">
        <div class="header">
            <h1 class="main-title">boarding passsssss</h1>
            <p class="subtitle">airline company</p>
        </div>
        
        <div class="passenger-info">
            <div class="info-row">
                <div class="info-label">passenger</div>
                <div class="info-value">JOHN DOE</div>
            </div>
            <div class="info-row">
                <div class="info-label">flight</div>
                <div class="info-value">AV 1A7</div>
            </div>
            <div class="info-row">
                <div class="info-label">date</div>
                <div class="info-value">27 JUN 2022</div>
            </div>
            <div class="info-row">
                <div class="info-label">seat</div>
                <div class="info-value">4B</div>
            </div>
            
            <div class="destination">LONDON → TOKYO</div>
            
            <div class="info-row">
                <div class="info-label">gate</div>
                <div class="info-value">25 A</div>
            </div>
            <div class="info-row">
                <div class="info-label">boarding time</div>
                <div class="info-value">06:30</div>
            </div>
            
            <div class="destination">LONDON → TOKYO</div>
        </div>
        
        <div class="divider"></div>
        
        <ul class="details-list">
            <li>passenger</li>
            <li>JOHN DOE</li>
            <li>flight</li>
            <li>AV 1A7</li>
            <li>seat</li>
            <li>4B</li>
            <li>date</li>
            <li>27 JUN 2022</li>
            <li>gate</li>
            <li>25 A</li>
        </ul>
        
        <div class="barcode">AV1A74B27JUN2022</div>
    </div>
  );
};

export default BoardingPass;
