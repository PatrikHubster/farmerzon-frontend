import { withRouter } from "react-router";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">Farmerzon</Navbar.Brand>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Navigation = withRouter(Header);

export default Navigation;
