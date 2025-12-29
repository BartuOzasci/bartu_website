// src/components/Projects/Projects.jsx
import React, { useState } from "react";
import { projectsData } from "../../storage/data";
import "./Projects.css";

// Tekil Kart Bileşeni (State yönetimi için ayrıldı)
const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-card">
        {/* --- 1. Resim Alanı (Tıklayınca Linke Gider) --- */}
        <div className="project-img-container">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="project-img"
            />
            <div className="img-overlay-icon">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </a>
        </div>

        {/* --- 2. Bilgi Alanı (Kartın Altı) --- */}
        <div className="project-info">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>

          {/* Detay Butonu (Sol Alt) */}
          <button className="btn-details" onClick={toggleDetails}>
            Detaylar <i className="fa-solid fa-chevron-up ms-1"></i>
          </button>
        </div>

        {/* --- 3. Animasyonlu Perde (Overlay) --- */}
        {/* 'active' sınıfı eklenince yukarı kayar */}
        <div className={`project-details-overlay ${isOpen ? "active" : ""}`}>
          <div className="overlay-content">
            <button className="btn-close-overlay" onClick={toggleDetails}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h4 className="overlay-title">{project.title}</h4>
            <p className="overlay-desc">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-light mt-3"
            >
              Projeye Git <i className="fa-solid fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Ana Bileşen

const categoryMap = {
  Tümü: null,
  NLP: ["NLP"],
  Forecasting: ["Forecasting"],
  "Web Development": ["Web Development"],
  Games: ["Games"],
};

const categoryButtons = [
  { label: "Tümü", value: "Tümü" },
  { label: "NLP", value: "NLP" },
  { label: "Forecasting", value: "Forecasting" },
  { label: "Web Development", value: "Web Development" },
  { label: "Games", value: "Games" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // Kategoriye göre filtrele
  const filteredProjects =
    selectedCategory === "Tümü"
      ? projectsData
      : projectsData.filter((project) => {
          const cats = categoryMap[selectedCategory];
          return (
            cats &&
            cats.some((cat) =>
              (project.category || "").toLowerCase().includes(cat.toLowerCase())
            )
          );
        });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="display-title">Projelerim</h2>
          <p className="text-muted">
            Son dönemde geliştirdiğim seçilmiş çalışmalar
          </p>
        </div>

        {/* Kategori Butonları */}
        <div className="project-categories d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categoryButtons.map((btn) => (
            <button
              key={btn.value}
              className={`btn btn-sm px-3 py-2 fw-bold border ${
                selectedCategory === btn.value
                  ? "btn-primary text-white"
                  : "btn-light text-dark"
              }`}
              style={{ borderRadius: "20px" }}
              onClick={() => setSelectedCategory(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center text-muted py-5">
              Bu kategoriye ait proje bulunamadı.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
