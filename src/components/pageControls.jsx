import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import { changePage } from "../actions/setSearchResultsActions";

const PageControls = (props) => {
  let pageNumberBtns = document.querySelectorAll(".page-number-btn");

  const setActiveBtn = () => {
    pageNumberBtns = document.querySelectorAll(".page-number-btn");
    pageNumberBtns.forEach((btn) => {
      if (btn.innerHTML == props.currentPage) {
        btn.classList.add("current-page-btn");
      } else {
        btn.classList.remove("current-page-btn");
      }
    });
  };

  useEffect(() => {
    setActiveBtn();
  }, [props.currentPage]);

  const handlePageChange = (e, direction = null) => {
    if (direction === "left" && props.currentPage - 1 > 0) {
      props.changePage(props.currentPage - 1);
      console.log('left btn')

    } else if (
      direction === "right" &&
      props.totalPages - props.currentPage > 0
    ) {
      props.changePage(props.currentPage + 1);
      console.log('right btn')
    } else {
      props.changePage(Number(e.target.value));
      console.log('else')
    }
  };

  return (
    <div className="page-controls">
      <button className={`${props.currentPage === 1 ? 'btn-disabled': ""}`} onClick={(e) => handlePageChange(e, "left")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className="page-number-btn" value={1} onClick={handlePageChange}>
        1
      </button>

      {props.currentPage > 2 && props.totalPages > 4 && (
        <div className="ellipses">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      )}

      {props.totalPages > 3 ? (
        <>
          {props.currentPage === 1 ? (
            <>
              <button
                className="page-number-btn"
                value={props.currentPage + 1}
                onClick={handlePageChange}
              >
                {props.currentPage + 1}
              </button>
              <button
                className="page-number-btn"
                value={props.currentPage + 2}
                onClick={handlePageChange}
              >
                {props.currentPage + 2}
              </button>
            </>
          ) : props.currentPage < props.totalPages - 2 ? (
            <>
              <button
                className="page-number-btn"
                value={props.currentPage}
                onClick={handlePageChange}
              >
                {props.currentPage}
              </button>
              <button
                className="page-number-btn"
                value={props.currentPage + 1}
                onClick={handlePageChange}
              >
                {props.currentPage + 1}
              </button>
            </>
          ) : (
            <>
              <button
                className="page-number-btn"
                value={props.totalPages - 2}
                onClick={handlePageChange}
              >
                {props.totalPages - 2}
              </button>
              <button
                className="page-number-btn"
                value={props.totalPages - 1}
                onClick={handlePageChange}
              >
                {props.totalPages - 1}
              </button>
            </>
          )}
        </>
      ) : props.totalPages === 3 ? (
        <button
          className="page-number-btn"
          value={2}
          onClick={handlePageChange}
        >
          2
        </button>
      ) : (
        <></>
      )}

      {props.totalPages - props.currentPage > 2 && props.totalPages !== 4 && (
        <div className="ellipses">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
      )}

      {props.totalPages > 1 && (
        <button
          className="page-number-btn"
          value={props.totalPages}
          onClick={handlePageChange}
        >
          {props.totalPages}
        </button>
      )}

      <button
        className={`arrow-btn-right ${props.currentPage === props.totalPages ? "btn-disabled" : ""}`}
        onClick={(e) => handlePageChange(e, "right")}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.searchResultsReducer.currentPage,
    totalPages: state.searchResultsReducer.totalPages,
  };
};

export default connect(mapStateToProps, { changePage })(PageControls);
