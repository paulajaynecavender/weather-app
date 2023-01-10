import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Weather = () => {
  const weather = useSelector(selectWeather);
  const { clouds, pop, wind } = weather.list[0];
  const { humidity } = weather.list[0].main;
  let sunrise = new Date(weather.city.sunrise * 1000);
  let sunset = new Date(weather.city.sunset * 1000);
  const description = weather.list[0].weather[0].description;
  return (
    <>
      <div className="currentContainer">
        <div className="currentWeatherContainer">
          <div className="location">
            <h2 className="textShadow">{weather.city.name}</h2>
            <h3 className="textShadow">
              {description.charAt(0).toUpperCase() + description.slice(1)}
            </h3>
          </div>
          <div className="highlight">
            <div className="temp ">
              <p className="textShadow">
                {Math.round(weather.list[0].main.temp - 273.15)}°
              </p>
            </div>
            <div className="mainImage">
              <img
                src={`./assets/${weather.list[0].weather[0].icon}.svg`}
                alt="weather"
              />
            </div>
          </div>
          <div className="sun box shadow">
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
          <div className="detail box shadow">
            <div className="detailContent">
              <div className="rain">
                <div className="rain1">
                  <img src={`./assets/umbrella.svg`} alt="weather" />
                </div>
                <div className="rain2">
                  <p>Rain Prob.</p>
                  <p className="bold-text">{Math.round(pop * 100)}%</p>
                </div>
              </div>
              <div className="cloud">
                <div className="cloud1">
                  <img src={`./assets/cloud.svg`} alt="weather" />
                </div>
                <div className="cloud2">
                  <p>Cloud Cover</p>
                  <p className="bold-text">{clouds.all}%</p>
                </div>
              </div>
              <div className="wind">
                <div className="wind1">
                  <img src={`./assets/windy.svg`} alt="weather" />
                </div>
                <div className="wind2">
                  <p>Wind speed</p>
                  <p className="bold-text">{Math.round(wind.speed)} mph</p>
                </div>
              </div>
              <div className="humidity">
                <div className="humidity1">
                  <img src={`./assets/humidity.svg`} alt="weather" />
                </div>
                <div className="humidity2">
                  <p>Humidity</p>
                  <p className="bold-text">{humidity}%</p>
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
