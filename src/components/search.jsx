import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import { setSearchResults } from "../actions/setSearchResultsActions";
import { jobsAPI } from "../utils/jobsAPI";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jobsAPI()
      // appends the job location to the URL if one has been specified
      .get(
        `positions.json?search=${search}${
          props.location !== null ? `&location=${props.location}` : ""
        }`
      )
      .then((res) => {
        props.setSearchResults(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faBriefcase} />
        <input
          type="text"
          placeholder="Search by job name, companies, expertise, or benefits"
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
    location: state.setFilters.location,
  };
};

export default connect(mapStateToProps, { setSearchResults })(Search);
