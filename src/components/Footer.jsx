import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "../constants/social";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col-brand">
          <div className="footer-brand">
            <span className="brand-icon" />
            <span>Venn Ruga</span>
          </div>
          <p className="footer-tagline">Computer Engineering Student | T.I.P. Manila</p>
        </div>

        <nav className="footer-col footer-col-nav" aria-label="Footer">
          <ul className="footer-links-grid">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#leadership">Leadership</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="footer-col footer-col-social">
          <div className="footer-social social-links">
            {/* TODO: Replace with real Facebook URL */}
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            {/* TODO: Replace with real GitHub username */}
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={SOCIAL_LINKS.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Venn Laurence R. Ruga. Built with React.js</p>
      </div>
    </footer>
  );
}

export default Footer;
