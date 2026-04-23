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
/* Neutralize global .hero rules (min-height: 100vh, align-items: center) on this section */
section#home.hero {
  min-height: 0;
  align-items: stretch;
}

/* ── Section — tall band like reference; air below nav; portrait fills most of height ── */
section#home {
  height: min(92vh, 880px);
  max-height: min(92vh, 880px);
  min-height: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 0;
  padding: clamp(72px, 11vh, 128px) 5% 0;
  box-sizing: border-box;
  position: relative;
  z-index: 0;
  isolation: isolate;
  background-image: linear-gradient(120deg, rgba(0, 230, 118, 0.05) 1px, transparent 1px),
    linear-gradient(30deg, rgba(0, 230, 118, 0.04) 1px, transparent 1px);
  background-size: 38px 38px;
}

section#home.section {
  padding: clamp(72px, 11vh, 128px) 5% 0;
}

/* ── Shell — centered gutter (reference: ~1180px) ── */
.hero-shell {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  min-height: 0;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

/* ── Row — zero gap; photo column pulled left to overlap name (Emmy-style) ── */
.hero-inner {
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0;
  min-height: 0;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}

/* ── Left column — vertically centered; lower z so shoulder can cover right edge of name ── */
.hero-left {
  flex: 1 1 50%;
  min-width: 0;
  max-width: 54%;
  padding-right: clamp(4px, 1vw, 12px);
  padding-top: 0;
  position: relative;
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
  overflow: visible;
  word-break: break-word;
}

section#home .hero-left .hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

/* ── Right column — tall photo stack; negative margin pulls figure into text for overlap ── */
.hero-right {
  flex: 0 1 50%;
  min-height: 0;
  min-width: min(280px, 38%);
  max-width: min(640px, 52%);
  align-self: stretch;
  height: 100%;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  margin-left: clamp(-140px, -11vw, -48px);
  z-index: 4;
}

/* ── Photo — large inset from top so hair clears section clip; contain keeps full head in frame ── */
.hero-right img {
  position: absolute;
  left: auto;
  right: -25%;
  bottom: 0;
  top: clamp(56px, 7vh, 96px);
  display: block;
  width: auto;
  max-width: min(125%, 720px);
  flex-shrink: 0;
  object-fit: contain;
  object-position: right bottom;
  z-index: 5;
  mix-blend-mode: lighten;
  filter: contrast(1.05) brightness(1.02);
  pointer-events: none;
}

/* ── Stats strip — minimal bottom gap ── */
section#home .hero-stats {
  padding-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  border-top: 1px solid #1e1e1e;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
}

section#home .hero-stats .hero-stat {
  flex: 1 1 22%;
  text-align: center;
  padding: 0 6px;
  border-right: 1px solid #1e1e1e;
  min-width: 5.5rem;
  max-width: 100%;
  box-sizing: border-box;
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
  font-size: clamp(0.58rem, 1.1vw, 0.7rem);
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
}

@media (max-width: 768px) {
  section#home {
    height: min(88vh, 760px);
    max-height: min(88vh, 760px);
    overflow: hidden;
    padding: 108px 24px 0;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    position: relative;
  }

  .hero-shell {
    max-width: 100%;
  }

  .hero-inner {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    height: 100%;
    max-width: 100%;
    position: relative;
  }

  .hero-left {
    position: relative;
    z-index: 4;
    flex: unset;
    width: 100%;
    max-width: 100%;
    padding-right: 0;
    padding-top: 0;
    justify-content: flex-start;
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
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    z-index: 0;
    margin-left: 0;
    padding-right: 0;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .hero-right img {
    position: absolute;
    bottom: 0;
    right: 4%;
    left: auto;
    top: clamp(36px, 10vh, 72px);
    width: auto;
    max-width: min(96%, 520px);
    height: auto;
    max-height: none;
    flex-shrink: 0;
    opacity: 0.18;
    object-fit: contain;
    object-position: right bottom;
    mix-blend-mode: lighten;
    filter: contrast(1.05) brightness(1.02);
    z-index: 3;
  }

  section#home .hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 10px;
    margin-bottom: 0;
    border-top: 1px solid #1e1e1e;
  }

  section#home .hero-stats .hero-stat {
    border-right: none;
    border-bottom: none;
    padding: 12px 10px;
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
        <div className="hero-shell">
          <div className="hero-inner">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
