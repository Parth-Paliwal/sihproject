import React, { useEffect , useState } from "react";

const Weather = () => {
  const [WeatherData, setWeatherData] = useState([]);

  const fetchWeather = async () => {
    const response = await fetch(
      "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&&days=3",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3e48327caemsh3c0edb3ddc3c2c8p115087jsn0644a3a997b0",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return <div>Weather</div>;
};

export default Weather;
