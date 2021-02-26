import SearchPage from "./pages/searchPage";
import JobPage from "./pages/jobPage";

import {jobsAPI } from './utils/jobsAPI'

import "./styles/index.css";

function App() {
  const hitAPI = () => {
    jobsAPI()
      .get(
        
      )
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header>
        <h1>
          Github <span>Jobs</span>
        </h1>
      </header>
      <button onClick={hitAPI}>hit API</button>
      <SearchPage />
    </div>
  );
}

export default App;
