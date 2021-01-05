import React from "react";

import { Col, Container, Button, Form, Row } from "react-bootstrap";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticationLogic: this.props.authenticationLogic,
      userName: "",
      password: "",
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
    const { authenticationLogic, userName, password } = this.state;
    console.log(await authenticationLogic.postLogin(userName, password));
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Farmerzon - Login</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name="userName"
                  type="text"
                  placeholder="Enter Username"
                  value={this.state.userName}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <Form.Text className="text-muted">
                  We'll never share your login data with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
