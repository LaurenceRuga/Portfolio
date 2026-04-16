import React from "react";
import { FiHeart, FiStar, FiTrendingUp } from "react-icons/fi";

const stories = [
  {
    icon: <FiTrendingUp />,
    title: "Leadership Journey",
    accent: "green",
    todo: "TODO: Write your leadership story"
  },
  {
    icon: <FiHeart />,
    title: "Service Contributions",
    accent: "teal",
    todo: "TODO: Describe your service work"
  },
  {
    icon: <FiStar />,
    title: "Personal Advocacies",
    accent: "amber",
    todo: "TODO: Share your personal values"
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
              <div className="story-placeholder-box">
                {/* TODO: Add biography paragraph */}
                <p>{item.todo}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Biography;
