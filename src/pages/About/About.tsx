import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.scss";

function About() {
  return (
    <Container className="aboutContainer position-relative">
      <Container className="position-absolute top-50 start-50 translate-middle">
        <Row className="pt-5 mt-5 pt-md-0 mt-md-0 aboutRow">
          <Col>
            <h1 className="text-center pb-1 pb-md-3">ABOUT</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center rowOne">
          <Col className="col-md-8 col-lg-6">
            <p className="text-center">
              I'm a finance graduate from Business school who followed an
              unconventional path to find my true passion. Originally drawn to
              the bustling streets of New York, I embarked on a journey in
              sales, seeking new experiences in an unfamiliar city.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center rowTwo">
          <Col className="col-md-8 col-lg-6">
            <p className="text-center">
              As time went on, I discovered my craving for something more
              dynamic and impactful. Transitioning into the world of technology
              felt like a natural progression, allowing me to collaborate with
              like-minded individuals and participate in the creation of
              tangible solutions.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center rowThree">
          <Col className="col-md-8 col-lg-6">
            <p className="text-center">
              I took my first steps with Front-End technologies like HTML, CSS,
              JS, and React, eventually expanding my repertoire to encompass
              Angular, Java, SpringBoot, as well as Infrastructure tools such as
              Terraform, Jenkins, and AWS. This multifaceted skill set empowers
              me to not only envision innovative ideas but also bring them to
              fruition.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
