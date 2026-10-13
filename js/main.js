// Єдине місце, де міняється посилання для запису (Telegram, Instagram або форма).
const BOOKING_URL = "https://t.me/dan_chess";

document.documentElement.classList.add("js");

document.querySelectorAll("[data-book]").forEach((a) => {
  a.setAttribute("href", BOOKING_URL);
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener");
});

// Шапка: фон після прокрутки
const header = document.querySelector(".header");
const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Мобільне меню
const burger = document.querySelector(".burger");
if (burger) {
  burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav a").forEach((a) =>
    a.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      burger.setAttribute("aria-expanded", "false");
    })
  );
}

// Портрет: якщо файл є, ховаємо запасну пішку
document.querySelectorAll(".hero__portrait").forEach((img) => {
  const mark = () => img.closest(".hero__figure, .frame")?.classList.add("has-portrait");
  if (img.complete && img.naturalWidth) mark();
  else img.addEventListener("load", mark);
});

// Поява блоків
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("is-in"));
}

// Відгуки: орбіта навколо фото і сітка, обидва з js/reviews-data.js
const grid = document.getElementById("reviews-grid");
const orbit = document.getElementById("orbit");
if (Array.isArray(window.REVIEWS)) {
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const withImg = window.REVIEWS.filter((r) => r.image);

  if (orbit) {
    orbit.innerHTML = withImg.map((r, i) => `
      <div class="orbit__item" style="--i:${i};--n:${withImg.length}">
        <div class="orbit__card"><img src="${esc(r.image)}" alt="" loading="lazy"></div>
      </div>`).join("");
  }

  if (grid) {
    grid.innerHTML = window.REVIEWS.map((r) => `
      <article class="review reveal is-in">
        ${r.image ? `<div class="review__img"><img src="${esc(r.image)}" alt="Відгук від ${esc(r.name)}: ${esc(r.text)}" loading="lazy"></div>` : `<p class="review__q">${esc(r.text)}</p>`}
        <div class="review__who">
          <span class="review__name">${esc(r.name)}</span>
          ${r.meta ? `<span class="review__meta">${esc(r.meta)}</span>` : ""}
        </div>
      </article>`).join("");
  }
}
