import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { jobsAPI } from "../utils/jobsAPI";
import { formatDate } from "../utils/formatDate";

const JobPage = () => {
  const [job, setJob] = useState(null);
  const params = useParams();

  const hitAPI = () => {
    jobsAPI()
      .get(`positions/${params.id}.json`)
      .then((res) => {
        setJob(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (job === null) {
      hitAPI();
    }
    setInnerHTML();
  }, [job]);

  const setInnerHTML = () => {
    const howToApply = document.querySelector(".how-to-apply");
    const description = document.querySelector(".description");
    if (job !== null) {
      howToApply.innerHTML = job.how_to_apply;
      description.innerHTML = job.description;
    }
  };

  return (
    <>
      {job !== null && (
        <div className="job-page">
          <div className="sidebar">
            <div>
              <Link to="/">
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
                Back to search
              </Link>
            </div>
            <h3>How To Apply</h3>
            <p className="how-to-apply"></p>
          </div>
          <div className="job-desc">
            <div className="title-and-type">
              <h2>{job.title}</h2>
              {job.type === "Full Time" && (
                <div className="full-time">Full time</div>
              )}
            </div>
            <div className="job-date">
              <FontAwesomeIcon icon={faClock} />
              <span>{formatDate(job.created_at)}</span>
            </div>
            <div className="company-info">
              {job.company_logo !== null ? (
                <div className="company-logo">
                  <img src={job.company_logo} alt="company logo" />
                </div>
              ) : (
                <div className="company-logo no-logo">
                  <span className="no-image">no image</span>
                </div>
              )}
              <div className="name-and-loc">
                <div>
                  <h3>{job.company}</h3>
                </div>
                <div className="job-location">
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            <div className="description"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobPage;
