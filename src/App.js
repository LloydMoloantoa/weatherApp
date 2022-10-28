import React, { useState } from "react";
import './App.css'

function App() {

  const apiKey = '736d282beacddf1930f2ba21d6c5cd9b'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch('api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={apiKey}').then(

        response => response.json()
      ).then(
        data => setWeatherData(data)
      )
    }
  }


  return (
    <div className="container">
      <input
        className="input"
        placeholder="enter city.."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p> welcome to weather app</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)} C</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}

    </div>
  )
}

export default App