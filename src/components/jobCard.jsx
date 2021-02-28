import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

const JobCard = ({ job }) => {
  const formatDate = (date) => {
    const createdAt = moment(date);
    const now = moment();
    return createdAt.from(now);
  };

  return (
    <div className="job-card">
      {job !== undefined && (
        <>
          {job.company_logo !== null ? (
            <div className="company-logo">
              <img src={job.company_logo} alt="company logo" />
            </div>
          ) : (
            <div className="company-logo no-logo">
              <span className="no-image">no image</span>
            </div>
          )}

          <div className="job-details">
            <span>{job.company}</span>
            <h2>{job.title}</h2>
            {job.type === "Full Time" && (
              <div className="full-time">Full time</div>
            )}
          </div>
          <div className="job-location-and-date">
            <div className="job-location">
              <FontAwesomeIcon icon={faGlobeAmericas} />
              <span>{job.location}</span>
            </div>
            <div className="job-date">
              <FontAwesomeIcon icon={faClock} />
              <span>{formatDate(job.created_at)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobCard;
