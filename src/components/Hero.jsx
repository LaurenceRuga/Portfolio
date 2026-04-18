import React, { useEffect, useState } from "react";

const roles = [
  "Computer Engineering Student",
  "Student Council Treasurer",
  "Event Logistics Leader",
  "Dean's Lister"
];

const heroStats = [
  { value: "2+", label: "Years in Leadership" },
  { value: "10+", label: "Events Managed" },
  { value: "3x", label: "Competition Champion" },
  { value: "★", label: "Dean's List" }
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        const nextText = currentRole.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        const nextText = currentRole.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="section hero" id="home">
      <div className="hero-layout">
        <div className="hero-content reveal">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1>Venn Laurence Ruga</h1>
          <p className="hero-typewriter">
            {displayedText}
            <span className="type-cursor">|</span>
          </p>

          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-green btn-hero-primary">
              View My Work
            </a>
            {/* TODO: Add your CV PDF to /public folder */}
            <a href="./Ruga_CV.pdf" className="btn btn-outline btn-hero-outline">
              Download CV
            </a>
          </div>

          <div className="hero-stats-strip">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo-col reveal">
          <div className="hero-photo-frame">
            <div className="hero-photo-placeholder">
            <img src="./photo.jpg" alt="Venn Ruga" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
