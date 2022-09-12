import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toogle = () => {
    setOpen(!open);
  };

  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavbarBrand>
          <Link className="btn btn-light" to="/">
            My Series
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toogle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="btn btn-light" to="/Series">
                  Series
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="btn btn-light" to="/Genres">
                  Genres
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="btn btn-light" to="/NewGenre">
                  New Genre
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="btn btn-light" to="/NewSeries">
                  New Series
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
