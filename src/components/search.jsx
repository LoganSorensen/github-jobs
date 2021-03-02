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
      .get(`positions.json?search=${search}`)
      .then((res) => {
        console.log(res.data);
        props.setSearchResults(res.data);
      })
      .catch((err) => console.log(err));
    setSearch("");
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

export default connect(null, { setSearchResults })(Search);
