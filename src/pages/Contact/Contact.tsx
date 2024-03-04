import { Container, Row, Col, Button } from "react-bootstrap";
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
            <Button
              variant="secondary"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:brianbsstt@gmail.com";
              }}
            >
              Mail
            </Button>
          </Col>

          <Col className="text-center col-auto">
            <a href="https://www.linkedin.com/in/brian-d-bassett/">
              <Button size="lg" variant="primary">
                LinkedIn
              </Button>
            </a>
          </Col>
          <Col className="text-center col-auto">
            <a href="https://github.com/BBaCode">
              <Button size="lg" variant="dark">
                Github
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactPage;
