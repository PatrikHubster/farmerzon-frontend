import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: "",
      passwordAgain: "",
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

  handleSubmit(event) {
    console.log(
      this.state.userName +
        " " +
        this.state.password +
        " " +
        this.state.email +
        " " +
        this.state.passwordAgain
    );
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Farmerzon - Register</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </Form.Group>
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
              </Form.Group>
              <Form.Group controlId="formBasicPasswordAgain">
                <Form.Label>Password again</Form.Label>
                <Form.Control
                  name="passwordAgain"
                  type="password"
                  placeholder="Enter Password again"
                  value={this.state.passwordAgain}
                  onChange={(e) => this.handleInputChange(e)}
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
