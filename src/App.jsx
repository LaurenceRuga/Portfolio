import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Biography from "./components/Biography";
import Background from "./components/Background";
import Leadership from "./components/Leadership";
import Achievements from "./components/Achievements";
import Seminars from "./components/Seminars";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Biography />
        <Background />
        <Leadership />
        <Achievements />
        <Seminars />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
