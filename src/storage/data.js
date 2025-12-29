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
    "Ben Bartu ÖZAŞÇI, 2 Aralık 2000 tarihinde İzmir/Konak’ta doğdum. İlköğrenimime 2007 yılında Balıkesir’de bulunan Karesi İstiklal Koleji’nde başladım ve 2012 yılında tamamladım. Ortaöğrenimime, okul ismimizin değişmesiyle Doğa Koleji bünyesinde devam ederek 2015 yılında mezun oldum. Ardından Balıkesir Cumhuriyet Anadolu Lisesi’nde başladığım lise eğitimimi, 2017 yılında geçiş yaptığım Karesi Temel Lisesi’nde 2019 yılında tamamladım.",
    "Aynı yıl girdiğim üniversite sınavı sonucunda Eskişehir Osmangazi Üniversitesi İnşaat Mühendisliği Bölümü’ne yerleştim ve 2024 yılında lisans eğitimimi başarıyla tamamladım.",
    "Akademik yolculuğuma lisansüstü seviyede devam ederek, danışmanım Prof. Dr. Hakan Özbaşaran eşliğinde İnşaat Mühendisliğinde Yapay Zeka alanında yüksek lisans çalışmalarımı sürdürmekteyim.",
    "Bunun yanı sıra, remote (uzaktan) olarak kurumsal bir şirkette Yapay Zeka Mühendisi pozisyonunda görev yapmaktayım. Boş zamanlarımda yazılım geliştirmek, çeşitli programlar oluşturmak ve yapay zeka modelleri tasarlamakla ilgileniyorum.",
    "Bu portfolyo sitesi, hem hobilerimin hem de çalışmalarımın bir yansıması olarak hazırlanmıştır.",
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
      "React ve Node.js kullanılarak geliştirilmiş, yapay zeka destekli ürün öneri sistemi içeren kapsamlı bir e-ticaret platformu. Stripe ödeme altyapısı entegre edilmiştir.",
  },

  {
    id: 2,
    title: "Bartu Kişisel Projeler",
    category: "Web Development",
    imgSrc: "/img/topsecret.517Z.png",
    link: "pages/secretBartu/bartu.html", // Buraya gerçek link gelecek
    description:
      "React ve Node.js kullanılarak geliştirilmiş, yapay zeka destekli ürün öneri sistemi içeren kapsamlı bir e-ticaret platformu. Stripe ödeme altyapısı entegre edilmiştir.",
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
