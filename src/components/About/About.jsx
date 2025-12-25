import React from 'react';
import './About.css';
import { aboutData } from '../../data/data';
import bartuImg from '../../assets/img/bartuPP.png';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Sol Taraf: Fotoğraf Alanı */}
          <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 text-center">
            <div className="image-frame-wrapper">
              {/* Dekoratif arka çerçeve */}
              <div className="frame-backdrop"></div>
              {/* Asıl Resim */}
              <img src={bartuImg} alt="Bartu Özaşçı" className="img-fluid profile-img" />
            </div>
          </div>

          {/* Sağ Taraf: Yazı ve Butonlar */}
          <div className="col-lg-6 col-md-12">
            <div className="content-frame">
              <h2 className="section-title mb-4">{aboutData.title}</h2>
              
              <div className="text-content">
                {aboutData.paragraphs.map((text, index) => (
                  <p key={index} className="about-text">
                    {text}
                  </p>
                ))}
              </div>

              <div className="button-group mt-4 d-flex gap-3">
                <a href={aboutData.btn1.link} className="btn btn-custom-primary">
                  <i className="bi bi-images me-2"></i> {aboutData.btn1.text}
                </a>
                <a href={aboutData.btn2.link} className="btn btn-custom-outline" target="_blank" rel="noreferrer">
                  <i className="bi bi-file-earmark-person me-2"></i> {aboutData.btn2.text}
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