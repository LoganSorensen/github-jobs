import React from "react";

import Search from "../components/search";
import Filters from "../components/filters";
import JobCards from "../components/jobCards";

const SearchPage = () => {
  return (
    <>
      <Search />
      <div className="filters-and-jobs">
        <Filters />
        <JobCards />
      </div>
    </>
  );
};

export default SearchPage;
