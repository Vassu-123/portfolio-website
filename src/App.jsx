import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;