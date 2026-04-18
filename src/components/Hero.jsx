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
/* ── Section wrapper ── */
section#home {
  height: 100vh;
  max-height: 100vh;
  min-height: 0;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  gap: 0;
  padding: 0 6%;
  box-sizing: border-box;
  position: relative;
  background-image: linear-gradient(120deg, rgba(0, 230, 118, 0.05) 1px, transparent 1px),
    linear-gradient(30deg, rgba(0, 230, 118, 0.04) 1px, transparent 1px);
  background-size: 38px 38px;
}

section#home.section {
  padding: 0 6%;
}

/* ── Left column (text) ── */
.hero-left {
  flex: 0 0 52%;
  min-height: 0;
  min-width: 0;
  padding-right: 40px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
}

section#home .hero-left .hero-greeting {
  margin: 0 0 12px;
  color: #00e676;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
}

section#home .hero-left h1.hero-title {
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -2px;
  margin: 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1;
}

/* “Venn Laurence” + “Ruga” — tight two lines, no extra gap from <br> line boxes */
section#home .hero-left h1.hero-title .hero-name-line1,
section#home .hero-left h1.hero-title .hero-name-line2 {
  display: block;
  line-height: 1;
  margin: 0;
  padding: 0;
}

section#home .hero-left h1.hero-title .hero-name-line1 {
  white-space: nowrap;
  letter-spacing: -1px;
}

section#home .hero-left .hero-typewriter {
  margin: 0 0 36px;
  color: #00e676;
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 500;
  height: auto;
}

section#home .hero-left .hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
}

/* ── Right column (photo container) ── */
.hero-right {
  flex: 0 0 48%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

/* ── Photo itself — tall enough that head reads above “HI, I’M” (clipped by .hero-right) ── */
.hero-right img {
  height: 128%;
  width: auto;
  max-width: none;
  object-fit: contain;
  object-position: bottom center;
  display: block;
  mix-blend-mode: lighten;
  filter: contrast(1.05) brightness(1.02);
  flex-shrink: 0;
}

/* ── Stats strip ── */
section#home .hero-stats {
  padding-top: 24px;
  padding-bottom: 0;
  margin-bottom: 0;
  border-top: 1px solid #1e1e1e;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}

section#home .hero-stats .hero-stat {
  flex: 1 1 0;
  text-align: center;
  padding: 0 10px;
  border-right: 1px solid #1e1e1e;
  min-width: 0;
}

section#home .hero-stats .hero-stat:last-child {
  border-right: none;
}

section#home .hero-stats .hero-stat span {
  display: block;
  font-size: 2.2rem;
  color: var(--accent, #00e676);
  font-weight: 800;
  line-height: 1;
}

section#home .hero-stats .hero-stat small {
  display: block;
  margin-top: 8px;
  font-size: 0.7rem;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  section#home {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    padding: 100px 24px 32px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }

  .hero-left {
    position: relative;
    z-index: 2;
    flex: unset;
    width: 100%;
    padding-right: 0;
  }

  section#home .hero-left h1.hero-title {
    font-size: clamp(2.2rem, 10vw, 3.2rem);
  }

  section#home .hero-left h1.hero-title .hero-name-line1 {
    white-space: nowrap;
    letter-spacing: 0.01em;
  }

  .hero-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
    z-index: 0;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .hero-right img {
    left: auto;
    right: 0;
    transform: none;
    max-height: 88%;
    max-width: 100%;
    opacity: 0.18;
    object-fit: contain;
    object-position: right bottom;
    mix-blend-mode: lighten;
    filter: contrast(1.05) brightness(1.02);
  }

  section#home .hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    border-top: 1px solid #1e1e1e;
  }

  section#home .hero-stats .hero-stat {
    border-right: none;
    border-bottom: none;
    padding: 16px 10px;
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
      <section className="section hero" id="home">
        <div className="hero-left reveal">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 className="hero-title">
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
          <img src="./CpE_Ruga_Treasurer.png" alt="Venn Ruga" />
        </div>
      </section>
    </>
  );
}

export default Hero;
