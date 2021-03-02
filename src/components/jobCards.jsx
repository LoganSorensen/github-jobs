import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import JobCard from "./jobCard";

import { jobsAPI } from "../utils/jobsAPI";
import { setSearchResults } from "../actions/setSearchResultsActions";

const JobCards = (props) => {
  const hitAPI = () => {
    jobsAPI()
      .get("positions.json?page=1&search=code")
      .then((res) => {
        console.log(res.data);
        props.setSearchResults(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="job-cards">
      <button onClick={hitAPI}>hit API</button>
      {props.jobs !== undefined &&
        props.jobs.map((job, index) => {
          return (
            <Link to={`/listing/${job.id}`}>
              <JobCard key={index} job={job} />
            </Link>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    jobs: state.setSearchResults.jobs,
  };
};

export default connect(mapStateToProps, { setSearchResults })(JobCards);
