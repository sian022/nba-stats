import { Container, Nav, Navbar} from "react-bootstrap";
import React from 'react'
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar style={{backgroundColor: "#1d428a"}} variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>NBA Stats</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
        <Nav className="me-auto">
                <LinkContainer to='/players'>
                  <Nav.Link><i className="fas fa-user"></i>Players</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/teams'>
                  <Nav.Link><i className="fas fa-users"></i>Teams</Nav.Link>
                </LinkContainer> 
            </Nav>
      </Navbar>
    </header>
  )
}

export default Header