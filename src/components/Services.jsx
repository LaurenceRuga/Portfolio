import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    text: "Modern frontend and backend application delivery."
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive UI",
    text: "Mobile-first interfaces for all screen sizes."
  },
  {
    icon: <FaServer />,
    title: "API Integration",
    text: "Secure API architecture and cloud integrations."
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    text: "Professional, conversion-focused digital experiences."
  }
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <h2>Services</h2>
          <p>{/* REPLACE: Add section intro */}Solutions tailored to your product goals.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              {/* REPLACE: Add service detail */}
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
