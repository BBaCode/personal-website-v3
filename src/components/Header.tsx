import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";
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
        className="site-navbar"
        data-bs-theme="dark"
      >
        <Container className="nav-container">
          <Navbar.Brand>
            <Link className="brand-link" to="/" onClick={() => setExpanded(false)}>
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
            <Nav className="justify-content-center nav-actions">
              <Nav.Link
                href="https://github.com/BBaCode"
                rel="noreferrer"
                target="_blank"
                onClick={() => setExpanded(false)}
              >
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/brian-d-bassett/"
                rel="noreferrer"
                target="_blank"
                onClick={() => setExpanded(false)}
              >
                <FaLinkedinIn aria-hidden="true" />
                <span>LinkedIn</span>
              </Nav.Link>
              <Nav.Link as="span" className="availability">
                <span className="availability-dot" aria-hidden="true" />
                Building experiences
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
