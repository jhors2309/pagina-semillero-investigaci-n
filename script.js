AOS.init({
  duration: 900,
  once: true
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const galleryImages = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

if (galleryImages.length && modalImage && modalTitle && modalDesc) {
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modalTitle.textContent = img.dataset.title || "";
      modalDesc.textContent = img.dataset.desc || "";
    });
  });
}

const form = document.getElementById("contactForm");
const successAlert = document.getElementById("successAlert");

if (form && successAlert) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    successAlert.classList.remove("d-none");
    form.reset();

    setTimeout(() => {
      successAlert.classList.add("d-none");
    }, 4000);
  });
}