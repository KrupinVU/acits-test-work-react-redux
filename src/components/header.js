import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../customHooks/auth.hook";

function Header() {
  const auth = useAuth();
  useEffect(() => {
    if (!auth) {
      return false;
    }
  }, []);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/today" className="mr-4">Сегодня</Link>
          <Link to="/animals">Животные</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;