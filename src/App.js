import "./App.css";
import { useEffect, useState } from "react";
import { fetchWeatherData } from "./utils/api";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    async function getWeatherData() {
      const data = await fetchWeatherData();
      setWeatherData(data);
    }
    getWeatherData();
  }, []);

  return (
    <div className="App">
      <div className="center">
        <h1>Lagos</h1>
        <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
          {unit === "C" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
      {!weatherData ? (
        <p style={{ textAlign: "center" }}>No Weather Data Available</p>
      ) : (
        weatherData.map((data, index) => (
          <div className="weather_data" key={index}>
            <div>
              <p>{`Date: ${data.date}`}</p>
              <p>{`Temperature: ${
                unit === "C" ? data.temperature_c : data.temperature_f
              }°${unit}`}</p>
              <p>{`Humidity: ${data.humidity}%`}</p>
              <p>{`Condition: ${data.text}`}</p>
              <p>{`UV: ${data.uv}`}</p>
            </div>
            <img src={`http://${data.icon}`} alt="weather icon" />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
