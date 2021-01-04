import ReactDOM from "react-dom";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";
import RecipesPage from "./RecipesPage";
import RegisterPage from "./RegisterPage";

let GRAPH_SERVER;
let AUTH_SERVER;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  fetch("config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      GRAPH_SERVER = data.GRAPH_SERVER;
      AUTH_SERVER = data.AUTH_SERVER;

      console.log(GRAPH_SERVER);
      console.log(AUTH_SERVER);
    });
} else {
  GRAPH_SERVER = "prod";
  AUTH_SERVER = "prod";
}

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <BrowserRouter>
            <Navigation />
            <br />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/recipes" component={RecipesPage} />
            <Route path="/about" component={AboutPage} />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
