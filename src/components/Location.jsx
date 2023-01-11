import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Location = () => {
  const weather = useSelector(selectWeather);
  const description = weather.list[0].weather[0].description;
  return (
    <div className="location">
      <h2 className="textShadow">{weather.city.name}</h2>
      <h3 className="textShadow">
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </h3>
    </div>
  );
};

export default Location;
