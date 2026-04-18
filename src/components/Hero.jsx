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

const heroScopedCss = `
/* Scoped hero only — no global .hero / .section conflicts */
section#home.hero-section {
  height: 100vh;
  max-height: 100vh;
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5% 0 6%;
  box-sizing: border-box;
  position: relative;
  gap: 0;
  z-index: 0;
  isolation: isolate;
  background-color: #0a0a0a;
  background-image: linear-gradient(120deg, rgba(0, 230, 118, 0.05) 1px, transparent 1px),
    linear-gradient(30deg, rgba(0, 230, 118, 0.04) 1px, transparent 1px);
  background-size: 38px 38px;
}

section#home.hero-section .hero-left {
  flex: 0 0 55%;
  max-width: 55%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 32px;
  box-sizing: border-box;
  min-width: 0;
}

section#home.hero-section .hero-greeting {
  margin: 0 0 12px;
  color: #00e676;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
}

section#home.hero-section .hero-name {
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
  margin: 0 0 16px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0;
}

section#home.hero-section .hero-name .hero-name-line1,
section#home.hero-section .hero-name .hero-name-line2 {
  display: block;
  line-height: 1;
  margin: 0;
  padding: 0;
}

section#home.hero-section .hero-name .hero-name-line1 {
  white-space: nowrap;
  letter-spacing: -1px;
}

section#home.hero-section .hero-typewriter {
  margin: 0 0 36px;
  color: #00e676;
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 500;
  overflow: visible;
  word-break: break-word;
}

section#home.hero-section .hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 0;
}

section#home.hero-section .hero-right {
  flex: 0 0 45%;
  max-width: 45%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  min-width: 0;
}

section#home.hero-section .hero-photo {
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: bottom center;
  display: block;
  mix-blend-mode: lighten;
  filter: contrast(1.05) brightness(1.02);
  position: relative;
  z-index: 1;
}

section#home.hero-section .hero-stats {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0;
  padding-top: 24px;
  margin-top: 24px;
  border-top: 1px solid #1e1e1e;
  margin-bottom: 0;
  align-items: stretch;
  justify-content: space-between;
}

section#home.hero-section .hero-stat {
  flex: 1 1 22%;
  text-align: center;
  padding: 0 6px;
  border-right: 1px solid #1e1e1e;
  min-width: 5rem;
  max-width: 100%;
  box-sizing: border-box;
}

section#home.hero-section .hero-stat:last-child {
  border-right: none;
}

section#home.hero-section .hero-stat span {
  display: block;
  font-size: 2.2rem;
  color: var(--accent, #00e676);
  font-weight: 800;
  line-height: 1;
}

section#home.hero-section .hero-stat small {
  display: block;
  margin-top: 8px;
  font-size: clamp(0.58rem, 1.1vw, 0.7rem);
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (max-width: 768px) {
  section#home.hero-section {
    height: min(100vh, 900px);
    max-height: min(100vh, 900px);
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 100px 24px 24px;
    overflow: hidden;
  }

  section#home.hero-section .hero-left {
    flex: unset;
    max-width: 100%;
    width: 100%;
    padding-right: 0;
    z-index: 4;
    justify-content: flex-start;
  }

  section#home.hero-section .hero-name {
    font-size: clamp(2.2rem, 10vw, 3.2rem);
  }

  section#home.hero-section .hero-name .hero-name-line1 {
    white-space: nowrap;
    letter-spacing: 0.01em;
  }

  section#home.hero-section .hero-right {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    flex: unset;
    overflow: hidden;
    z-index: 0;
    align-items: flex-end;
    justify-content: center;
    pointer-events: none;
  }

  section#home.hero-section .hero-photo {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    max-width: min(92%, 420px);
    height: auto;
    max-height: 42vh;
    opacity: 0.16;
    object-position: bottom center;
  }

  section#home.hero-section .hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 16px;
    margin-top: 20px;
  }

  section#home.hero-section .hero-stat {
    border-right: none;
    min-width: 0;
    padding: 12px 8px;
  }
}
`;

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
    <>
      <style>{heroScopedCss}</style>
      <section id="home" className="hero-section">
        <div className="hero-left reveal">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 className="hero-name">
            <span className="hero-name-line1">Venn Laurence</span>
            <span className="hero-name-line2">Ruga</span>
          </h1>
          <p className="hero-typewriter">
            {displayedText}
            <span className="type-cursor">|</span>
          </p>

          <div className="hero-cta">
            <a href="#portfolio" className="btn btn-green btn-hero-primary">
              View My Work
            </a>
            <a href="./Ruga_CV.pdf" className="btn btn-outline btn-hero-outline">
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-right reveal">
          <img
            className="hero-photo"
            src="./CpE_Ruga_Treasurer.png"
            alt="Venn Ruga"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
