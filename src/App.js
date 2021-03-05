import { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import SearchPage from "./pages/searchPage";
import JobPage from "./pages/jobPage";
import { jobsAPI } from "./utils/jobsAPI";
import { setSearchResults } from "./actions/setSearchResultsActions";

import "./styles/index.css";

function App(props) {
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const success = (position) => {
    jobsAPI()
      .get(
        `positions.json?lat=${position.coords.latitude}&long=${position.coords.longitude}`
      )
      .then((res) => {
        // if there are no jobs near the user, the search will default to new york
        if (res.data.length === 0) {
          error();
        } else {
          props.setSearchResults(res.data, props.fullTime);
        }
      })
      .catch((err) => console.log(err));
  };

  const error = (error = "An error has occured") => {
    jobsAPI()
      .get(`positions.json?location=ny`)
      .then((res) => {
        props.setSearchResults(res.data, props.fullTime);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // getLocation();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          Github <span>Jobs</span>
        </h1>
      </header>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/listing/:id">
        <JobPage />
      </Route>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fullTime: state.filtersReducer.fullTime,
  };
};

export default connect(mapStateToProps, { setSearchResults })(App);
