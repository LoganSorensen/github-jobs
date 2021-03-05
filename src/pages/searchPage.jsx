import React from "react";
import { connect } from "react-redux";

import Search from "../components/search";
import Filters from "../components/filters";
import JobCards from "../components/jobCards";
import PageControls from "../components/pageControls";

const SearchPage = (props) => {
  return (
    <>
      <Search />
      <div className="filters-and-jobs">
        <Filters />
        <div className="jobs">
          <JobCards />
          {props.totalPages > 1 && <PageControls />}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPages: state.searchResultsReducer.totalPages,
  };
};

export default connect(mapStateToProps, {})(SearchPage);
