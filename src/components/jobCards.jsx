import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import JobCard from "./jobCard";

// import { jobsAPI } from "../utils/jobsAPI";
import {
  setSearchResults,
  startSearch,
} from "../actions/setSearchResultsActions";

const JobCards = (props) => {
  // const hitAPI = () => {
  //   props.startSearch();
  //   jobsAPI()
  //     .get("positions.json?")
  //     .then((res) => {
  //       props.setSearchResults(res.data, props.fullTime);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="job-cards">
      {/* <button onClick={hitAPI}>hit API</button> */}
      {props.jobs !== undefined && window.screen.width > 768
        ? props.jobs[props.currentPage - 1].map((job) => {
            return (
              <Link key={job.id} to={`/listing/${job.id}`}>
                <JobCard job={job} />
              </Link>
            );
          })
        : props.jobs !== undefined &&
          props.allJobs.map((job) => {
            return (
              <Link key={job.id} to={`/listing/${job.id}`}>
                <JobCard job={job} />
              </Link>
            );
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.searchResultsReducer.jobs,
    allJobs: state.searchResultsReducer.allJobs,
    currentPage: state.searchResultsReducer.currentPage,
    totalPages: state.searchResultsReducer.totalPages,
    fullTime: state.filtersReducer.fullTime,
    isLoading: state.searchResultsReducer.isLoading,
  };
};

export default connect(mapStateToProps, { setSearchResults, startSearch })(
  JobCards
);
