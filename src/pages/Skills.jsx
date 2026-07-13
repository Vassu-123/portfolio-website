import Navbar from "../components/Navbar";
import "./Skills.css";
import { portfolioData } from "../data/portfolioData";

function Skills() {
  return (
    <>
      <Navbar />

      <section className="skills">
        <div className="skills-container">

          <h1>Skills</h1>

          <p className="skills-intro">
            Technologies and programming languages.
          </p>

          <div className="skill-category">
            <h2>Frontend</h2>

            <div className="skill-list">
              {portfolioData.skills.frontend.map((skill, index) => (
                <span className="skill-badge" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2>Backend</h2>

            <div className="skill-list">
              {portfolioData.skills.backend.map((skill, index) => (
                <span className="skill-badge" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h2>Programming</h2>

            <div className="skill-list">
              {portfolioData.skills.programming.map((skill, index) => (
                <span className="skill-badge" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;