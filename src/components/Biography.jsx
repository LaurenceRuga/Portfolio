import React from "react";
import { FiAward, FiHeart, FiStar } from "react-icons/fi";

const stories = [
  {
    icon: <FiAward />,
    title: "Leadership Journey",
    todo: "TODO: Write your leadership story"
  },
  {
    icon: <FiHeart />,
    title: "Service Contributions",
    todo: "TODO: Describe your service work"
  },
  {
    icon: <FiStar />,
    title: "Personal Advocacies",
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

        {/* Content from biographical note document - add when ready */}
        <div className="bio-grid">
          {stories.map((item, index) => (
            <article className="bio-card reveal" key={item.title} style={{ transitionDelay: `${index * 70}ms` }}>
              <div className="bio-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <div className="bio-placeholder">
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
