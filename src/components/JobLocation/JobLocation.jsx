import { useState } from "react";

import CitySearchBox from "../CitySearchBox/CitySearchBox";

import "./joblocation.scss";

const cities = [
  { id: 1, name: "London", checked: false },
  { id: 2, name: "Amsterdam", checked: false },
  { id: 3, name: "New York", checked: false },
  { id: 4, name: "Berlin", checked: false }
]

const JobLocation = () => {
  
  const [currentCity, setCurrentCity] = useState("");
  const [cityData, setCityData] = useState(cities);

  const handleChange = (e) => {
    const newCityData = cityData.map((city) => (
      (city.name === e.target.name) ? { ...city, checked: true } : { ...city, checked: false }
    ))

    setCurrentCity(e.target.name);
    setCityData(newCityData);
  }
  
  return (
    <div className="input-container">
      <div className="job-type-selector">
        <input type="checkbox" name="" id="job-type" />
        <label htmlFor="job-type">Full time</label>
      </div>
      <CitySearchBox />
      <div className="city-selector-container">
        {cityData.map((city) => (
          <article key={city.id} className="city-selector">
            <input type="radio" name={city.name} checked={city.checked} id={city.name} onChange={handleChange} />
            <label htmlFor={city.name}>{ city.name }</label>
          </article>
        ))}
      </div>
    </div>
  )
}

export default JobLocation