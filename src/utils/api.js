import axios from "axios";

async function fetchWeatherData() {
  const weatherData = [];
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=9454b288894a40e4a14203247232609&q=Lagos&days=5`
    );
    // console.log(response);
    response.data.forecast.forecastday.forEach((element) => {
      weatherData.push({
        city: response.data.location.region,
        date: new Date(element.date),
        temperature_c: element.day.avgtemp_c,
        temperature_f: element.day.avgtemp_f,
        humidity: element.day.avghumidity,
        text: element.day.condition.text,
        icon: element.day.condition.icon.substring(2),
        uv: element.day.uv,
      });
    });
    // console.log(weatherData);
    return weatherData;
  } catch (e) {
    console.log(e);
  }
}
export { fetchWeatherData };
