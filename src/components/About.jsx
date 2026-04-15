import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa6";

const tags = [
  "Student Leader",
  "Dean's Lister",
  "Event Organizer",
  "Mobile Legends Player",
  "CpE Student"
];

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-card reveal">
          <div className="about-image-placeholder reveal">
            {/* TODO: Add your photo in About section */}
            <span>[Your Photo Here]</span>
          </div>

          <div className="about-content reveal">
            <h2>About Me</h2>
            <h3>Venn Laurence R. Ruga</h3>
            <h4>Treasurer, Computer Engineering Department Student Council</h4>
            <p className="about-meta">Nickname: Venn | Student Number: 2410566</p>

            <div className="about-bio-placeholder">
              <p>
                Your story goes here - who you are, what drives you, and what you're building toward.
              </p>
              {/* TODO: Replace with your personal bio */}
            </div>

            <div className="quick-info">
              <div className="quick-info-item reveal">
                <FaUserGraduate />
                <span>T.I.P. Manila - 2nd Year CpE</span>
              </div>
              <div className="quick-info-item reveal">
                <FiMail />
                <span>mvlruga@tip.edu.ph</span>
              </div>
              <div className="quick-info-item reveal">
                <FiMapPin />
                <span>Manila, Philippines</span>
              </div>
            </div>

            {/* TODO: Add your CV PDF to /public folder */}
            <a href="./Ruga_CV.pdf" className="btn btn-green about-cv-btn">
              Download CV
            </a>

            <div className="about-tags">
              {tags.map((tag) => (
                <span className="tag-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
