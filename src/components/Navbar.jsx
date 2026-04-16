import React, { useEffect, useMemo, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "portfolio", label: "Portfolio" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" }
];

const sectionNavMap = {
  home: "home",
  skills: "skills",
  about: "about",
  biography: "about",
  background: "about",
  leadership: "leadership",
  achievements: "gallery",
  gallery: "gallery",
  seminars: "portfolio",
  portfolio: "portfolio",
  contact: "contact"
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observedSectionIds = useMemo(() => Object.keys(sectionNavMap), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (!visible.length) return;
        const id = visible[0].target.id;
        const navId = sectionNavMap[id];
        if (navId) setActiveSection(navId);
      },
      { root: null, rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    observedSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [observedSectionIds]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <header className="navbar-wrap">
      <nav className="container navbar">
        <a href="#home" className="brand" onClick={() => handleNavClick("home")}>
          <span className="brand-icon" />
          <span>Venn Ruga</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-actions ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={activeSection === link.id ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-icons">
            <button type="button" aria-label="Search">
              <HiMiniMagnifyingGlass />
            </button>
            <button type="button" aria-label="Menu grid">
              <BsFillGrid3X3GapFill className="grid-icon" />
            </button>
            <a href="#contact" className="contact-btn" onClick={() => handleNavClick("contact")}>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
