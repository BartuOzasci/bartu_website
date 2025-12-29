// src/components/Footer/Footer.jsx
import React from 'react';
import { footerData } from '../../storage/data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          
          {/* Sol Kısım: Telif Hakkı */}
          <div className="footer-left">
            <span className="copyright-text">
              © {footerData.year} <strong className="footer-name">{footerData.name}</strong> Tüm hakları saklıdır.
            </span>
          </div>

          {/* Sağ Kısım: Sosyal Medya İkonları */}
          <div className="footer-right">
            <div className="social-icons">
              {footerData.socials.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  // CSS değişkeni olarak rengi gönderiyoruz (Hover için)
                  style={{ '--hover-color': item.color }}
                  aria-label={item.name}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;