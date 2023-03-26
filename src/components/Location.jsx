import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";
// import Highlight from "./Highlight";

const Location = () => {
  const weather = useSelector(selectWeather);
  const description = weather.list[0].weather[0].description;
  return (
    <div className="location box glass">
      <h2>
        {weather.city.name}, {weather.city.country}
      </h2>
      <h3>{description.charAt(0).toUpperCase() + description.slice(1)}</h3>
      {/* <Highlight /> */}
    </div>
  );
};

export default Location;
