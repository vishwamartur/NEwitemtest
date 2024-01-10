// Import React and the components you need
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// Define your custom Navbar component
const CustomNavbar = () => {
  return (
    // Use the Navbar component from react-bootstrap
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Use the Navbar.Brand component to display the logo or title */}
        <Navbar.Brand href="/">CAPEX Gallery</Navbar.Brand>
        
        {/* Use the Navbar.Toggle component to show the collapse button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Use the Navbar.Collapse component to wrap the navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Use the Nav component to display the links */}
          <Nav className="me-auto">
            {/* Use the NavLink component from react-router-dom to navigate between routes */}
            <NavLink to="/Items" className="nav-link" activeClassName="active">
              Items
            </NavLink>
            <NavLink to="/Profile" className="nav-link" activeClassName="active">
              Profile
            </NavLink>
            <NavLink to="/Reservations" className="nav-link" activeClassName="active">
              Reservations
            </NavLink>
            <NavLink to="/Login" className="nav-link" activeClassName="active">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export your custom Navbar component as default
export default CustomNavbar;
