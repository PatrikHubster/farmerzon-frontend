import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className={styles.header}>
      <Navbar.Brand>
        <img
          src="/farmerzon.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> Farmerzon</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <ProfileDropdown authenticated={props.authenticated} userName={props.userName}
                         userType={props.userType} />
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Suche" className="mr-sm-2" />
        <Button variant="outline-light">Suche</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
