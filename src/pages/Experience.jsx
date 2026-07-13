import Navbar from "../components/Navbar";
import "./Experience.css";
import { portfolioData } from "../data/portfolioData";

function Experience() {
  return (
    <>
      <Navbar />

      <section className="experience">
        <div className="experience-container">
          <h1>Experience</h1>

          <p className="experience-intro">
            Internship, training and professional experience.
          </p>

          {portfolioData.experience.map((item, index) => (
            <div className="experience-card" key={index}>
              <h2>{item.company}</h2>

              <h3>{item.role}</h3>

              <h4>{item.duration}</h4>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;