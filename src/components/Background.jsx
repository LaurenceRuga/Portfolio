import React from "react";

function CompetencyBlocks({ filled, total = 10 }) {
  return (
    <div className="skill-blocks competency-blocks" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={`c-${i}`}
          className={`skill-block ${i < filled ? "competency-block-filled" : "competency-block-empty"}`}
        />
      ))}
    </div>
  );
}

function Background() {
  return (
    <section className="section" id="background">
      <div className="container">
        <div className="section-head reveal">
          <h2>Background</h2>
          <p>Education, affiliations, and competencies</p>
        </div>

        <div className="background-grid">
          <div className="timeline-card timeline-card-scroll reveal">
            <h3>Education & Affiliations</h3>

            <div className="vertical-timeline">
              <div className="timeline-group timeline-group--timeline">
                <h4>Education</h4>
                <div className="timeline-item-vertical reveal">
                  <h5>Technological Institute of the Philippines, Manila</h5>
                  <p>B.S. Computer Engineering | 2024 – Present</p>
                  <span className="timeline-badge">?? Dean&apos;s List — 1st Sem SY 2024–2025</span>
                </div>
                <div className="timeline-item-vertical reveal">
                  <h5>Dr. Carlos Lanting College</h5>
                  <p>Senior High School | 2022 – 2024</p>
                  <span className="timeline-badge">?? With Honors — SY 2022–2023</span>
                  <span className="timeline-badge">?? With Honors — SY 2023–2024</span>
                </div>
              </div>

              <div className="timeline-group timeline-group--timeline">
                <h4>Organizational Affiliations</h4>
                <div className="timeline-item-vertical reveal">
                  <h5>Computer Engineering Dept. Student Council</h5>
                  <p>Treasurer (SY 2025-2026)</p>
                </div>
                <div className="timeline-item-vertical reveal">
                  <h5>Computer Engineering Dept. Student Council</h5>
                  <p>Treasurer Mentee (SY 2024-2025)</p>
                </div>
                <div className="timeline-item-vertical reveal">
                  <h5>Computer Engineering Student Society</h5>
                  <p>Member</p>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <article className="skill-card reveal">
              <h3>Competencies</h3>
              <p className="competency-intro">Leadership &amp; Management</p>
              <div className="competency-row">
                <span className="competency-label">Financial Management</span>
                <CompetencyBlocks filled={8} />
              </div>
              <div className="competency-row">
                <span className="competency-label">Event Logistics</span>
                <CompetencyBlocks filled={7} />
              </div>
              <div className="competency-row">
                <span className="competency-label">Project Management</span>
                <CompetencyBlocks filled={7} />
              </div>
            </article>

            <article className="skill-card reveal">
              <h3>Extracurricular</h3>
              <ul>
                <li>Mobile Legends: Champion - TIP 62nd Anniversary 2025</li>
                <li>Mobile Legends: 2nd Place - CEA Week 2025</li>
                <li>Mobile Legends: Champion - CoESS GA 2025</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;
