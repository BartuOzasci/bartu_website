// Sayfa yönlendirmelerinin (Route) yapıldığı merkez
import React from 'react';

// Bileşenlerin İçe Aktarılması
import Header from './components/Header/Header';
import About from './components/About/About';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      {/* 1. Navbar ve Hero Alanı */}
      <Header />

      {/* 2. Hakkımda Bölümü */}
      <About />

      {/* 3. Projeler Bölümü */}
      <ProjectsSection />

      {/* 4. İletişim Formu */}
      <Contact />

      {/* 5. Alt Bilgi (Footer) */}
      <Footer />

    </div>
  );
}

export default App;