import React from "react";

function Background() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <h2>Background</h2>
          <p>Education, affiliations, and competencies</p>
        </div>

        <div className="background-grid">
          <div className="timeline-card reveal">
            <h3>Education & Affiliations</h3>

            <div className="timeline-group">
              <h4>Education</h4>
              <div className="timeline-item reveal">
                <h5>Technological Institute of the Philippines, Manila</h5>
                <p>B.S. Computer Engineering | 2024 - Present</p>
                <p>Dean's List, 1st Semester SY 2024-2025</p>
              </div>
            </div>

            <div className="timeline-group">
              <h4>Organizational Affiliations</h4>
              <div className="timeline-item reveal">
                <h5>Computer Engineering Dept. Student Council</h5>
                <p>Treasurer (SY 2025-2026)</p>
              </div>
              <div className="timeline-item reveal">
                <h5>Computer Engineering Dept. Student Council</h5>
                <p>Treasurer Mentee (SY 2024-2025)</p>
              </div>
              <div className="timeline-item reveal">
                <h5>Computer Engineering Student Society</h5>
                <p>Member</p>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <article className="skill-card reveal">
              <h3>Leadership & Management</h3>
              <ul>
                <li>Financial Management & Procurement</li>
                <li>Event Logistics & Coordination</li>
                <li>Project Management</li>
              </ul>
            </article>

            <article className="skill-card reveal">
              <h3>Technical Skills</h3>
              {/* TODO: Add your technical/programming skills */}
              <div className="skill-placeholder" />
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
