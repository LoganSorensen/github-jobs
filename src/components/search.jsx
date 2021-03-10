import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { setSearchResults, startSearch } from "../actions/setSearchResultsActions";
import { jobsAPI } from "../utils/jobsAPI";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startSearch();
    jobsAPI()
      // appends the job location to the URL if one has been specified
      .get(
        `positions.json?search=${search}${
          props.location !== null ? `&location=${props.location}` : ""
        }`
      )
      .then((res) => {
        props.setSearchResults(res.data, props.fullTime);
      })
      .catch((err) => console.log(err));
  };

  const truncateStr = (str) => {
    const width = window.screen.width;
    const length = Math.floor(Math.floor(width / 10) / 10) * 10 - 20;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faBriefcase} />
        <input
          type="text"
          placeholder={truncateStr(
            "Search by job name, companies, expertise, or benefits"
          )}
          value={search}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.filtersReducer.location,
    fullTime: state.filtersReducer.fullTime,
  };
};

export default connect(mapStateToProps, { setSearchResults, startSearch })(Search);
