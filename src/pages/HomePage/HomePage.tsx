import "./HomePage.scss";
import { FaRegCompass } from "react-icons/fa";

const focusAreas = ["Software", "Games", "Blockchain"];

function HomePage() {
  return (
    <main className="home-page">
      <section className="intro-section" aria-labelledby="intro-title">
        <p className="intro-description">Hello, I'm Brian.</p>
        <p className="intro-description">
          My goal is to create unique and memorable experiences.
        </p>
        <p className="intro-description">
          I like to write about technology, game design, and anything that keep
          me interested.
        </p>
      </section>

      <section className="posts-section" aria-labelledby="posts-title">
        <div>
          <h2 id="posts-title">Posts</h2>
          <p>Notes and essays will live here soon.</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
