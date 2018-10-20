import React from "react";

function Weather(props) {
  if (props.currentWeather && !props.error) {
    const city = props.currentWeather.name;
    const country = props.currentWeather.sys.country;
    const temperature = props.currentWeather.main.temp;
    const pressure = props.currentWeather.main.pressure;
    const weather = props.currentWeather.weather[0].description;
    const wind = props.currentWeather.wind.speed;
    return (
      <div>
        <h1>
          Lokalizacja: {city}, {country}
        </h1>
        <p>Pogoda: {weather}</p>
        <p>
          Temperatura: {temperature}
          &deg;C
        </p>
        <p>
          Ciśnienie: {pressure}
          hPa
        </p>
        <p>
          Wiatr: {wind}
          m&#47;s
        </p>
      </div>
    );
  } else {
    return <h1>{props.error}</h1>;
  }
}

export default Weather;
