import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  return (
    <div className="filters">
      <div className="full-time-checkbox">
        <input type="checkbox" id="full-time" />
        <label htmlFor="full-time">Full time</label>
      </div>
      <div className="location">
        <h3>Location</h3>
        <div className="search-bar">
          <FontAwesomeIcon icon={faGlobeAmericas} />
          <input type="text" placeholder="City, state, zipe code, or country" />
        </div>
        <div className="location-options">
          <div className="location-option">
            <input type="radio" id="london-btn" name="location" />
            <label htmlFor="london-btn">London</label>
          </div>
          <div className="location-option">
            <input type="radio" id="amsterdam-btn" name="location" />
            <label htmlFor="amsterdam-btn">Amsterdam</label>
          </div>
          <div className="location-option">
            <input type="radio" id="new-york-btn" name="location" />
            <label htmlFor="new-york-btn">New York</label>
          </div>
          <div className="location-option">
            <input type="radio" id="berlin-btn" name="location" />
            <label htmlFor="berlin-btn">Berlin</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
