import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticationLogic: this.props.authenticationLogic,
      isAuthenticated: undefined,
      userName: "",
      email: "",
      password: "",
      passwordAgain: "",
      zipCode: "",
      cityName: "",
      countryName: "",
      countryCode: "",
      stateName: "",
      doorNumber: "",
      street: "",
      errors: [],
    };
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ errors: [] });

    if (this.state.password !== this.state.passwordAgain) {
      this.setState({
        errors: ["Your entered passwords do not match."],
      });
      return;
    }

    const { authenticationLogic, userName, email, password, street, doorNumber, 
      zipCode, cityName, stateName, countryName, countryCode} = this.state;
    this.setState({
      isAuthenticated: await authenticationLogic.postRegister(userName, email, password, 
        street, doorNumber, zipCode, cityName, stateName, countryName, countryCode)
    });
  }

  render() {
    if (this.state.isAuthenticated === true) {
      window.location.href = "/";
    }
    
    return (
      <Container>
        <Row>
          <Col>
            <h1>Farmerzon - Register</h1>
          </Col>
        </Row>
        {this.state.errors.length !== 0 ? (
          <Row>
            <Col>
              <Alert variant={"danger"}>{this.state.errors}</Alert>
            </Col>
          </Row>
        ) : null}
        <Row>
          <Col>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group controlId="userName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="userName"
                  type="text"
                  placeholder="Enter Username"
                  value={this.state.userName}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="passwordAgain">
                <Form.Label>Password again</Form.Label>
                <Form.Control
                  name="passwordAgain"
                  type="password"
                  placeholder="Enter Password again"
                  value={this.state.passwordAgain}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="street">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  name="street"
                  type="text"
                  placeholder="Enter your street"
                  value={this.state.street}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="doorNumber">
                <Form.Label>Door number</Form.Label>
                <Form.Control
                  name="doorNumber"
                  type="text"
                  placeholder="Enter your door number"
                  value={this.state.doorNumber}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="zipCode">
                <Form.Label>ZIP-Code</Form.Label>
                <Form.Control
                  name="zipCode"
                  type="number"
                  placeholder="Enter your zip code"
                  value={this.state.zipCode}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="cityName">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="cityName"
                  type="text"
                  placeholder="Enter the name of your city"
                  value={this.state.cityName}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="stateName">
                <Form.Label>State</Form.Label>
                <Form.Control
                  name="stateName"
                  type="text"
                  placeholder="Enter the name of your state"
                  value={this.state.stateName}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="countryName">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  name="countryName"
                  type="text"
                  placeholder="Enter the name of your country"
                  value={this.state.countryName}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="countryCode">
                <Form.Label>Country code</Form.Label>
                <Form.Control
                  name="countryCode"
                  type="text"
                  placeholder="Enter the code of your country"
                  value={this.state.countryCode}
                  onChange={(e) => this.handleInputChange(e)}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your entered data with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterPage;
