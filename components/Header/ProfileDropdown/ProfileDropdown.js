import { NavDropdown } from 'react-bootstrap';

const ProfileDropdown = (props) => {
  const title = props.authenticated ? props.userName : "Profil";
  const dropdowns = new Map();
  if (!props.authenticated) {
    dropdowns.set('/orders', 'Meine Bestellungen')
    if (!props.userType === 'farmer') {
      dropdowns.set('/products', 'Meine Produkte');
    }
    dropdowns.set('divider', '')
    dropdowns.set('/logout', 'Logout');
  } else {
    dropdowns.set('/login', 'Login');
    dropdowns.set('/register', 'Registrieren');
  }
  let i = 0;
  return (
    <NavDropdown title={title} id="basic-nav-dropdown">
      {Array.from(dropdowns).map(([key, value]) => (key === 'divider'
        ? <NavDropdown.Divider key={"Divider_" + i++}/>
        : <NavDropdown.Item href={key} key={key}>{value}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default ProfileDropdown;
