import React from "react";
import "./Form.css";

function Form(props) {
  return (
    <form onSubmit={props.getWeather} className="Form">
      <input
        type="text"
        name="city"
        className="Form__input"
        placeholder="Miasto..."
      />
      <input
        type="text"
        name="country"
        className="Form__input"
        placeholder="Kraj..."
      />
      <button type="submit" className="Form__button">
        Sprawdź pogodę
      </button>
    </form>
  );
}

export default Form;
