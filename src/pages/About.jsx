import Navbar from "../components/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">
        <div className="about-container">

          <h1>About Me</h1>

          <p className="about-intro">
            Welcome to this professional portfolio website. This template is
            designed to showcase skills, education, projects, experience, and
            achievements in a clean and modern way.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <h2>🎯 Career Objective</h2>

              <p>
                Passionate about building responsive, scalable and
                user-friendly web applications using modern technologies.
                Continuously learning new skills and solving real-world
                problems through software development.
              </p>
            </div>

            <div className="about-card">
              <h2>💻 Technologies</h2>

              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Git & GitHub</li>
              </ul>
            </div>

            <div className="about-card">
              <h2>🚀 Strengths</h2>

              <ul>
                <li>Problem Solving</li>
                <li>Quick Learner</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Adaptability</li>
              </ul>
            </div>

            <div className="about-card">
              <h2>🌍 Portfolio Features</h2>

              <ul>
                <li>Responsive Design</li>
                <li>Modern UI</li>
                <li>Reusable Components</li>
                <li>Dynamic Routing</li>
                <li>Easy Customization</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;