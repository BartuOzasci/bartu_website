// Projeleri data.js'den çekerken kullanacağın kart yapısı
import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  // Kartın detay kısmının açık olup olmadığını kontrol eden state
  const [showDetail, setShowDetail] = useState(false);

  // Detay penceresini aç/kapat fonksiyonu
  const toggleDetail = (e) => {
    e.preventDefault(); // Sayfanın yukarı atmasını engelle
    e.stopPropagation(); // Linkin tetiklenmesini engelle (eğer iç içeyse)
    setShowDetail(!showDetail);
  };

  return (
    <div className="project-card">
      {/* 1. Kısım: Resim (Link içerir) */}
      <a href={project.link} target="_blank" rel="noreferrer" className="card-img-link">
        <img src={project.img} alt={project.title} className="card-img" />
        {/* Resim üzerine hover ikon (Opsiyonel görsel zenginlik) */}
        <div className="img-hover-overlay">
          <i className="bi bi-box-arrow-up-right"></i>
        </div>
      </a>

      {/* 2. Kısım: Alt Bilgi (İsim ve Detay Butonu) */}
      <div className="card-info">
        <h5 className="project-title">{project.title}</h5>
        
        {/* Sol alttaki detay butonu */}
        <button className="btn-detail" onClick={toggleDetail}>
          Detay <i className="bi bi-plus-circle-fill ms-1"></i>
        </button>
      </div>

      {/* 3. Kısım: Siyah Perde (Overlay) */}
      <div className={`detail-overlay ${showDetail ? 'active' : ''}`}>
        <div className="overlay-content">
          <h4 className="overlay-title">{project.title}</h4>
          <p className="overlay-desc">{project.desc}</p>
          
          {/* Kapatma Butonu */}
          <button className="btn-close-overlay" onClick={toggleDetail}>
            <i className="bi bi-x-lg"></i> Kapat
          </button>
          
          {/* İçeriden de projeye gitme linki */}
          <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light mt-3">
            Projeye Git
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;