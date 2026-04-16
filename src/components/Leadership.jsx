import React from "react";
import { FiBriefcase, FiClipboard, FiUsers, FiFlag, FiChevronRight } from "react-icons/fi";

const experiences = [
  {
    icon: <FiBriefcase />,
    title: "DSC Treasurer",
    org: "Computer Engineering Dept. Student Council",
    period: "SY 2025-2026",
    points: [
      "Managed procurement and logistics for all org events",
      "Led CPE Officer Shirt project (first solo initiative)",
      "Games Head for Anniversary Week 2026 (Call of Duty)"
    ]
  },
  {
    icon: <FiClipboard />,
    title: "DSC Treasurer Mentee",
    org: "Computer Engineering Dept. Student Council",
    period: "SY 2024-2025",
    points: [
      "Learned treasury, budget management, financial documentation",
      "Co-Project Head: NLC Parol Making Competition"
    ]
  },
  {
    icon: <FiUsers />,
    title: "NSTP Community Outreach",
    org: "T.I.P. Manila — NSTP",
    period: "SY 2024-2025",
    points: [
      "Project Lead - Mural painting in Barangay Legarda",
      "Managed budget, paperwork, and on-site execution"
    ]
  },
  {
    icon: <FiFlag />,
    title: "Key Events Handled",
    org: "Campus & departmental organizations",
    period: "Academic Years 2024-2026",
    points: [
      "TIP Wave, CPE General Assembly (x3), CEA Week",
      "SHS Work Immersion, NLC 2025, Anniversary Week",
      "Quantum Clash, Innovation Fair"
    ]
  }
];

function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <div className="section-head reveal">
          <h2>Leadership Experience</h2>
          <p>Student leadership roles, projects, and event execution.</p>
        </div>

        <div className="leadership-grid">
          {experiences.map((item, index) => (
            <article
              className="service-card leadership-card reveal"
              key={item.title}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="period-pill">{item.period}</span>
              <div className="leadership-card-icon">{item.icon}</div>
              <h3 className="leadership-card-title">{item.title}</h3>
              <p className="leadership-card-org">{item.org}</p>

              <ul className="card-points leadership-bullets">
                {item.points.slice(0, 3).map((point) => (
                  <li key={point}>
                    <FiChevronRight />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
