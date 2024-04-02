// Navbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top" className='rounded-bottom'>
      <Container>
        <Navbar.Brand href="#">LuquiDev</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <Nav.Link href="#presentation">Presentation</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
