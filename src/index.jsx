import ReactDOM from "react-dom";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import AboutPage from "./AboutPage";
import BusinessLogic from "./BusinessLogic";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";
import RecipesPage from "./RecipesPage";
import RegisterPage from "./RegisterPage";

let GRAPH_SERVER;
let AUTH_SERVER;

function set_backend_config(file_name) {
  fetch(file_name, {
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
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  set_backend_config("config.json");
} else {
  set_backend_config("environment.php");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logic: new BusinessLogic()
    }
  } 

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Navigation />
              <br />
              <Route exact path="/" >
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginPage logic={this.state.logic} />
              </Route>
              <Route path="/register" component={RegisterPage} />
              <Route path="/recipes" component={RecipesPage} />
              <Route path="/about" component={AboutPage} />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
