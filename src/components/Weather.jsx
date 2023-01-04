import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Weather = () => {
  const weather = useSelector(selectWeather);
  const { clouds, pop, wind } = weather.list[0];
  const { feels_like } = weather.list[0].main;
  let sunrise = new Date(weather.city.sunrise * 1000);
  let sunset = new Date(weather.city.sunset * 1000);
  const description = weather.list[0].weather[0].description;
  return (
    <>
      <div className="currentContainer">
        <div className="currentWeatherContainer">
          <div className="location">
            <h2>{weather.city.name}</h2>
          </div>
          <div className="headline">
            <div className="box">
              <div className="temp">
                <p>{Math.round(weather.list[0].main.temp - 273.15)}°</p>
              </div>
              <div className="mainImage">
                <img
                  src={`./assets/${weather.list[0].weather[0].icon}.svg`}
                  alt="weather"
                />
              </div>
            </div>
            <div className="sun">
              <div className="sunrise">
                <img src="./assets/sunrise.svg" alt="sunrise" />
                <p>
                  Sunrise {sunrise.getHours()}:{sunrise.getMinutes()}
                </p>
              </div>

              <div className="sunset">
                <img src="./assets/sunset.svg" alt="sunset" />
                <p>
                  Sunset {sunset.getHours()}:{sunset.getMinutes()}
                </p>
              </div>
            </div>
          </div>

          <div className="cContent">
            <div className="contentWeather">
              <div className="weatherNow"></div>
              <div className="weatherDetail">
                <div className="description">
                  <p>
                    {description.charAt(0).toUpperCase() + description.slice(1)}{" "}
                    with {clouds.all}% cloud
                  </p>
                </div>
                <div className="temp1">
                  <p>Feels like: {Math.round(feels_like - 273.15)}°C</p>
                </div>
                <div className="rain">
                  <p>Chance of Rain: {Math.round(pop * 100)}% </p>
                </div>
                <div className="wind">
                  <p>Wind speed: {Math.round(wind.speed)} mph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
