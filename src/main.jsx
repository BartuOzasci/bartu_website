// Giriş noktası
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap 5 CSS ve JS Entegrasyonu
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Global Stiller (Varsa)
// import './styles/utils.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);