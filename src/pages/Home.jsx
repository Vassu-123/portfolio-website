import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  const { name } = useParams();

  return (
    <>
      <Navbar />

      <div className="home">
        <div className="hero">

          <div className="hero-content">

            <h3 className="welcome">👋 Welcome</h3>

            <h1>
              Hello, I'm <span>{name || "Your Name"}</span>
            </h1>

            <h2>Full Stack Web Developer</h2>

            <p>
              Build modern, responsive, scalable and user-friendly web
              applications using today's latest technologies.
            </p>

            <div className="hero-buttons">

              <button className="btn-primary">
                View Projects
              </button>

              <button className="btn-secondary">
                Download Resume
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Home;