// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Önce Global Stiller ve Utils
import './utils/colors.css'; // Renk paletimiz
import './utils/fonts.css';  // Font ayarlarımız

// 2. Ana Uygulama Bileşeni
import App from './App';

// React 18 Root Yapısı
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);