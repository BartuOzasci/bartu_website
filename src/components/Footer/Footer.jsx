// Footer bileşeni
import React from 'react';
import './Footer.css';
import { contactConfig } from '../../data/data';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Sol Kısım: Telif Yazısı */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="copyright-text mb-0">
              © {year} <strong>Bartu Özaşçı</strong>. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Sağ Kısım: Sosyal Medya İkonları */}
          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons">
              {/* GitHub */}
              <a href={contactConfig.social.github} target="_blank" rel="noreferrer" className="social-btn github">
                <i className="bi bi-github"></i>
              </a>
              
              {/* LinkedIn */}
              <a href={contactConfig.social.linkedin} target="_blank" rel="noreferrer" className="social-btn linkedin">
                <i className="bi bi-linkedin"></i>
              </a>

              {/* Instagram */}
              <a href={contactConfig.social.instagram} target="_blank" rel="noreferrer" className="social-btn instagram">
                <i className="bi bi-instagram"></i>
              </a>

              {/* Mail */}
              <a href={contactConfig.social.email} className="social-btn email">
                <i className="bi bi-envelope-fill"></i>
              </a>

              {/* Telefon */}
              <a href={contactConfig.social.phone} className="social-btn phone">
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;