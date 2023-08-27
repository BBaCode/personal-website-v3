import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Navbar
        expand="lg"
        expanded={expanded}
        fixed="top"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand>
            <Link className="text-decoration-none text-dark" to="/">
              BRIAN BASSETT
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          >
            {expanded ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-lg-end"
          >
            <Nav className="justify-content-center">
              <Nav.Link>
                <Link
                  onClick={handleToggle}
                  className="text-decoration-none text-dark"
                  to="/about"
                >
                  About
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link
                  onClick={handleToggle}
                  className="text-decoration-none text-dark"
                  to="/blog"
                >
                  Blog
                </Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link
                  onClick={handleToggle}
                  className="text-decoration-none text-dark"
                  to="/contact"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
