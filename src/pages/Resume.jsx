import Navbar from "../components/Navbar";
import "./resume.css";

function Resume() {
  return (
    <>
      <Navbar />

      <section className="resume">
        <div className="resume-container">

          <h1>Resume</h1>

          <p className="resume-intro">
            Download my latest resume to know more about my education,
            technical skills, projects and experience.
          </p>

          <div className="resume-card">

            <h2>Professional Resume</h2>

            <p>
              My resume includes my academic background, technical skills,
              certifications, internships and projects.
            </p>

            <a
              href="/resume.pdf"
              download
              className="resume-btn"
            >
              Download Resume
            </a>

          </div>

        </div>
      </section>
    </>
  );
}

export default Resume;