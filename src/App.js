import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="text-gray-400 body-font max-w-screen-xl mx-auto border-black border-2">
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
