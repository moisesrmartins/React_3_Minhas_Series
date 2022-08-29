import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";

function App() {
  return (
    <div className="App">
    <Navbar color = "light" light expand = "md">
      <NavbarBrand>My Series</NavbarBrand>
      <NavbarToggler/>
      <Collapse isOpen = {true} navbar>
        <Nav className = "ml-auto" navbar>
          <NavItem>
            <NavLink href = "/">Genres</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  );
}

export default App;
