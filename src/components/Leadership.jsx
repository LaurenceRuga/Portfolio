import React from "react";
import { FiBriefcase, FiClipboard, FiUsers, FiFlag } from "react-icons/fi";

const experiences = [
  {
    icon: <FiBriefcase />,
    title: "DSC Treasurer",
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
    period: "SY 2024-2025",
    points: [
      "Learned treasury, budget management, financial documentation",
      "Co-Project Head: NLC Parol Making Competition"
    ]
  },
  {
    icon: <FiUsers />,
    title: "NSTP Community Outreach",
    period: "SY 2024-2025",
    points: [
      "Project Lead - Mural painting in Barangay Legarda",
      "Managed budget, paperwork, and on-site execution"
    ]
  },
  {
    icon: <FiFlag />,
    title: "Key Events Handled",
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
            <article className="service-card reveal" key={item.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="card-period">{item.period}</p>
              <ul className="card-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
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
