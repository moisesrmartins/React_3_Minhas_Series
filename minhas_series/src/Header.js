import React, {useState} from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from "reactstrap";
import {Link} from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false)
  const toogle = () => {
    setOpen(!open)
  }
  return (
    <Navbar color = "light" light expand = "md">
      <NavbarBrand tag = {Link} to = "/">My Series</NavbarBrand>
      <NavbarToggler onClick = {toogle}/>
      <Collapse isOpen = {open} navbar>
        <Nav className = "ml-auto" navbar>
          <NavItem>
            <NavLink tag = {Link} to = "/Genres">Genres</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header