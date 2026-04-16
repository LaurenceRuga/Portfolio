import React, { useEffect, useMemo, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryItems = [
  { category: "Award", label: "Induction Ceremony 2025", date: "2025", src: "/gallery/induction-ceremony-2025.png" },
  { category: "Award", label: "Dean's List Certificate - SY 2024-2025", date: "SY 2024-2025", src: "/gallery/deans-list-certificate.png" },
  { category: "Award", label: "Elected Treasurer Certificate", date: "End of SY 2024-2025", src: "/gallery/elected-treasurer-certificate.png" },
  { category: "Award", label: "Champion - TIP 62nd Anniversary ML 2025", date: "2025", src: "/gallery/champion-tip-62nd.png", rotate: true },
  { category: "Award", label: "Champion - CoESS GA ML Tournament 2025", date: "2025", src: "/gallery/champion-coess-ga.png" },
  { category: "Award", label: "Top Quiz Scorer", date: "2025", src: "/gallery/second-place-cea-week.png" },
  { category: "Award", label: "Top Borrower of Books - Sep 2024", date: "September 2024", src: "/gallery/top-borrower-sep-2024.png", rotate: true },
  { category: "Award", label: "Top Borrower of Books - Oct 2024", date: "October 2024", src: "/gallery/top-borrower-oct-2024.png" },
  { category: "Event", label: "Parol Making Competition 2024", date: "2024", src: "/gallery/parol-making-2024.png" },
  { category: "Event", label: "CPE General Assembly 1st Sem 2025", date: "1st Sem 2025", src: "/gallery/cpe-ga-1st-sem-2025.png" },
  { category: "Event", label: "CPE General Assembly 2nd Sem 2025", date: "2nd Sem 2025", src: "/gallery/cpe-ga-2nd-sem-2025.png" },
  { category: "Event", label: "TIP Wave 2025", date: "2025", src: "/gallery/tip-wave-2025.png" },
  { category: "Event", label: "SHS Work Immersion Seminar", date: "2025", src: "/gallery/shs-work-immersion.png" },
  { category: "Certificate", label: "1st Menteeship Certificate", date: "2024", src: "/gallery/nlc-2025-parol.png" },
  { category: "Event", label: "Sustainovate 2025", date: "2025", src: "/gallery/cea-week-2025.png" },
  { category: "Event", label: "Quantum Clash - Booth Representative", date: "2026", src: "/gallery/quantum-clash.png" },
  { category: "Event", label: "Innovation Fair 2026", date: "2026", src: "/gallery/innovation-fair-2026.png" },
  { category: "Certificate", label: "NSTP Community Outreach - Barangay Legarda", date: "SY 2024-2025", src: "/gallery/nstp-community-outreach.png" }
];

const categoryClass = {
  Award: "gallery-pill-award",
  Event: "gallery-pill-event",
  Certificate: "gallery-pill-certificate"
};

const FILTER_TABS = [
  { key: "all", label: "All" },
  { key: "Award", label: "Awards" },
  { key: "Event", label: "Events" },
  { key: "Certificate", label: "Certificates" }
];

function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (filter === "all") return galleryItems.map((item, index) => ({ item, index }));
    return galleryItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.category === filter);
  }, [filter]);

  const filteredIndices = useMemo(() => filteredItems.map((x) => x.index), [filteredItems]);

  const hasModal = openIndex !== null;

  useEffect(() => {
    // Prevent stale modal/index state when switching filters.
    setOpenIndex(null);
  }, [filter]);

  const activeItem = useMemo(() => {
    if (openIndex === null) return null;
    return galleryItems[openIndex];
  }, [openIndex]);

  useEffect(() => {
    if (!hasModal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      const delta = event.key === "ArrowRight" ? 1 : -1;
      setOpenIndex((current) => {
        if (current === null || filteredIndices.length === 0) return current;
        const pos = filteredIndices.indexOf(current);
        const base = pos === -1 ? 0 : pos;
        const nextPos = (base + delta + filteredIndices.length) % filteredIndices.length;
        return filteredIndices[nextPos];
      });
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasModal, filteredIndices]);

  const goPrev = () => {
    setOpenIndex((current) => {
      if (current === null || filteredIndices.length === 0) return current;
      const pos = filteredIndices.indexOf(current);
      const base = pos === -1 ? 0 : pos;
      const nextPos = (base - 1 + filteredIndices.length) % filteredIndices.length;
      return filteredIndices[nextPos];
    });
  };

  const goNext = () => {
    setOpenIndex((current) => {
      if (current === null || filteredIndices.length === 0) return current;
      const pos = filteredIndices.indexOf(current);
      const base = pos === -1 ? 0 : pos;
      const nextPos = (base + 1) % filteredIndices.length;
      return filteredIndices[nextPos];
    });
  };

  const counterText =
    openIndex !== null ? `${openIndex + 1} / ${galleryItems.length}` : "";

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
              className={`gallery-filter-btn ${filter === tab.key ? "active" : ""}`}
              onClick={() => setFilter(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(({ item, index }, displayIndex) => (
            <article
              className="gallery-card reveal"
              key={item.label}
              style={{ transitionDelay: `${displayIndex * 35}ms` }}
              onClick={() => setOpenIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") setOpenIndex(index);
              }}
              role="button"
              tabIndex={0}
            >
              <span className={`gallery-pill ${categoryClass[item.category]}`}>{item.category}</span>
              <div className={`gallery-image-wrap ${item.rotate ? "gallery-image-wrap-rotated" : ""}`}>
                {/* TODO: Replace src with actual image path */}
                <img
                  className={`gallery-image ${item.rotate ? "gallery-image-rotate" : ""}`}
                  src={item.src}
                  alt={item.label}
                />
              </div>
              <div className="gallery-label">{item.label}</div>
            </article>
          ))}
        </div>
      </div>

      {hasModal && activeItem && (
        <div className="gallery-modal-overlay" onClick={() => setOpenIndex(null)}>
          <div className="gallery-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="gallery-close" onClick={() => setOpenIndex(null)} aria-label="Close">
              <FiX />
            </button>

            <button type="button" className="gallery-nav prev" onClick={goPrev} aria-label="Previous image">
              <FiChevronLeft />
            </button>
            <button type="button" className="gallery-nav next" onClick={goNext} aria-label="Next image">
              <FiChevronRight />
            </button>

            <div className={`gallery-modal-media ${activeItem.rotate ? "gallery-modal-media-rotated" : ""}`}>
              <img
                className={`gallery-modal-image ${activeItem.rotate ? "gallery-image-rotate" : ""}`}
                src={activeItem.src}
                alt={activeItem.label}
              />
            </div>
            <div className="gallery-modal-meta">
              <h3>{activeItem.label}</h3>
              <p>
                <strong>{activeItem.category}</strong>
                {" · "}
                {activeItem.date}
              </p>
            </div>
          </div>
          <div className="gallery-modal-counter">{counterText}</div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
