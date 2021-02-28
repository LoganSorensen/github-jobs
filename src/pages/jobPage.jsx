import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

import { jobsAPI } from "../utils/jobsAPI";

const JobPage = () => {
  const [job, setJob] = useState(null);
  const params = useParams();

  const hitAPI = () => {
    jobsAPI()
      .get(`positions/${params.id}.json`)
      .then((res) => {
        console.log(res.data);
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

  let howToApply = document.querySelector(".how-to-apply");

  const setInnerHTML = () => {
    howToApply = document.querySelector(".how-to-apply");
    if (job !== null) {
      howToApply.innerHTML = job.how_to_apply;
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
        </div>
      )}
    </>
  );
};

export default JobPage;
