import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Tower Defense Game",
    category: "Object Oriented Programming",
    image: process.env.PUBLIC_URL + "/projects/tower-defense-oop.png",
    shortDescription: "A class project where I applied OOP principles through game entities and tower logic.",
    description:
      "This Tower Defense game was built as part of my Object Oriented Programming subject. I designed the game using object-oriented concepts such as encapsulation, inheritance, and polymorphism to manage towers, enemies, waves, and game states. The project helped me practice clean class design, reusable logic, and event-driven interactions in a full playable game loop."
  }
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-head reveal">
          <h2>Portfolio</h2>
          <p>Selected work and shipped products.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article
              className="project-card reveal project-card-clickable"
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setSelectedProject(project);
              }}
            >
              <div className="project-image-placeholder">
                <img className="project-image" src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>
                <span className="project-tag">{project.category}</span>
                <p className="project-description">{project.shortDescription}</p>
              </div>

              <div className="project-overlay">
                <button type="button" onClick={() => setSelectedProject(project)}>
                  View Project
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project preview"
            >
              <FiX />
            </button>
            <div className="project-modal-media">
              <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-image" />
            </div>
            <div className="project-modal-meta">
              <h3>{selectedProject.title}</h3>
              <p className="project-modal-tag">{selectedProject.category}</p>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
