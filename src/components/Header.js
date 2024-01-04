import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
 return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">ByteByteWorkshop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
 );
};

export default Header;