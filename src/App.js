import { Route } from "react-router-dom";

import SearchPage from "./pages/searchPage";
import JobPage from "./pages/jobPage";

import "./styles/index.css";

function App() {
  

  return (
    <div className="App">
      <header>
        <h1>
          Github <span>Jobs</span>
        </h1>
      </header>
      {/* <SearchPage /> */}
      <Route exact path='/' component={SearchPage} />
      <Route exact path='/listing/:id'>
        <JobPage />
      </Route>

    </div>
  );
}

export default App;
