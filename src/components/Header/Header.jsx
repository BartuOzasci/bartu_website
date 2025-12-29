// src/components/Header/Header.jsx
import React, { useState, useEffect } from "react";
// Kendi oluşturduğumuz feature bileşenini import ediyoruz
import Typewriter from "../../features/Typewriter";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    // Bölüm aktifliğini scroll ile güncelle
    const sectionIds = ["home", "about", "projects", "contact"];
    const sectionElements = sectionIds.map((id) => document.getElementById(id));
    let ticking = false;
    const handleActiveSection = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "home";
          for (let i = 0; i < sectionElements.length; i++) {
            const el = sectionElements[i];
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 120) {
                current = sectionIds[i];
              }
            }
          }
          setActiveLink(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <header id="home" className="header-section">
      {/* --- NAVBAR --- */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="/img/site_Logo.png" alt="Logo" className="site-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon-custom">
              <i
                className="fa-solid fa-bars-staggered"
                style={{ color: "#111" }}
              ></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a
                  href="#home"
                  className={`nav-link ${
                    activeLink === "home" ? "active-link" : ""
                  }`}
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Ana Sayfa
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className={`nav-link ${
                    activeLink === "about" ? "active-link" : ""
                  }`}
                  onClick={() => onUpdateActiveLink("about")}
                >
                  Hakkımda
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className={`nav-link ${
                    activeLink === "projects" ? "active-link" : ""
                  }`}
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projelerim
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className={`nav-link ${
                    activeLink === "contact" ? "active-link" : ""
                  }`}
                  onClick={() => onUpdateActiveLink("contact")}
                >
                  İletişim
                </a>
              </li>
              {/* CV butonu mobilde de görünsün */}
              <li className="nav-item d-lg-none mt-3">
                <a
                  href="pages/portfolio/portfolio.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="btn btn-sm text-white w-100"
                    style={{
                      background: "var(--blue-brand)",
                      border: "none",
                      padding: "0.5rem 1.2rem",
                    }}
                  >
                    Bartu Özaşçı CV
                  </button>
                </a>
              </li>
            </ul>
            <span className="navbar-text ms-lg-4 d-none d-lg-block">
              <a
                href="pages/portfolio/portfolio.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn btn-sm text-white"
                  style={{
                    background: "var(--blue-brand)",
                    border: "none",
                    padding: "0.5rem 1.2rem",
                  }}
                >
                  Bartu Özaşçı CV
                </button>
              </a>
            </span>
          </div>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <div className="hero-container container d-flex flex-column justify-content-center align-items-center text-center">
        <div className="hero-content">
          <h1
            className="hero-name display-title mb-3"
            style={{ color: "#fff", textShadow: "2px 2px 8px rgba(0,0,0,0.4)" }}
          >
            Bartu Özaşçı
          </h1>
          <Typewriter />
        </div>
      </div>

      <div className="overlay"></div>
    </header>
  );
};

export default Header;
