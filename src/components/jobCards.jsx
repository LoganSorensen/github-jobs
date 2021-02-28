import React, { useState, useEffect } from "react";

import JobCard from "./jobCard";

import { jobsAPI } from "../utils/jobsAPI";

const JobCards = () => {
  const [jobs, setJobs] = useState([]);

  const hitAPI = () => {
    jobsAPI()
      .get()
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
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
};

export default JobCards;
