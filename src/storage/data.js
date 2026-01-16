// src/storage/data.js

export const heroData = {
  // Daktilo efektinde dönecek metinler
  titles: ["AI & Data Engineer", "Web Developer", "Civil Engineer"],
  // İleride buraya başka veriler de ekleyebiliriz (örn: aboutText, socialLinks vb.)
};

export const aboutData = {
  title: "Hakkımda",
  // Metni paragraflara bölerek dizi haline getirdik
  description: [
    "Ben Bartu Özaşçı. 2 Aralık 2000 tarihinde İzmir, Konak’ta doğdum. İlk ve ortaöğrenimimi Balıkesir'de tamamladıktan sonra, lise eğitimime Balıkesir Cumhuriyet Anadolu Lisesi’nde başlayıp 2019 yılında Karesi Temel Lisesi’nden mezun oldum.",
    "2024 yılında Eskişehir Osmangazi Üniversitesi İnşaat Mühendisliği Bölümü’ndeki lisans eğitimimi başarıyla tamamladım.",
    "Şu anda akademik kariyerime aynı üniversitede devam ediyor; Prof. Dr. Hakan Özbaşaran danışmanlığında, 'İnşaat Mühendisliğinde Yapay Zeka' üzerine yüksek lisans çalışmalarımı sürdürüyorum.",
    "Akademik çalışmalarımın yanı sıra yazılım geliştirmek, algoritmalar tasarlamak ve yapay zeka modelleri eğitmek en büyük tutkumdur. Hem hobilerimin hem de profesyonel çalışmalarımın bir yansıması olan bu portfolyo sitesine hoş geldiniz.",
  ],
  btnText: "Galeri",
  imgSrc: "/img/about.jpeg", // Görsel yolunu buraya tanımladık
};

// src/storage/data.js

// ... heroData ve aboutData yukarıda kalacak ...

export const projectsData = [
  {
    id: 1,
    title: "Yatırım Hesaplama Uygulaması",
    category: "Web Development",
    imgSrc: "/img/yatirimBartu.889Z.png",
    link: "https://bartuyatirimapp.netlify.app", // Buraya gerçek link gelecek
    description:
      "Html5, CSS3 ve JavaScript(ES6) kullanılarak geliştirilmiş basit bir yatırım hesaplama uygulaması.Responsive tasarımı sayesinde farklı cihazlarda sorunsuz çalışır.",
  },

  {
    id: 2,
    title: "Bartu Kişisel Projeler",
    category: "Web Development",
    imgSrc: "/img/topsecret.517Z.png",
    link: "pages/secretBartu/bartu.html", // Buraya gerçek link gelecek
    description:
      "Kişisel projelerimi ve uygulamalarımın bulunduğu bana özel bir web sitesi.",
  },

  {
    id: 3,
    title: "Kart Eşleştirme Oyunu",
    category: "Games",
    imgSrc: "/img/cardmatching.505Z.png",
    link: "pages/card_match/card.html", // Buraya gerçek link gelecek
    description:
      "Html5, CSS3 ve JavaScript(ES5) kullanılarak geliştirilmiş eğlenceli bir kart eşleştirme oyunu.",
  },

  {
    id: 4,
    title: "Dosya Analiz Chatbot",
    category: "NLP",
    imgSrc: "/img/chatbotpdf.301Z.png",
    link: "https://github.com/BartuOzasci/AI_Assistant_with_RAG", // Buraya gerçek link gelecek
    description:
      "Bu proje, RAG mimarisine sahip bir yapay zeka asistanıdır. Python diliyle geliştirilen uygulamada; web arayüzü için Flask, vektör araması ve veri tabanı için FAISS, metinleri vektörlere dönüştürmek için SentenceTransformer ve doğal dil işleme/yanıt üretimi için Google Gemini modelleri kullanılmaktadır. ",
  },

   {
    id: 5,
    title: "İstanbul Trafik Forecasting",
    category: "Forecasting",
    imgSrc: "/img/trafficTsa.950Z.png",
    link: "https://github.com/BartuOzasci/Traffic_TSA_Forecasting", // Buraya gerçek link gelecek
    description:
      "Bu proje, Python tabanlı bir makine öğrenmesi sistemi olarak geliştirilmiştir ve XGBoost algoritması ile zaman serisi forecasting yapmaktadır. Veri işleme için Pandas ve NumPy, model değerlendirme için Scikit-learn, görselleştirme için Matplotlib kütüphaneleri kullanılmıştır. ",
  },

  {
    id: 6,
    title: "Streamlit PDF Destek Botu",
    category: "NLP",
    imgSrc: "/img/streamlit_bot.528Z.png",
    link: "https://github.com/BartuOzasci/Streamlit_Customer_Support_Bot", // Buraya gerçek link gelecek
    description:
      "Bu proje, PDF dosyalarından bilgi çıkarıp vektör tabanlı arama (RAG) ile kullanıcı sorularına yanıt veren bir yapay zeka destekli sohbet botu içerir. Streamlit arayüzüyle kolay kullanım sunar ve FAISS ile hızlı bellek erişimi sağlar. ",
  },
  
];

// src/storage/data.js

// ... heroData, aboutData, projectsData YUKARIDA ...

export const contactData = {
  title: "İletişime Geçin",
  subtitle: "Projeleriniz veya sorularınız için bana mesaj bırakabilirsiniz.",
  formAction: "https://formspree.io/f/xkgqrqwl", // Formspree ID'ni buraya yapıştır
};

export const footerData = {
  name: "Bartu Özaşçı",
  year: "2025",
  socials: [
    {
      id: 1,
      icon: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/bartu-özaşçı-522679271/?trk=public-profile-join-page",
      name: "linkedin",
      color: "#0077b5", // LinkedIn Mavisi
    },
    {
      id: 2,
      icon: "fa-brands fa-github",
      link: "https://github.com/bartuozasci",
      name: "github",
      color: "#333333", // GitHub Siyahı
    },
    {
      id: 3,
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/bartuozsci?igsh=aXR4eXhoYzF1dnd2",
      name: "instagram",
      color: "#e1306c", // Instagram Pembesi
    },
    {
      id: 4,
      icon: "fa-solid fa-envelope",
      link: "mailto:bartuozasci@gmail.com",
      name: "mail",
      color: "#ea4335", // Gmail Kırmızısı
    },
    {
      id: 5,
      icon: "fa-solid fa-phone",
      link: "tel:+905419384526",
      name: "phone",
      color: "#25d366", // WhatsApp/Telefon Yeşili
    },
  ],
};
