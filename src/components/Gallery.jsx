import React, { useEffect, useMemo, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GALLERY_ITEMS = [
  { id: 1, src: process.env.PUBLIC_URL + "/gallery/deans-list-certificate.png", label: "Dean's List Certificate - 1st Sem SY 2024-2025", category: "Awards", date: "1st Sem SY 2024-2025" },
  { id: 2, src: process.env.PUBLIC_URL + "/gallery/elected-treasurer-certificate.png", label: "Elected Treasurer Certificate - End of SY 2024-2025", category: "Awards", date: "End of SY 2024-2025" },
  { id: 3, src: process.env.PUBLIC_URL + "/gallery/top-borrower-sep-2024.png", label: "Top Borrower of Books - September 2024", category: "Awards", date: "September 2024" },
  { id: 4, src: process.env.PUBLIC_URL + "/gallery/top-borrower-oct-2024.png", label: "Top Borrower of Books - October 2024", category: "Awards", date: "October 2024" },
  { id: 5, src: process.env.PUBLIC_URL + "/gallery/top-quiz-scorer.jpg", label: "Highest Quiz Score - SY 2025-2026", category: "Awards", date: "SY 2025-2026" },
  { id: 6, src: process.env.PUBLIC_URL + "/gallery/champion-tip-62nd.png", label: "Champion - Mobile Legends, TIP 62nd Anniversary 2025", category: "Awards", date: "2025" },
  { id: 7, src: process.env.PUBLIC_URL + "/gallery/champion-coess-ga.png", label: "Champion - Mobile Legends, CoESS GA Tournament 2025", category: "Awards", date: "2025" },
  { id: 8, src: process.env.PUBLIC_URL + "/gallery/induction-ceremony-2025.png", label: "Induction Ceremony 2025", category: "Events", date: "2025" },
  { id: 9, src: process.env.PUBLIC_URL + "/gallery/parol-making-2024.png", label: "Parol Making Competition 2024", category: "Events", date: "2024" },
  { id: 10, src: process.env.PUBLIC_URL + "/gallery/cpe-ga-1st-sem-2025.png", label: "CPE General Assembly - 1st Semester 2025", category: "Events", date: "1st Semester 2025" },
  { id: 11, src: process.env.PUBLIC_URL + "/gallery/cpe-ga-2nd-sem-2025.png", label: "CPE General Assembly - 2nd Semester 2025", category: "Events", date: "2nd Semester 2025" },
  { id: 12, src: process.env.PUBLIC_URL + "/gallery/tip-wave-2025.png", label: "TIP Wave 2025", category: "Events", date: "2025" },
  { id: 13, src: process.env.PUBLIC_URL + "/gallery/shs-work-immersion.png", label: "SHS Work Immersion Seminar - November 2025", category: "Events", date: "November 2025" },
  { id: 14, src: process.env.PUBLIC_URL + "/gallery/quantum-clash.png", label: "Quantum Clash - Booth Representative 2026", category: "Events", date: "2026" },
  { id: 15, src: process.env.PUBLIC_URL + "/gallery/innovation-fair-2026.png", label: "Innovation Fair 2026", category: "Events", date: "2026" },
  { id: 16, src: process.env.PUBLIC_URL + "/gallery/nstp-community-outreach.png", label: "NSTP Community Outreach - Barangay Legarda", category: "Events", date: "Barangay Legarda" },
  { id: 19, src: process.env.PUBLIC_URL + "/gallery/cea-week-2025.png", label: "CEA Week 2025", category: "Events", date: "2025" },
  { id: 20, src: process.env.PUBLIC_URL + "/gallery/second-place-cea-week.png", label: "Second Place - CEA Week 2025", category: "Awards", date: "2025" },
  { id: 17, src: process.env.PUBLIC_URL + "/gallery/leadership-positive-difference.jpg", label: "Leadership: Making a Positive Difference - April 2025", category: "Certificates", date: "April 2025" },
  { id: 18, src: process.env.PUBLIC_URL + "/gallery/sustainnovate-2025.jpg", label: "Sustainnovate 2025 - September 2025", category: "Certificates", date: "September 2025" },
  { id: 25, src: process.env.PUBLIC_URL + "/gallery/1st-certificate-menteeship.jpg", label: "1st Certicate for Menteeship 2024", category: "Certificates", date: "2024" },
  { id: 26, src: process.env.PUBLIC_URL + "/gallery/2nd-certificate-menteeship.jpg", label: "2nd Certicate for Menteeship 2024", category: "Certificates", date: "2024" }
];

const categoryClass = {
  Awards: "gallery-pill-award",
  Events: "gallery-pill-event",
  Certificates: "gallery-pill-certificate"
};

const FILTER_TABS = [
  { key: "All", label: "All" },
  { key: "Awards", label: "Awards" },
  { key: "Events", label: "Events" },
  { key: "Certificates", label: "Certificates" }
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    // Prevent stale lightbox index when switching filters.
    setLightboxIndex(null);
  }, [activeFilter]);

  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    setLightboxIndex((current) => {
      if (current === null || filtered.length === 0) return current;
      return (current - 1 + filtered.length) % filtered.length;
    });
  };

  const goNext = () => {
    setLightboxIndex((current) => {
      if (current === null || filtered.length === 0) return current;
      return (current + 1) % filtered.length;
    });
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filtered.length]);

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <h2>Gallery & Evidence</h2>
          <p>Photos, certificates, and proof of involvement</p>
        </div>

        <div className="gallery-filters reveal">
          {FILTER_TABS.map((tab) => (
            <button
              type="button"
              key={tab.key}
              className={`gallery-filter-btn ${activeFilter === tab.key ? "active" : ""}`}
              onClick={() => setActiveFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, index) => (
            <article
              className="gallery-card reveal"
              key={item.id}
              style={{ transitionDelay: `${index * 35}ms` }}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setLightboxIndex(index);
              }}
              role="button"
              tabIndex={0}
            >
              <span className={`gallery-pill ${categoryClass[item.category]}`}>{item.category}</span>
              <div className="gallery-image-wrap">
                <img className="gallery-image" src={item.src} alt={item.label} />
              </div>
              <div className="gallery-label">{item.label}</div>
            </article>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="gallery-modal-overlay" onClick={closeLightbox}>
          <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FiX />
            </button>

            <button
              type="button"
              className="gallery-nav prev"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              className="gallery-nav next"
              onClick={goNext}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>

            <div className="gallery-modal-media">
              <img
                className="gallery-modal-image"
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].label}
              />
            </div>

            <div className="gallery-modal-meta">
              <h3>{filtered[lightboxIndex].label}</h3>
              <p>
                <strong>{filtered[lightboxIndex].category}</strong>
                {" ù "}
                {filtered[lightboxIndex].date}
              </p>
            </div>
          </div>
          <div className="gallery-modal-counter">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
