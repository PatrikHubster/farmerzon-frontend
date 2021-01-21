import { withRouter } from "react-router";
import { Image, Navbar, Nav } from "react-bootstrap";

import farmerzon from "./images/farmerzon.png";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <Image
          src={farmerzon}
          width={30}
          height={30}
          className="d-inline-block align-top"
        />{" "}
        Farmerzon
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={props.location.pathname}>
          <Nav.Link href="/">Home</Nav.Link>
          {props.isAuthenticated ? null : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
          {props.isAuthenticated ? null : (
            <Nav.Link href="/register">Register</Nav.Link>
          )}
          {props.isAuthenticated ? (
            <Nav.Link href="/recipes">Recipes</Nav.Link>
          ) : null}
          <Nav.Link href="/about">About</Nav.Link>
          {props.isAuthenticated ? (
            <Nav.Link
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("refreshToken");
                window.location.href = "/";
              }}
            >
              Logout
            </Nav.Link>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Navigation = withRouter(Header);

export default Navigation;
