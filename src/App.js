import React, { Component } from "react";

import Headers from "./components/Headers/Headers";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";
import { API_KEY } from "./apiKey";

import "./App.css";

class App extends Component {
  state = {
    currentWeather: null,
    error: "Określ lokację (miasto i kraj), dla której chcesz zobaczyć pogodę.",
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=pl`
      );
      const weatherData = await api_call.json();
      if (weatherData.code === 200) {
        this.setState({ currentWeather: weatherData, error: "" });
      } else return;
    } else {
      this.setState({
        currentWeather: null,
        error:
          "Określ lokację (miasto i kraj), dla której chcesz zobaczyć pogodę.",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Headers />
        <Form getWeather={this.getWeather} />
        <Weather
          currentWeather={this.state.currentWeather}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
