// Sayfa Yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio Başlatıldı.");

  // İleride scroll animasyonları buraya eklenecek
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-lg");
    } else {
      navbar.classList.remove("shadow-lg");
    }
  });
});

/* --- SERTİFİKA MODAL İŞLEVİ --- */
function openCertModal(element) {
  // 1. Tıklanan kartın içindeki resmi ve başlığı bul
  const imgElement = element.querySelector("img");
  const titleElement = element.querySelector(".cert-title");

  // 2. Resmin 'data-full' özelliğini (yoksa src'sini) al
  const fullImageSrc = imgElement.getAttribute("data-full") || imgElement.src;
  const titleText = titleElement.innerText;

  // 3. Modal içindeki elemanları seç
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  // 4. Modal içeriğini güncelle
  modalImage.src = fullImageSrc;
  modalCaption.innerText = titleText;

  // 5. Bootstrap Modal'ı aç
  const myModal = new bootstrap.Modal(document.getElementById("imageModal"));
  myModal.show();
}
