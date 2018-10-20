import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input
          type="text"
          name="city"
          className="input"
          placeholder="Your City..."
        />
        <input
          type="text"
          name="country"
          className="input"
          placeholder="Your Country..."
        />
        <button type="submit" className="button">
          Check Wather
        </button>
      </form>
    );
  }
}

export default Form;
