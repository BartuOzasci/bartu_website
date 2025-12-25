// Projelerin, linklerin ve yazıların olduğu JS dosyası

// Navigasyon Linkleri
export const navLinks = [
  { id: 1, title: "Ana Sayfa", path: "#home" },
  { id: 2, title: "Hakkımda", path: "#about" },
  { id: 3, title: "Projelerim", path: "#projects" },
  { id: 4, title: "İletişim", path: "#contact" },
];

// Hero Bölümü Verileri
export const heroData = {
  name: "Bartu Özaşçı",
  titles: ["AI & Data Engineer", "Web Developer", "Civil Engineer"],
  typingSpeed: 150, // Yazma hızı (ms)
  deletingSpeed: 100, // Silme hızı (ms)
  pauseTime: 2000, // Yazdıktan sonra bekleme süresi (ms)
};

// Hakkımda Bölümü Verileri
export const aboutData = {
  title: "Hakkımda",
  // Metni dizi (array) olarak tutuyoruz ki <p> etiketleri ile düzgün bölebilelim
  paragraphs: [
    "Ben Bartu ÖZAŞÇI, 2 Aralık 2000 tarihinde İzmir/Konak’ta doğdum. İlköğrenimime 2007 yılında Balıkesir’de bulunan Karesi İstiklal Koleji’nde başladım ve 2012 yılında tamamladım. Ortaöğrenimime, okul ismimizin değişmesiyle Doğa Koleji bünyesinde devam ederek 2015 yılında mezun oldum. Ardından Balıkesir Cumhuriyet Anadolu Lisesi’nde başladığım lise eğitimimi, 2017 yılında geçiş yaptığım Karesi Temel Lisesi’nde 2019 yılında tamamladım.",
    "Aynı yıl girdiğim üniversite sınavı sonucunda Eskişehir Osmangazi Üniversitesi İnşaat Mühendisliği Bölümü’ne yerleştim ve 2024 yılında lisans eğitimimi başarıyla tamamladım.",
    "Akademik yolculuğuma lisansüstü seviyede devam ederek, danışmanım Prof. Dr. Hakan Özbaşaran eşliğinde İnşaat Mühendisliğinde Yapay Zeka alanında yüksek lisans çalışmalarımı sürdürmekteyim.",
    "Bunun yanı sıra, remote (uzaktan) olarak kurumsal bir şirkette Yapay Zeka Mühendisi pozisyonunda görev yapmaktayım. Boş zamanlarımda yazılım geliştirmek, çeşitli programlar oluşturmak ve yapay zeka modelleri tasarlamakla ilgileniyorum.",
    "Bu portfolyo sitesi, hem hobilerimin hem de çalışmalarımın bir yansıması olarak hazırlanmıştır."
  ],
  btn1: { text: "Galeri", link: "#gallery" }, // İleride galeri sayfası eklenirse güncellenir
  btn2: { text: "Bartu Özaşçı CV", link: "/cv-bartu-ozasci.pdf" } // Public klasörüne pdf atılabilir
};



// Proje Resim Importları
import p1 from '../assets/img/1.png';
import p2 from '../assets/img/2.png';
import p3 from '../assets/img/3.png';
import p4 from '../assets/img/4.png';
import p5 from '../assets/img/5.png';
import p6 from '../assets/img/6.png';

// Projeler Listesi
export const projectsData = [
  {
    id: 1,
    title: "AI Veri Analizi",
    img: p1,
    link: "https://github.com/bartu-ozasci", // Örnek link
    desc: "Python ve Pandas kütüphaneleri kullanılarak büyük veri setleri üzerinde analizler yapıldı. Makine öğrenmesi algoritmaları entegre edildi."
  },
  {
    id: 2,
    title: "E-Ticaret Platformu",
    img: p2,
    link: "#",
    desc: "React ve Redux kullanılarak modern bir alışveriş deneyimi sunan frontend arayüzü tasarlandı. Sepet ve ödeme adımları optimize edildi."
  },
  {
    id: 3,
    title: "İnşaat Maliyet Hesaplama",
    img: p3,
    link: "#",
    desc: "İnşaat mühendisliği parametrelerine göre dinamik maliyet hesabı yapan web tabanlı bir araç."
  },
  {
    id: 4,
    title: "Portföy Sitesi V1",
    img: p4,
    link: "#",
    desc: "HTML, CSS ve JavaScript kullanılarak hazırlanan ilk kişisel web sitesi çalışması."
  },
  {
    id: 5,
    title: "Görüntü İşleme Botu",
    img: p5,
    link: "#",
    desc: "OpenCV kütüphanesi ile trafik akışını analiz eden ve araç sayımı yapan yapay zeka modeli."
  },
  {
    id: 6,
    title: "Mobil Görev Takipçisi",
    img: p6,
    link: "#",
    desc: "React Native ile geliştirilen, çapraz platform çalışan kişisel asistan uygulaması."
  }
];

// ... (Önceki kodlar)

// İletişim ve Sosyal Medya Linkleri
export const contactConfig = {
  formspreeUrl: "https://formspree.io/f/MÜŞTERİ_ID_BURAYA", // Buraya kendi ID'ni yazacaksın
  social: {
    github: "https://github.com/bartu-ozasci",
    linkedin: "https://www.linkedin.com/in/bartu-ozasci", // Linki güncellemeyi unutma
    instagram: "https://www.instagram.com/",
    email: "mailto:bartu@example.com",
    phone: "tel:+905000000000"
  }
};