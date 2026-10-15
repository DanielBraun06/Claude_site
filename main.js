/* =========================================================
   НАЛАШТУВАННЯ — заповни тут, і посилання оновляться всюди
   ========================================================= */
const CONFIG = {
  // Куди веде кнопка «Записатися» (наприклад, https://t.me/твій_нік)
  bookingUrl: "https://t.me/dan_chess",
  // Посилання на соцмережі. Порожні показуються, але ведуть у нікуди.
  socials: {
    telegram: "https://t.me/prosto_chess",
    instagram: "https://www.instagram.com/daniil_chess/",
    threads: "https://www.threads.com/@kovalenko_chess",
    tiktok: "https://www.tiktok.com/@prostochessukr",
    youtube: "https://www.youtube.com/@prostochessdanik",
    twitch: "https://www.twitch.tv/prostochessdanik",
  },
};

/* Відгуки — скріни реальних повідомлень. Щоб додати новий: поклади скрін у assets/reviews/
   і допиши рядок сюди. text — це розшифровка скріну (для пошуку і людей з екранними читалками). */
const REVIEWS = [
  { shot: "assets/reviews/review-1.webp", source: "Threads · dm.varchuk",
    text: "На просторах тредсу випадково знайшов заняття шахами для дорослих у @daniil_chess і це був метч. Я завжди любив стратегії і хотів спробувати шахи, але думав, що це нудно. Даня показав, що це не просто гра на заучування ходів, а що в шахах є магія. Дуже кайфове відчуття, коли ти довго тренуєшся, а потім робиш якийсь філігранний мув. Щиро раджу підтримати юного тренера і спробувати цю гру." },
  { shot: "assets/reviews/review-2.webp", source: "Telegram",
    text: "Даня, дякуємо Вам за заняття! Так цікаво було, що навіть молодший 5р захотів вчитись. Урок пройшов дуже швидко, син ще би грав далі, якби не закінчився час." },
  { shot: "assets/reviews/review-3.webp", source: "Telegram",
    text: "Мені сподобалось, інтерактивно, з теорією і самою грою. Для мене поки не просто, але сам факт що я вчусь крутий. А ще у вас гарно виходить навчати." },
  { shot: "assets/reviews/review-4.webp", source: "Telegram",
    text: "Дякую, Толік дуже зацікавлений та чекає кожен наступний урок, все мені переказує, що вивчив і про що дізнався." },
];

/* ---------------- icons ---------------- */
const BRAND = {
  telegram: '<path d="M21.5 4.2 2.9 11.4c-1 .4-1 1.9.1 2.2l4.6 1.4 1.8 5.6c.2.7 1.1.9 1.6.4l2.6-2.4 4.6 3.4c.6.4 1.4.1 1.6-.6l3.3-15.6c.2-1-.7-1.9-1.6-1.6ZM9.6 14.6l-.4 3.8-1.3-4.2 9.5-6-7.8 6.4Z" fill="currentColor"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>',
  threads: '<path d="M16.6 11.2c-.1-.1-.2-.1-.3-.2-.2-3-1.8-4.7-4.6-4.7-1.7 0-3.1.7-4 2l1.5 1c.6-.9 1.6-1.2 2.5-1.2 1 0 1.8.3 2.2.9.3.4.5 1 .6 1.7-.8-.1-1.6-.2-2.5-.1-2.5.1-4.1 1.6-4 3.6.1 1 .6 1.9 1.4 2.4.7.5 1.6.7 2.6.6 1.3-.1 2.3-.6 3-1.4.5-.7.9-1.5 1-2.6.6.4 1.1.9 1.3 1.5.5 1 .5 2.7-.9 4.1-1.2 1.2-2.7 1.7-4.9 1.8-2.5 0-4.4-.8-5.6-2.4-1.2-1.4-1.8-3.5-1.8-6.2s.6-4.7 1.8-6.2C7.2 4.8 9.1 4 11.6 4c2.5 0 4.4.8 5.7 2.4.6.8 1.1 1.7 1.4 2.8l1.8-.5c-.4-1.4-1-2.6-1.8-3.6C17.1 3.1 14.7 2 11.6 2 8.5 2 6.1 3.1 4.6 5.1 3.2 6.9 2.5 9.4 2.5 12.5s.7 5.6 2.1 7.4c1.5 2 3.9 3.1 7 3.1 2.7 0 4.6-.7 6.2-2.3 2.1-2.1 2-4.7 1.3-6.3-.5-1.2-1.4-2.1-2.5-2.7Zm-4.3 4.6c-1.1.1-2.2-.4-2.3-1.4 0-.8.6-1.6 2.3-1.7h.6c.6 0 1.2.1 1.7.2-.2 2.4-1.3 2.8-2.3 2.9Z" fill="currentColor"/>',
  tiktok: '<path d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.2 6.2 0 1 0 5.3 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.4Z" fill="currentColor"/>',
  youtube: '<path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" fill="currentColor"/>',
  twitch: '<path d="M4.3 2 3 5.4v13.8h4.6V22h2.6l2.8-2.8h3.8L22 14V2H4.3Zm15.9 11.1-2.9 2.9h-4.6l-2.5 2.5V16H6.3V3.8h13.9v9.3ZM15.7 7v5.1h1.8V7h-1.8Zm-4.8 0v5.1h1.8V7h-1.8Z" fill="currentColor"/>',
};
const NAMES = { telegram: "Telegram", instagram: "Instagram", threads: "Threads", tiktok: "TikTok", youtube: "YouTube", twitch: "Twitch" };
const ARROW = '<svg class="arr" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M5.5 4H12v6.5"/></svg>';

