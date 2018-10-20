import React from "react";
import "./Headers.css";

function Headers() {
  return (
    <div className="Headers">
      <div className="Headers__overlay">
        <h1 className="Headers__title">Pogodynka</h1>
        <p className="Headers__description">Sprawdź aktualną pogodę w wybranym przez siebie mieście.</p>
      </div>
    </div>
  );
}

export default Headers;
