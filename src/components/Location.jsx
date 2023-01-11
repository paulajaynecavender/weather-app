import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Location = () => {
  const weather = useSelector(selectWeather);
  const description = weather.list[0].weather[0].description;
  return (
    <div className="location box shadow">
      <h2>{weather.city.name}</h2>
      <h3>{description.charAt(0).toUpperCase() + description.slice(1)}</h3>
    </div>
  );
};

export default Location;
