import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const Header = () => (
  <Navbar bg="dark" sticky="top" variant="dark">
    <Navbar.Brand href="/">Farmerzon</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/profile/articles">Meine Produkte</Nav.Link>
      <Nav.Link href="/profile/orders">Meine Bestellungen</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/profile/settings">Einstellungen</Nav.Link>
      <Nav.Link href="/profile/settings">
        Profil
        </Nav.Link>
      <Nav.Link href="/">
        Log Out
    </Nav.Link>
    </Nav>
  </Navbar>
);
