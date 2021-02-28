import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import JobCard from "./jobCard";

import { jobsAPI } from "../utils/jobsAPI";

const JobCards = () => {
  const [jobs, setJobs] = useState([]);

  const hitAPI = () => {
    jobsAPI()
      .get('positions.json?page=1&search=code')
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="job-cards">
      <button onClick={hitAPI}>hit API</button>
      {jobs.map((job) => {
        return (
          <Link to={`/listing/${job.id}`}>
            <JobCard key={job.id} job={job} />
          </Link>
        );
      })}
    </div>
  );
};

export default JobCards;
