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

  const onSubmit = (e) => {
    getLonLat(searchTerm);
    e.preventDefault();
    e.target.reset();
  };

  const getLonLat = async (location) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=3&appid=1bf79de4275b581f16093166cb75d170`
    );
    dispatch(setLocation(data[0]));
  };

  return (
    <form className="inputBox" onSubmit={onSubmit}>
      <input
        onInput={onInput}
        type="text"
        placeholder="... or search by location"
        id="getLocInput"
      />
      <button>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default UserInput;
