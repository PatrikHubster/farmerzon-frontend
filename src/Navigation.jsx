import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Header = (props) => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='/'>Farmerzon</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' activeKey={props.location.pathname}>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Navigation = withRouter(Header);

export default Navigation;
