import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewsPage from './pages/NewsPage'
import ShowsPage from './pages/ShowsPage'

function App() {
  return (
    <div className="App2">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Shows">
            <ShowsPage />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/News">
            <NewsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
