import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Biography from "./components/Biography";
import Background from "./components/Background";
import Leadership from "./components/Leadership";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Seminars from "./components/Seminars";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import useScrollReveal from "./hooks/useScrollReveal";

const sectionDividerStyle = {
  height: "1px",
  background: "linear-gradient(90deg, transparent, #00e67633, transparent)",
  margin: "0 10%",
};

function SectionDivider() {
  return <div className="section-divider" style={sectionDividerStyle} aria-hidden="true" />;
}

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Biography />
        <SectionDivider />
        <Background />
        <SectionDivider />
        <Leadership />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Seminars />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
