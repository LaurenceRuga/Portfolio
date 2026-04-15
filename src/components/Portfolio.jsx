import React from "react";

const projects = [
  { title: "Project One", category: "Web Application" },
  { title: "Project Two", category: "Embedded Systems" },
  { title: "Project Three", category: "Class Project" },
  { title: "Project Four", category: "Community Project" }
];

function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-head reveal">
          <h2>Portfolio</h2>
          <p>Selected work and shipped products.</p>
        </div>

        {/* TODO: Replace with actual projects - e.g. React apps, Arduino projects, class projects */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className="project-card reveal" key={project.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="project-image-placeholder">
                {/* TODO: Add project thumbnail here */}
                <span>[ Project Preview ]</span>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <span className="project-tag">{project.category}</span>
              </div>

              <div className="project-overlay">
                <button type="button">View Project</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
