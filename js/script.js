// Dark Mode Toggle with Memory
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');

// Load preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark');
    footer.classList.add('text-white');
    modeToggle.textContent = "☀️";
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const dark = body.classList.contains('dark-mode');
    if (dark) {
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark');
    footer.classList.add('text-white');
    modeToggle.textContent = "☀️";
    localStorage.setItem('theme', 'dark');
    } else {
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light', 'bg-light');
    footer.classList.remove('text-white');
    modeToggle.textContent = "🌙";
    localStorage.setItem('theme', 'light');
    }
});

// Lightbox Feature
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
