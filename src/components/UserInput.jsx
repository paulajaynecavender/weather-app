import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { setLocation } from "../features/weatherSlice";

const UserInput = () => {
  const dispatch = useDispatch();

  const onInput = (e) => {
    setSearchTerm(e.target.value);
  };
  const [searchTerm, setSearchTerm] = useState();

  const onClick = () => {
    getLonLat(searchTerm);
  };

  const getLonLat = async (location) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=3&appid=1bf79de4275b581f16093166cb75d170`
    );
    dispatch(setLocation(data[0]));
  };

  return (
    <div className="input">
      <input
        onInput={onInput}
        type="text"
        placeholder="... or search by location"
        id="getLocInput"
      />
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default UserInput;
