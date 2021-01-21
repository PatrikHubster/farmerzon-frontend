import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RecipesPage from "./RecipesPage";
import RegisterPage from "./RegisterPage";
import AuthenticationLogic from "./AuthenticationLogic";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Nagivation";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrlBackend: "",
      baseUrlAuthentication: "",
      isLoading: true,
    };
  }

  async componentDidMount() {
    let config;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      config = await this.getConfig("config.json");
    } else {
      config = await this.getConfig("environment.php");
    }

    this.setState({
      ...config,
      isLoading: false,
    });
  }

  async getConfig(endpoint) {
    let content = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    return fetch(endpoint, content)
      .then((response) => response.json())
      .then((data) => ({
        baseUrlBackend: data.GRAPH_SERVER,
        baseUrlAuthentication: data.AUTH_SERVER,
      }));
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingScreen />;
    }

    const isAuthenticated =
      localStorage.getItem("token") !== null &&
      localStorage.getItem("refreshToken") != null;

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Navigation isAuthenticated={isAuthenticated} />
              <br />
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                {isAuthenticated ? (
                  <Redirect to="/" />
                ) : (
                  <LoginPage
                    authenticationLogic={
                      new AuthenticationLogic(this.state.baseUrlAuthentication)
                    }
                  />
                )}
              </Route>
              <Route path="/register">
                {isAuthenticated ? (
                  <Redirect to="/" />
                ) : (
                  <RegisterPage
                    authenticationLogic={
                      new AuthenticationLogic(this.state.baseUrlAuthentication)
                    }
                  />
                )}
              </Route>
              <Route path="/recipes">
                {isAuthenticated ? <RecipesPage /> : <Redirect to="/login" />}
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
