import React from "react";
import { FaCircle, FaFacebook, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "../constants/social";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <FaCircle className="accent-icon" />
          <span>Available for work</span>
        </div>

        <div className="topbar-right social-links">
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
  );
}

export default Topbar;
