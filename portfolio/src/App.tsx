import { FC } from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Hero from "./components/pages/Hero";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Navbar from "./components/pages/navbar";


const App: FC = () => (
  <div>
    <div id="home">
      <Hero />
    </div>
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
