import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

function ContactPage() {
  return (
    <Container className="aboutContainer">
      <Container className="position-absolute top-50 start-50 translate-middle mb-xl-5">
        <Row>
          <Col>
            <h1 className="text-center pb-1">GET IN TOUCH</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              Need to reach out? Find me anywhere below:
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center col-auto">
            <div
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:brianbsstt@gmail.com";
              }}
            >
              <FaEnvelope />
            </div>
          </Col>
          <Col className="text-center col-auto">
            <a href="https://www.linkedin.com/in/brian-d-bassett/">
              <FaLinkedin className="linkedin" />
            </a>
          </Col>
          <Col className="text-center col-auto">
            <a href="https://github.com/BBaCode">
              <FaGithub className="github" />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactPage;
