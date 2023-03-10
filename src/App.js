import { useCallback, useEffect } from "react";
import axios from "axios";
import Weather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import UserInput from "./components/UserInput";
import "./App.css";
import {
  selectWeather,
  setWeather,
  selectLocation,
} from "./features/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const dispatch = useDispatch();

  const weather = useSelector(selectWeather);
  const location = useSelector(selectLocation);

  const memodGetWeather = useCallback(
    async (latitude, longitude) => {
      const apiResults = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=1bf79de4275b581f16093166cb75d170`
      );
      console.log(apiResults);

      dispatch(setWeather(apiResults.data));
    },
    [dispatch]
  );
  useEffect(() => {
    if (location) {
      memodGetWeather(location.lat, location.lon);
    }
  }, [location, memodGetWeather]);
  const onSuccess = async (e) => {
    const { latitude, longitude } = e.coords;
    memodGetWeather(latitude, longitude);
  };

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, () => {
      console.log("no location provided");
    });
  };

  return (
    <div
      className="backgroundImg"
      style={{
        backgroundImage: weather
          ? `url(/assets/new-design/${weather.list[0].weather[0].icon}.jpg)`
          : "url(/assets/new-design/main.jpg",
      }}
    >
      <h1 className="textShadow">Weather Forecast</h1>
      <div className="buttonLocate" id="button">
        <button onClick={getLoc}>
          <FontAwesomeIcon icon={faCompass} />
          <p>Locate Me</p>
        </button>
      </div>
      <div className="inputContainer">
        <UserInput />
      </div>

      {!weather && ""}
      {weather && (
        <div className="weatherContainer">
          <Weather />
          <div className="forecastContainer">
            <div className="forecastContainerCentre">
              <ForecastWeather weather={weather.list} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
