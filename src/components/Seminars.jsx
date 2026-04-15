import React from "react";
import { FiBookOpen, FiMonitor } from "react-icons/fi";

const seminars = [
  {
    icon: <FiMonitor />,
    title: "Computer Engineering Elective Seminar",
    date: "November 7, 2025",
    scope: "Departmental",
    scopeClass: "scope-departmental",
    details:
      "Tracks: System Administration, Cybersecurity, Data Science, Cyber-Physical Systems, Railway Engineering"
  },
  {
    icon: <FiBookOpen />,
    title: "Cybersecurity Awareness Month Seminar",
    date: "October 8, 2024",
    scope: "Institutional",
    scopeClass: "scope-institutional",
    details: "Cybercrime prevention and awareness"
  },
  {
    icon: <FiMonitor />,
    title: "Sustainnovate 2025",
    date: "September 3, 2025",
    scope: "Departmental",
    scopeClass: "scope-departmental",
    details: "Senior thesis showcase - overview of CpE career horizon"
  }
];

function Seminars() {
  return (
    <section className="section" id="seminars">
      <div className="container">
        <div className="section-head reveal">
          <h2>Seminars & Training</h2>
          <p>Learning engagements that shaped leadership and technical perspective.</p>
        </div>

        <div className="seminars-grid">
          {seminars.map((seminar, index) => (
            <article className="seminar-card reveal" key={seminar.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="seminar-icon">{seminar.icon}</div>
              <h3>{seminar.title}</h3>
              <p className="seminar-date">{seminar.date}</p>
              <span className={`scope-pill ${seminar.scopeClass}`}>{seminar.scope}</span>
              <p>{seminar.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Seminars;
