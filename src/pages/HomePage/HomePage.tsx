import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meAndTucker from "../../assets/tucker.jpg";
import "./HomePage.scss";

function HomePage() {
  return (
    <Container>
      <Row className="row-cols-1 row-cols-md-2 pt-5 mt-5">
        <Col className="col-md-5 col-xl-4">
          <h1 className="mb-0 text-center text-md-start title1">DEVELOPER.</h1>
          <h1 className="mb-0 text-center text-md-start title2">LEARNER.</h1>
          <h1 className="pb-3 text-center text-md-start title3">
            VOLLEYBALLER.
          </h1>
          <p className="pb-3 text-center text-md-start bodyText">
            Born in 1997 just outside of Boston, Massachusetts, I've been
            captivated by the world of software since an early age. Currently,
            I'm proud to be a part of the Fidelity Investments team, where I
            contribute my skills as a software engineer. I'm dedicated to
            expanding my knowledge of web and backend technologies as I navigate
            the early stages of my career. Beyond the world of code, I find joy
            in a variety of interests - from reading Sci-Fi to beach and indoor
            volleyball. I also enjoy playing Blues and Folk guitar (badly) and
            gaming once in a while. Thanks for checking me out and joining me on
            this journey of exploration and innovation!
          </p>
        </Col>
        <Col className="col-md-7 col-xl-8 rectangle-container">
          <img className="w-100 dk" src={meAndTucker} alt="meAndTucker" />
          <p>Picture of myself and my girlfriend's family dog: Tucker</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;