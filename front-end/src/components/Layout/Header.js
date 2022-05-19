import { Container, Nav, Navbar,  } from "react-bootstrap";
import Logo from "../../assets/img/logo-agencia.png";
import { Link } from "react-router-dom";
import styled from 'styled-components'


export function Header() {
  return (
    <header>
      <NavbarStyled expand="md" >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Agência de Viagens" width={120} height={110} />
          </Navbar.Brand>
          <NavbarToggleStyled aria-controls="navbar-header" />
          <Navbar.Collapse id="navbar-header">
            <Nav className="ms-auto"></Nav>
            <Nav>
              <NavLinkStyled forwardedAs={Link} to="/">Home</NavLinkStyled>
              <NavLinkStyled forwardedAs={Link} to="/pacotes">Pacotes</NavLinkStyled>
              <NavLinkStyled forwardedAs={Link} to="/portal/login">Login</NavLinkStyled>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarStyled>
    </header>
  );
}


const NavbarStyled = styled(Navbar)`
  background-color: beige;
`

const NavbarToggleStyled = styled(Navbar.Toggle)`
  background: #FFF;
  border: none;
`

const NavLinkStyled = styled(Nav.Link)`
    background-color: #FFF;
    border-radius: 3px;
    text-align: center;
    margin: 5px 0;
    box-shadow: 2px 2px 2px rgba(red, green, blue, alpha);
    @media (min-width: 768px) {
      margin: 0 5px;
    }
`