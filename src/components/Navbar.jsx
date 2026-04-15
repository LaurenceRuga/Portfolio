import React, { useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "achievements", label: "Achievements" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrap">
      <nav className="container navbar">
        <a href="#home" className="brand" onClick={handleNavClick}>
          <span className="brand-icon" />
          <span>Venn Ruga</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-actions ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={handleNavClick}>
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
            <a href="#contact" className="contact-btn" onClick={handleNavClick}>
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
