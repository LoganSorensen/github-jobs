import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

export default Search;
