// src/components/About/About.jsx
import React from "react";
import { aboutData } from "../../storage/data";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Bölüm Başlığı (Mobil için üstte de görünebilir ama aşağıda kartın içine aldık) */}

        <div className="row align-items-center gy-5">
          {/* --- GÖRSEL ALANI (Sol) --- */}
          <div className="col-lg-5 position-relative">
            <div className="about-img-wrapper">
              {/* Dekoratif Çerçeve (Arka Plandaki) */}
              <div className="about-frame-back"></div>

              {/* Ana Resim */}
              <img
                src={aboutData.imgSrc}
                alt="Bartu Özaşçı Hakkımda"
                className="img-fluid about-img"
              />

              {/* Dekoratif Köşe Çizgileri (Teknik görünüm için) */}
              <div className="corner-decor top-right"></div>
              <div className="corner-decor bottom-left"></div>
            </div>
          </div>

          {/* --- METİN ALANI (Sağ) --- */}
          <div className="col-lg-7">
            <div className="about-content-card">
              <h2 className="section-title mb-4">
                <span className="text-gradient">{aboutData.title}</span>
              </h2>

              <div className="about-text">
                {aboutData.description.map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Galeri Butonu */}
              <div className="mt-4">
                <a
                  href="/pages/gallery/galeri.html"
                  className="btn-gallery"
                  style={{ textDecoration: "none", display: "inline-block" }}
                >
                  <span>{aboutData.btnText}</span>
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
