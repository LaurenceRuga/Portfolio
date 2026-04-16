import React from "react";
import { FiTool } from "react-icons/fi";

const skills = [
  { name: "Python", descriptor: "Numerical methods · 3 projects", red: 3, teal: 5 },
  { name: "React / TypeScript", descriptor: "Capstone project · 1 major project", red: 2, teal: 4 },
  { name: "MySQL", descriptor: "DB coursework · 2 projects", red: 2, teal: 4 },
  { name: "Digital Logic Design", descriptor: "K-maps, 7-seg · 4 projects", red: 3, teal: 6 },
  { name: "PCB / Schematic Design", descriptor: "ExpressSCH/PCB · 2 projects", red: 2, teal: 3 },
  { name: "MATLAB", descriptor: "Iterative solvers · 2 projects", red: 2, teal: 3 },
  { name: "Cisco Networking", descriptor: "Subnetting, Packet Tracer · 2 proj", red: 2, teal: 3 },
  { name: "Tinkercad / Multisim", descriptor: "Circuit simulation · 3 projects", red: 2, teal: 4 }
];

function SkillBlocks({ red, teal }) {
  return (
    <div className="skill-blocks" aria-hidden="true">
      {Array.from({ length: red }).map((_, i) => (
        <span className="skill-block skill-block-red" key={`r-${i}`} />
      ))}
      {Array.from({ length: teal }).map((_, i) => (
        <span className="skill-block skill-block-teal" key={`t-${i}`} />
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            <FiTool /> The Skills
          </h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skills-card reveal" key={skill.name} style={{ transitionDelay: `${index * 50}ms` }}>
              <h3>{skill.name}</h3>
              <p>{skill.descriptor}</p>
              <SkillBlocks red={skill.red} teal={skill.teal} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
