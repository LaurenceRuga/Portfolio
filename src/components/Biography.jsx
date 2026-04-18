import React from "react";
import { FiHeart, FiStar, FiTrendingUp } from "react-icons/fi";

const stories = [
  {
    icon: <FiTrendingUp />,
    title: "Leadership Journey",
    accent: "green",
    text: "My leadership began as a Treasurer Mentee at T.I.P.'s CpE Department Student Council, where I learned financial management, procurement, and event logistics. Even as a mentee, I stepped up as Co-Project Head for the Parol Making Competition. By the end of my first year, I ran for elected Treasurer, won, and was formally inducted in 2025 - shifting my view of leadership from a rank to a responsibility."
  },
  {
    icon: <FiHeart />,
    title: "Service Contributions",
    accent: "teal",
    text: "As Treasurer, I managed procurement and logistics for major org events including TIP Wave, CPE General Assembly, CEA Week, and SHS Work Immersion. I led the CPE Officer Shirt project, headed CPE's NLC Parol Making entry, and served as Games Head during Anniversary Week 2026. I also represented CPE at Quantum Clash and led our NSTP Community Outreach mural project in Barangay Legarda."
  },
  {
    icon: <FiStar />,
    title: "Personal Advocacies",
    accent: "amber",
    text: "I believe good leadership is built on consistency and showing up. Whether buying last-minute materials, filling in for absent officers, or leading a team through a competition final - I always choose to be present. I advocate for an org culture where every member, especially mentees, feels empowered to take initiative and grow beyond their assigned role."
  }
];

function Biography() {
  return (
    <section className="section" id="biography">
      <div className="container">
        <div className="section-head reveal">
          <h2>My Story</h2>
          <p>Leadership, Service, and Growth</p>
        </div>

        <div className="bio-grid">
          {stories.map((item, index) => (
            <article
              className={`bio-card story-card story-card--${item.accent} reveal`}
              key={item.title}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className={`story-accent-bar story-accent-bar--${item.accent}`} aria-hidden="true" />
              <div className={`story-icon story-icon--${item.accent}`}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="story-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Biography;
