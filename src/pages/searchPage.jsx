import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

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
        {props.isLoading ? (
          <div className="loader">
            <Loader
              type="RevolvingDot"
              color="#334680"
              height={100}
              width={100}
              timeout={30000}
            />
          </div>
        ) : (
          <div className="jobs">
            <JobCards />
            {props.totalPages > 1 && <PageControls />}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalPages: state.searchResultsReducer.totalPages,
    isLoading: state.searchResultsReducer.isLoading,
  };
};

export default connect(mapStateToProps, {})(SearchPage);
