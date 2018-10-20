import React from "react";
import "./Weather.css";

function Weather(props) {
  return (
    <div className="Weather">
      {props.city &&
        props.country && (
          <h2 className="Weather__title">
            <strong>Lokalizacja:</strong> {props.city}, {props.country}
          </h2>
        )}
      {props.description && (
        <p className="Weather__paragraph"><strong>Pogoda:</strong> {props.description}</p>
      )}
      {props.temperature && (
        <p className="Weather__paragraph">
          <strong>Temperatura:</strong> {props.temperature}
          &deg;C
        </p>
      )}
      {props.pressure && (
        <p className="Weather__paragraph">
          <strong>Ciśnienie:</strong> {props.pressure}
          hPa
        </p>
      )}
      {props.wind && (
        <p className="Weather__paragraph">
          <strong>Wiatr:</strong> {props.wind}
          m&#47;s
        </p>
      )}
      {props.error && <h2 className="Weather__title">{props.error}</h2>}
    </div>
  );
}

export default Weather;
