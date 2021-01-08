import ReactDOM from "react-dom";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Container, Row, Spinner } from "react-bootstrap";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Navigation from "./Navigation";
import RecipesPage from "./RecipesPage";
import RegisterPage from "./RegisterPage";
import AuthenticationLogic from "./AuthenticationLogic";

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
    if (this.state.isLoading) {
      return (
        <Container className="h-100">
          <Row className="h-100 align-items-center justify-content-center">
            <Spinner animation="border" role="status"/>
          </Row>
        </Container>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <BrowserRouter>
              <Navigation />
              <br />
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginPage
                  authenticationLogic={
                    new AuthenticationLogic(this.state.baseUrlAuthentication)
                  }
                />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/recipes">
                <RecipesPage />
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

ReactDOM.render(<App />, document.getElementById("root"));
