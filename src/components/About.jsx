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
      <div className="about-section-inner">
        <h2 className="about-section-title reveal">About Me</h2>
        <div className="about-card reveal">
          <div className="about-card-grid">
            <div className="about-info-col reveal">
              <p className="about-name">Venn Laurence R. Ruga</p>
              <p className="about-role">Treasurer, Computer Engineering Department Student Council</p>

              <div className="quick-info">
                <div className="quick-info-item">
                  <FaUserGraduate />
                  <span>T.I.P. Manila — 2nd Year CpE</span>
                </div>
                <div className="quick-info-item">
                  <FiMail />
                  <span>mvlruga@tip.edu.ph</span>
                </div>
                <div className="quick-info-item">
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

            <div className="about-bio-col reveal">
              <h3 className="about-bio-heading">Who am I?</h3>
              <div className="about-bio-placeholder">
                <p>
                  <em>Your story goes here...</em>
                </p>
                {/* TODO: Write your personal bio */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
