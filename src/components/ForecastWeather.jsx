const ForecastWeather = ({ weather }) => {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      {weather.map((weather) => {
        let time = new Date(weather.dt * 1000);
        const d = new Date(weather.dt * 1000);
        let day = weekday[d.getDay()];
        const { main } = weather;
        return (
          <div key={weather.dt} className="forecastWeatherContainer glass">
            <div className="fcTime">
              <p>
                {day} {time.getHours()}:{time.getMinutes()}0
              </p>
            </div>
            <div className="fcDescription">
              <img
                src={`./assets/${weather.weather[0].icon}.svg`}
                alt="weather-icon"
              />
            </div>
            <div className="fcContent">
              <div className="fcTemp">
                <p> {Math.round(main.temp - 273.15)}°C</p>
              </div>

              {/* <div className="fcRain">
                <p>{Math.round(pop * 100)}%</p>
              </div>

              <div className="fcWind">
                <p>{Math.round(wind.speed)} mph</p>
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ForecastWeather;
