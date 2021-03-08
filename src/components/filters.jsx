import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { setFilters, toggleFullTime } from "../actions/setFiltersActions";

const Filters = ({setFilters, toggleFullTime, fullTime}) => {
  const [location, setLocation] = useState("");

  const selectLocation = (e) => {
    setLocation(e.target.value);
  };

  const uncheckRadio = () => {
    const radioBtns = document.querySelectorAll(".radio-btn");
    radioBtns.forEach((btn) => {
      btn.checked = false;
    });
  };

  const clearLocationInput = () => {
    const locationInput = document.querySelector(".location-field");
    locationInput.value = "";
  };

  useEffect(() => {
    setFilters(location);
  }, [location, setFilters]);

  return (
    <div className="filters">
      <div className="full-time-checkbox">
        <input
          type="checkbox"
          id="full-time"
          checked={fullTime === true ? true : false}
          onChange={() => toggleFullTime()}
        />
        <label htmlFor="full-time">Full time only</label>
      </div>
      <div className="location">
        <h3>Location</h3>
        <div className="search-bar">
          <FontAwesomeIcon icon={faGlobeAmericas} />
          <input
            className="location-field"
            type="text"
            placeholder="City, state, zipe code, or country"
            onChange={(e) => {
              selectLocation(e);
              uncheckRadio();
            }}
          />
        </div>
        <div className="location-options">
          <div className="location-option">
            <input
              className="radio-btn"
              type="radio"
              id="london-btn"
              name="location"
              value="london"
              onClick={(e) => {
                selectLocation(e);
                clearLocationInput();
              }}
            />
            <label htmlFor="london-btn">London</label>
          </div>
          <div className="location-option">
            <input
              className="radio-btn"
              type="radio"
              id="amsterdam-btn"
              name="location"
              value="amsterdam"
              onClick={(e) => {
                selectLocation(e);
                clearLocationInput();
              }}
            />
            <label htmlFor="amsterdam-btn">Amsterdam</label>
          </div>
          <div className="location-option">
            <input
              className="radio-btn"
              type="radio"
              id="new-york-btn"
              name="location"
              value="new york"
              onClick={(e) => {
                selectLocation(e);
                clearLocationInput();
              }}
            />
            <label htmlFor="new-york-btn">New York</label>
          </div>
          <div className="location-option">
            <input
              className="radio-btn"
              type="radio"
              id="berlin-btn"
              name="location"
              value="berlin"
              onClick={(e) => {
                selectLocation(e);
                clearLocationInput();
              }}
            />
            <label htmlFor="berlin-btn">Berlin</label>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fullTime: state.filtersReducer.fullTime,
  };
};

export default connect(mapStateToProps, { setFilters, toggleFullTime })(
  Filters
);
