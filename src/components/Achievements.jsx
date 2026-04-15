import React from "react";
import { FiAward } from "react-icons/fi";
import { FaTrophy, FaMedal } from "react-icons/fa";

const regularAwards = [
  {
    icon: <FiAward />,
    title: "Dean's List",
    details: "1st Semester, SY 2024-2025 | Institutional",
    org: "T.I.P. Manila"
  },
  {
    icon: <FiAward />,
    title: "Top Borrower of Books",
    details: "September 2024 & October 2024 | Institutional",
    org: "T.I.P. Library"
  },
  {
    icon: <FiAward />,
    title: "Highest Quiz Score",
    details: "SY 2025-2026 | Departmental",
    org: "Computer Engineering Department"
  },
  {
    icon: <FiAward />,
    title: "Elected Treasurer",
    details:
      "Computer Engineering Department Student Council | End of SY 2024-2025 | Departmental",
    org: "Won election after serving as Treasurer Mentee"
  }
];

const spotlightAwards = [
  {
    icon: <FaTrophy />,
    title: "CHAMPION - Mobile Legends",
    details: "TIP Manila 62nd Anniversary 2025 | Institutional"
  },
  {
    icon: <FaMedal />,
    title: "2nd Place - Mobile Legends",
    details: "TIP CEA Week 2025 | Institutional"
  },
  {
    icon: <FaTrophy />,
    title: "CHAMPION - Mobile Legends Tournament",
    details: "TIP Manila CoESS General Assembly 2025 | Departmental"
  }
];

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-head reveal">
          <h2>Achievements & Awards</h2>
          <p>Academic, leadership, and competition milestones.</p>
        </div>

        <div className="awards-grid">
          {regularAwards.map((award, index) => (
            <article className="award-card reveal" key={award.title} style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.details}</p>
              <p className="award-org">{award.org}</p>
            </article>
          ))}
        </div>

        <div className="champion-grid">
          {spotlightAwards.map((award, index) => (
            <article className="champion-card reveal" key={award.title} style={{ transitionDelay: `${index * 80}ms` }}>
              <span className="champion-badge">CHAMPION</span>
              <div className="champion-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
