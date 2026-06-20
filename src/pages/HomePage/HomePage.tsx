import dk from "../../assets/dk.png";
import "./HomePage.scss";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaRegCompass,
} from "react-icons/fa";

const profileLinks = [
  {
    href: "https://github.com/BBaCode",
    label: "GitHub",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    href: "https://www.linkedin.com/in/brian-d-bassett/",
    label: "LinkedIn",
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
];

const focusAreas = ["Interactive systems", "Blockchain", "Game design"];

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Brian Bassett creates digital experiences.</h1>
          <p className="hero-description">
            I am drawn to building things that create meaningful experiences and
            real value for people. Right now my interests are centered on
            blockchain technology, game design, and the creative space where
            software becomes something people want to spend time with.
          </p>

          <div className="hero-actions" aria-label="Profile links">
            {profileLinks.map((link) => (
              <a
                className="profile-link"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.icon}
                <span>{link.label}</span>
                <FaArrowRight className="arrow-icon" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="portrait-panel" aria-label="Portrait">
          <img src={dk} alt="Brian Bassett" />
          <div className="portrait-meta">
            <span>Exploring</span>
            <strong>Play, ownership, and creative tools</strong>
          </div>
        </div>
      </section>

      <section className="focus-section" aria-label="Current interests">
        <div className="section-heading">
          <FaRegCompass aria-hidden="true" />
          <span>Current focus</span>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <div className="focus-card" key={area}>
              {area}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
