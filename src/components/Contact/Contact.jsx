import React from 'react';
import './Contact.css';
import { contactConfig } from '../../data/data';

const Contact = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        
        {/* Başlık */}
        <div className="text-center mb-5">
          <h2 className="section-title">İletişime Geç</h2>
          <p className="text-muted">Projeleriniz veya sorularınız için bana ulaşın</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            
            {/* İletişim Kartı */}
            <div className="contact-card">
              <form action={contactConfig.formspreeUrl} method="POST">
                
                <div className="row g-3">
                  {/* İsim Alanı */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" name="name" className="form-control" id="floatingName" placeholder="Adınız" required />
                      <label htmlFor="floatingName">Adınız Soyadınız</label>
                    </div>
                  </div>

                  {/* Email Alanı */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required />
                      <label htmlFor="floatingEmail">E-posta Adresiniz</label>
                    </div>
                  </div>

                  {/* Konu Alanı */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" name="subject" className="form-control" id="floatingSubject" placeholder="Konu" required />
                      <label htmlFor="floatingSubject">Konu</label>
                    </div>
                  </div>

                  {/* Mesaj Alanı */}
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea name="message" className="form-control" placeholder="Mesajınız" id="floatingMessage" style={{ height: '150px' }} required></textarea>
                      <label htmlFor="floatingMessage">Mesajınız</label>
                    </div>
                  </div>

                  {/* Gönder Butonu */}
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-send">
                      Gönder <i className="bi bi-send-fill ms-2"></i>
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