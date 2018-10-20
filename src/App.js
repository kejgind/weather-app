import React, { Component } from "react";

import Headers from "./components/Headers/Headers";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";
import { API_KEY } from "./apiKey";

import "./App.css";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    temperature: undefined,
    pressure: undefined,
    wind: undefined,
    error: undefined,
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
      if (weatherData.cod === 200) {
        this.setState({
          city: weatherData.name,
          country: weatherData.sys.country,
          description: weatherData.weather[0].description,
          temperature: weatherData.main.temp,
          pressure: weatherData.main.pressure,
          wind: weatherData.wind.speed,
          error: undefined,
        });
      } else {
        this.setState({
          city: undefined,
          country: undefined,
          description: undefined,
          temperature: undefined,
          pressure: undefined,
          wind: undefined,
          error: "Podanego miasto nie znaleziono.",
        });
      }
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        temperature: undefined,
        pressure: undefined,
        wind: undefined,
        error:
          "Określ lokację (miasto i kraj), dla której chcesz zobaczyć pogodę.",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <Headers />
        </div>
        <div className="wrap">
          <Form getWeather={this.getWeather} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            description={this.state.description}
            temperature={this.state.temperature}
            pressure={this.state.pressure}
            wind={this.state.wind}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
