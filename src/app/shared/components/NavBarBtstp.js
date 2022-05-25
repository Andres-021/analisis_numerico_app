import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../../img/logo_ucc_2018_actual.png';

const NavBarBtstp = (props) => {
  return(
    <Navbar fixed="top" bg="light" expand="lg" className="navbar-collapse">
      <Container>
        <Navbar.Brand href="/"><img width="120px" height="40px"src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Metodos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/biseccion">Biseccion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBtstp;