// src/components/Contact/Contact.jsx
import React from 'react';
import { contactData } from '../../storage/data';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            {/* İletişim Kartı */}
            <div className="contact-card">
              <div className="text-center mb-5">
                <h2 className="section-title text-gradient">
                  {contactData.title}
                </h2>
                <p className="text-muted">
                  {contactData.subtitle}
                </p>
              </div>

              {/* Formspree Formu */}
              <form action={contactData.formAction} method="POST" className="contact-form">
                <div className="row g-4">
                  
                  {/* İsim Soyisim */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control custom-input" placeholder="Adınız Soyadınız" required />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" name="email" className="form-control custom-input" placeholder="E-posta Adresiniz" required />
                    </div>
                  </div>

                  {/* Konu */}
                  <div className="col-12">
                    <div className="form-group">
                      <input type="text" name="subject" className="form-control custom-input" placeholder="Konu" required />
                    </div>
                  </div>

                  {/* Mesaj */}
                  <div className="col-12">
                    <div className="form-group">
                      <textarea name="message" rows="5" className="form-control custom-input" placeholder="Mesajınız..." required></textarea>
                    </div>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn-send">
                      Gönder <i className="fa-solid fa-paper-plane ms-2"></i>
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;