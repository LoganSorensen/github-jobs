import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import JobCard from "./jobCard";

import { jobsAPI } from "../utils/jobsAPI";
import { setSearchResults } from "../actions/setSearchResultsActions";

const JobCards = (props) => {

  const [currentPageJobs, setCurrentPageJobs] = useState([]);
  const [firstJob, setFirstJob] = useState(0)

  useEffect(() => {
// setCurrentPageJobs(props.jobs)
if (props.jobs !== undefined) {
  // console.log(props.jobs.length < 5)
  if (props.jobs.length < 5) {
    setCurrentPageJobs(props.jobs)
    console.log(currentPageJobs)
  } else  if (props.jobs !== undefined &&props.currentPage !== props.totalPages) {
    setCurrentPageJobs(props.jobs.slice(firstJob,firstJob + 5))
    console.log('HERE',props.jobs.slice(firstJob, firstJob + 5))
    setFirstJob(firstJob + 5)
  } else if (props.jobs!==undefined && props.currentPage === props.totalPages) {
    setCurrentPageJobs(props.jobs.slice(firstJob,props.jobs.length))
    
  }
}
}, [props.jobs, props.currentPage])

const hitAPI = () => {
  jobsAPI()
  .get("positions.json?")
  .then((res) => {
    console.log(res.data);
    props.setSearchResults(res.data, props.fullTime);
  })
  .catch((err) => console.log(err));
};

// console.log('first job',firstJob)
  // console.log(currentPageJobs)

  return (
    <div className="job-cards">
      <button onClick={hitAPI}>hit API</button>
      {currentPageJobs !== undefined &&
        currentPageJobs.map((job) => {
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
    currentPage: state.searchResultsReducer.currentPage,
    totalPages: state.searchResultsReducer.totalPages,
    fullTime: state.filtersReducer.fullTime,
  };
};

export default connect(mapStateToProps, { setSearchResults })(JobCards);