/* ---------------- links ---------------- */
document.querySelectorAll("[data-book]").forEach((a) => {
  if (CONFIG.bookingUrl) { a.href = CONFIG.bookingUrl; a.target = "_blank"; a.rel = "noopener"; }
  else a.href = "#footer"; // поки немає посилання — ведемо до соцмереж
});
const socialsEl = document.querySelector("[data-socials]");
if (socialsEl) {
  socialsEl.innerHTML = Object.keys(NAMES).map((k) => {
    const url = CONFIG.socials[k];
    const attrs = url ? `href="${url}" target="_blank" rel="noopener"` : 'href="#" aria-disabled="true"';
    return `<a class="social" ${attrs}><span class="l"><svg class="brand" viewBox="0 0 24 24">${BRAND[k]}</svg>${NAMES[k]}</span>${ARROW}</a>`;
  }).join("");
}

/* ---------------- reviews carousel ---------------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ARROW_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5 8 12l7 7"/></svg>';
const ARROW_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m9 5 7 7-7 7"/></svg>';
document.querySelectorAll("[data-reviews]").forEach((el) => {
  el.classList.add("carousel");
  el.innerHTML = `<div class="car-track" tabindex="0" aria-label="Відгуки учнів">${REVIEWS.map((r, i) => `
      <figure class="car-slide" aria-label="Відгук ${i + 1} з ${REVIEWS.length}">
        <div class="q">“</div>
        <div class="shot-wrap"><img src="${esc(r.shot)}" alt="${esc(r.text)}" loading="lazy" draggable="false"></div>
        <figcaption>${esc(r.source)}</figcaption>
      </figure>`).join("")}</div>
    <div class="car-nav">
      <div class="car-dots">${REVIEWS.map((_, i) => `<button aria-label="Відгук ${i + 1}" data-i="${i}"></button>`).join("")}</div>
      <div class="car-btns"><button class="car-prev" aria-label="Попередній відгук">${ARROW_L}</button><button class="car-next" aria-label="Наступний відгук">${ARROW_R}</button></div>
    </div>`;
  const track = el.querySelector(".car-track");
  const slides = [...el.querySelectorAll(".car-slide")];
  const dots = [...el.querySelectorAll(".car-dots button")];
  const step = () => slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 16);
  const current = () => Math.round(track.scrollLeft / step());
  const go = (i) => track.scrollTo({ left: Math.max(0, Math.min(slides.length - 1, i)) * step(), behavior: "smooth" });
  const sync = () => {
    const i = current();
    dots.forEach((d, k) => d.classList.toggle("on", k === i));
    el.querySelector(".car-prev").disabled = track.scrollLeft < 4;
    el.querySelector(".car-next").disabled = track.scrollLeft > track.scrollWidth - track.clientWidth - 4;
  };
  el.querySelector(".car-prev").addEventListener("click", () => go(current() - 1));
  el.querySelector(".car-next").addEventListener("click", () => go(current() + 1));
  dots.forEach((d) => d.addEventListener("click", () => go(+d.dataset.i)));
  track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(current() + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(current() - 1); }
  });
  // перетягування мишкою на десктопі (на телефоні працює звичайний свайп)
  let down = false, sx = 0, sl = 0, moved = false;
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true; moved = false; sx = e.clientX; sl = track.scrollLeft;
    track.classList.add("drag");
  });
  addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - sx; if (Math.abs(dx) > 3) moved = true;
    track.scrollLeft = sl - dx;
  });
  addEventListener("pointerup", () => {
    if (!down) return;
    down = false; track.classList.remove("drag");
    if (moved) go(current());
  });
  addEventListener("resize", sync);
  sync();
});

/* ---------------- nav ---------------- */
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
document.querySelector(".burger")?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.style.overflow = open ? "hidden" : "";
});
document.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("open"); document.body.style.overflow = "";
}));

/* ---------------- reveal ---------------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
document.querySelectorAll(".rv, .step").forEach((el) => io.observe(el));
requestAnimationFrame(() => document.body.classList.add("hero-in"));

/* ---------------- hero parallax ---------------- */
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const photo = document.querySelector(".hero-photo");
if (photo && !reduce && matchMedia("(min-width: 861px)").matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener("pointermove", (e) => {
    tx = (e.clientX / innerWidth - 0.5) * 14;
    ty = (e.clientY / innerHeight - 0.5) * 8;
  });
  (function loop() {
    cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
    photo.style.transform = `translate3d(${cx}px, ${cy + window.scrollY * 0.12}px, 0)`;
    requestAnimationFrame(loop);
  })();
}
