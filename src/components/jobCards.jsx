import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import JobCard from "./jobCard";

import { jobsAPI } from "../utils/jobsAPI";
import { setSearchResults } from "../actions/setSearchResultsActions";

const JobCards = (props) => {
  const hitAPI = () => {
    jobsAPI()
      .get("positions.json?")
      .then((res) => {
        console.log(res.data);
        props.setSearchResults(res.data, props.fullTime);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="job-cards">
      <button onClick={hitAPI}>hit API</button>
      {props.jobs !== undefined &&
        props.jobs[props.currentPage - 1].map((job) => {
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
  // console.log('STATE', state)
  return {
    jobs: state.searchResultsReducer.jobs,
    currentPage: state.searchResultsReducer.currentPage,
    totalPages: state.searchResultsReducer.totalPages,
    fullTime: state.filtersReducer.fullTime,
  };
};

export default connect(mapStateToProps, { setSearchResults })(JobCards);
