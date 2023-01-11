import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";
const Detail = () => {
  const weather = useSelector(selectWeather);
  const { clouds, pop, wind } = weather.list[0];
  const { humidity } = weather.list[0].main;
  return (
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
  );
};

export default Detail;
