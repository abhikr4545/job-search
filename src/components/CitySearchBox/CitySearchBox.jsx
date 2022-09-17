import { useState } from "react";

import { IoEarth } from 'react-icons/io5';

import "./citysearchbox.scss";

const CitySearchBox = () => {

  const [cityName, setCityName] = useState("");

  const handleCityName = (e) => {
    setCityName(e.target.value);
  }

  return (
    <div className="city-searchbox-container">
      <h1 className="title">Location</h1>
      <div className="searchbox">
        <IoEarth className="icon" />
        <input type="text" value={cityName} onChange={handleCityName} placeholder="City, state, zip code or country" />
      </div>
    </div>
  )
}

export default CitySearchBox