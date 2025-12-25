// Header bileşeni
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { navLinks, heroData } from '../../data/data';
import { typeWriterEffect } from '../../utils/typewrite';

// Resim importları (Vite yapısına uygun)
import logoImg from '../../assets/img/site_Logo.png';
import bgImg from '../../assets/img/background.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const typeWriterRef = useRef(null);

  // Scroll takibi için useEffect
  useEffect(() => {
    const handleScroll = () => {
      // 50px aşağı inildiğinde navbar rengi değişsin
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Daktilo efekti başlatma
  useEffect(() => {
    if (typeWriterRef.current) {
      typeWriterEffect(typeWriterRef.current, heroData.titles, heroData.pauseTime);
    }
  }, []);

  return (
    <header id="home" className="header-wrapper" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Overlay: Resim üzerine koyuluk ekler, yazı okunurluğu artar */}
      <div className="overlay"></div>

      {/* Navbar Başlangıcı */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="container">
          {/* Logo Bölümü */}
          <a className="navbar-brand" href="#home">
            <img src={logoImg} alt="Site Logo" className="site-logo" />
          </a>

          {/* Mobil Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Linkler */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li key={link.id} className="nav-item">
                  <a
                    href={link.path}
                    className={`nav-link ${activeLink === link.path ? 'active-link' : ''}`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Content (İsim ve Daktilo Efekti) */}
      <div className="hero-content container text-center">
        <h1 className="hero-name display-3 fw-bold text-white mb-3">
          {heroData.name}
        </h1>
        <h3 className="hero-titles text-white">
          I'm a <span ref={typeWriterRef} className="typewrite-text"></span>
        </h3>
      </div>
    </header>
  );
};

export default Header;