import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { formatDate } from "../utils/formatDate";

const JobCard = ({ job }) => {
  const truncateStr = (str) => {
    const width = window.screen.width;
    const length = Math.floor(Math.floor(width / 10) / 10) * 10 - 10;
    return str.length > length ? str.substr(0, length - 1) + "..." : str;
  };

  return (
    <div className="job-card">
      {job !== undefined && (
        <>
          <div className="logo-and-details">
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
              <span>{truncateStr(job.company)}</span>
              <h2>{truncateStr(job.title)}</h2>
              {job.type === "Full Time" && (
                <div className="full-time">Full time</div>
              )}
            </div>
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
