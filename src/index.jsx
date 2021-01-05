import ReactDOM from "react-dom";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";
import RecipesPage from "./RecipesPage";
import RegisterPage from "./RegisterPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrlAuthentication: "",
      baseUrlBackend: "",
      logic: null
    }; 
  }

  async componentDidMount() {
    let config;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      config = await this.getConfig("config.json");
    } else {
      config = await this.getConfig("environment.php");
    }
    this.setState(config);
    console.log(this.state);
  }

  async getConfig(file_name) {
    let predefinedHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return fetch(file_name, { headers: predefinedHeaders })
      .then((response) => response.json())
      .then((data) => ({
          baseUrlBackend: data.GRAPH_SERVER,
          baseUrlAuthentication: data.AUTH_SERVER,
        }));
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
