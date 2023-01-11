import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Highlight = () => {
  const weather = useSelector(selectWeather);

  return (
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
  );
};

export default Highlight;
