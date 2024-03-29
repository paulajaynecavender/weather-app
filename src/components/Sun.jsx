import { useSelector } from "react-redux";
import { selectWeather } from "../features/weatherSlice";

const Sun = () => {
  const weather = useSelector(selectWeather);
  let sunrise = new Date(weather.city.sunrise * 1000);
  let sunset = new Date(weather.city.sunset * 1000);

  const hoursRise = sunrise.getHours();
  const minutesRise = sunrise.getMinutes();

  const sunriseTime = `${padTo2Digits(hoursRise)}:${padTo2Digits(minutesRise)}`;

  const hoursSet = sunset.getHours();
  const minutesSet = sunset.getMinutes();

  const sunsetTime = `${padTo2Digits(hoursSet)}:${padTo2Digits(minutesSet)}`;

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  return (
    <>
      <div className="sun box glass">
        <div className="sunrise">
          <img src="./assets/sunrise.svg" alt="sunrise" />
          <p>Sunrise: {sunriseTime}</p>
        </div>
        <div className="sunset">
          <img src="./assets/sunset.svg" alt="sunset" />
          <p>Sunset: {sunsetTime}</p>
        </div>
      </div>
    </>
  );
};

export default Sun;
