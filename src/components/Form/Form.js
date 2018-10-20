import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          className="input"
          placeholder="Miasto..."
        />
        <input
          type="text"
          name="country"
          className="input"
          placeholder="Kraj..."
        />
        <button type="submit" className="button">
          Sprawdź pogodę
        </button>
      </form>
    );
  }
}

export default Form;
