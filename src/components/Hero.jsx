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
  { value: "1", label: "Dean's List" }
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentRole.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentRole) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const nextText = currentRole.slice(0, displayedText.length - 1);
        setDisplayedText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="hero-greeting">Hi, I'm</p>
          <h1>Venn Laurence Ruga</h1>
          <h2 className="hero-subtitle typewriter-line">
            {displayedText}
            <span className="type-cursor">|</span>
          </h2>
          <p>{/* TODO: Add 1-2 sentence personal tagline */}</p>

          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-green">
              View My Work
            </a>
            {/* TODO: Add your CV PDF to /public folder */}
            <a href="./Ruga_CV.pdf" className="btn btn-outline">
              Download CV
            </a>
          </div>

          <div className="hero-stats-strip reveal">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-placeholder reveal">
          {/* TODO: Add your photo here */}
          <span>[Your Photo Here]</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
