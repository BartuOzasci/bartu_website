// Daktilo efekti fonksiyonu
export const typeWriterEffect = (element, texts, wait = 3000) => {
  let txt = '';
  let wordIndex = 0;
  let isDeleting = false;

  const type = () => {
    // Mevcut kelime indexi
    const current = wordIndex % texts.length;
    const fullTxt = texts[current];

    // Yazıyor mu siliyor mu kontrolü
    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1);
    } else {
      txt = fullTxt.substring(0, txt.length + 1);
    }

    // HTML elementine yaz
    element.innerHTML = `<span class="txt">${txt}</span>`;

    // Hız ayarları
    let typeSpeed = 200;
    if (isDeleting) {
      typeSpeed /= 2;
    }

    // Kelime tamamlandı mı?
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = wait; // Bekleme süresi
      isDeleting = true;
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => type(), typeSpeed);
  };

  type();
};