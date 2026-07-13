import Navbar from "../components/Navbar";
import "./Projects.css";
import { portfolioData } from "../data/portfolioData";

function Projects() {
  return (
    <>
      <Navbar />

      <section className="projects">
        <div className="projects-container">

          <h1>Projects</h1>

          <p className="projects-intro">
            Some of my featured projects.
          </p>

          <div className="project-grid">

            {portfolioData.projects.map((project, index) => (

              <div className="project-card" key={index}>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <p>
                  <strong>Technologies:</strong> {project.technologies}
                </p>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;