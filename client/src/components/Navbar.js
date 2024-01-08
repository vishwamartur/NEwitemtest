import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    <div className="Navbar">
      <BootstrapNavbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Animal Gallery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Dogs
              </NavLink>
              <NavLink to="/cats" className="nav-link" activeClassName="active">
                Cats
              </NavLink>
              <NavLink
                to="/sheeps"
                className="nav-link"
                activeClassName="active"
              >
                Sheeps
              </NavLink>
              <NavLink
                to="/goats"
                className="nav-link"
                activeClassName="active"
              >
                Goats
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </BootstrapNavbar>
    </div>
  );
}
export default Navbar;
