// src/App.jsx
import React from 'react';

// Bileşenler
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'; // Yeni
import Footer from './components/Footer/Footer';    // Yeni

function App() {
  return (
    // Global zemin rengi burada tanımlı
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '100vh', color: 'var(--text-main)', display: 'flex', flexDirection: 'column' }}>
      
      <Header />
      
      <main style={{ flex: 1 }}>
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;