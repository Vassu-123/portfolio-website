import Navbar from "../components/Navbar";
import "./Education.css";
import { portfolioData } from "../data/portfolioData";

function Education() {
  return (
    <>
      <Navbar />

      <section className="education">
        <div className="education-container">
          <h1>Education</h1>
          <p className="education-intro">
            My academic qualifications and achievements.
          </p>

          {portfolioData.education.map((item, index) => (
            <div className="education-card" key={index}>
              <h2>{item.college}</h2>

              <h3>{item.degree}</h3>

              <p>
                <strong>CGPA:</strong> {item.cgpa}
              </p>

              <p>
                <strong>Year:</strong> {item.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Education;