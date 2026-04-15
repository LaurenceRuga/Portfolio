import React from "react";

const highlights = [
  { icon: "📅", value: "2+", label: "Years of Leadership" },
  { icon: "🗂", value: "10+", label: "Events Organized" },
  { icon: "🏆", value: "3x", label: "Competition Champion" },
  { icon: "📚", value: "Dean's List", label: "Academic Excellence" }
];

function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Highlights">
      <div className="container stats-grid">
        {highlights.map((item, index) => (
          <article className="stat-card reveal" key={item.label} style={{ transitionDelay: `${index * 70}ms` }}>
            <span className="stat-icon">{item.icon}</span>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
