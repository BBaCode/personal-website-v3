import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

function ErrorPage() {
  return (
    <div>
      <Header></Header>
      <Container className="aboutContainer position-relative">
        <Container className="position-absolute top-50 start-50 translate-middle">
          <Row>
            <Col className="">
              <h1 className="text-center pb-1">PAGE NOT FOUND</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="col-md-8 col-xl-6">
              <p className="text-center">
                Looks like you tried to reach a page that does not exist or is
                no longer available. Feel free to click one of the other links
                above.
              </p>
              <p className="text-center text-danger">404</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ErrorPage;
