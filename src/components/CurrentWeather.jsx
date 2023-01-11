import Sun from "./Sun";
import Location from "./Location";
import Highlight from "./Highlight";
import Detail from "./Detail";

const Weather = () => {
  return (
    <>
      <div className="currentContainer">
        <div className="currentWeatherContainer">
          <Location />
          <Highlight />
          <Sun />
          <Detail />
        </div>
      </div>
    </>
  );
};

export default Weather;
