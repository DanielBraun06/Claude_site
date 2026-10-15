/* =========================================================
   НАЛАШТУВАННЯ — заповни тут, і посилання оновляться всюди
   ========================================================= */
const CONFIG = {
  // Куди веде кнопка «Записатися» (наприклад, https://t.me/твій_нік)
  bookingUrl: "",
  // Посилання на соцмережі. Порожні показуються, але ведуть у нікуди.
  socials: {
    telegram: "",
    instagram: "",
    threads: "",
    tiktok: "",
    youtube: "",
    twitch: "",
  },
};

/* Відгуки. Заміни заглушки реальними відгуками.
   Поля: name, role (необов'язково), text, photo (необов'язково, шлях до аватарки),
   shot (необов'язково, шлях до скріну переписки). */
const REVIEWS = [
  { placeholder: true, name: "Ім'я учня", role: "Індивідуальні заняття", text: "Тут буде реальний відгук учня. Надішли тексти або скріни — і я їх сюди поставлю." },
  { placeholder: true, name: "Ім'я учня", role: "Батьки учня", text: "Короткий відгук від батьків: що змінилося після занять, як дитина ставиться до шахів." },
  { placeholder: true, name: "Ім'я учня", role: "ProstoChess Club", text: "Відгук про клуб, групові заняття або турніри." },
  { placeholder: true, name: "Ім'я учня", role: "Індивідуальні заняття", text: "Сюди добре лягає конкретика: був рейтинг такий, став такий, за стільки-то місяців." },
  { placeholder: true, name: "Ім'я учня", role: "Індивідуальні заняття", text: "Можна ставити не тільки текст, а й скрін переписки — він виглядає чесніше за будь-який опис." },
  { placeholder: true, name: "Ім'я учня", role: "Індивідуальні заняття", text: "Ще один відгук." },
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

/* ---------------- reviews ---------------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
document.querySelectorAll("[data-reviews]").forEach((el) => {
  const limit = Number(el.dataset.reviews) || REVIEWS.length;
  el.innerHTML = REVIEWS.slice(0, limit).map((r, i) => {
    const initials = r.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    return `<article class="review rv ${r.placeholder ? "placeholder" : ""}" style="transition-delay:${(i % 3) * 0.08}s">
      <div class="q">“</div>
      ${r.shot ? `<img class="shot" src="${esc(r.shot)}" alt="Скрін відгуку від ${esc(r.name)}" loading="lazy">` : ""}
      <p>${esc(r.text)}</p>
      <footer><div class="avatar">${r.photo ? `<img src="${esc(r.photo)}" alt="">` : esc(initials)}</div>
      <div class="who-r"><b>${esc(r.name)}</b>${r.role ? `<span>${esc(r.role)}</span>` : ""}</div></footer>
    </article>`;
  }).join("");
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

/* ---------------- orange smoke (WebGL) ---------------- */
(function smoke() {
  const canvas = document.getElementById("smoke");
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
  if (!gl) { canvas.insertAdjacentHTML("afterend", '<div class="smoke-fallback"></div>'); return; }

  const vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  const fs = `precision mediump float;
uniform vec2 r;uniform float t;uniform float k;uniform vec2 c;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 R=mat2(.8,.6,-.6,.8);
 for(int i=0;i<5;i++){v+=a*n(p);p=R*p*2.03;a*=.5;}return v;}
void main(){
 vec2 p=(gl_FragCoord.xy-.5*r)/r.y;
 float T=t*.045;
 vec2 q=vec2(fbm(p*1.5+vec2(0.,-T*2.2)),fbm(p*1.5+vec2(5.2,1.3)-vec2(T,T*1.6)));
 vec2 w=vec2(fbm(p*1.7+2.6*q+vec2(1.7,9.2)+T*1.3),fbm(p*1.7+2.6*q+vec2(8.3,2.8)-T));
 float f=fbm(p*1.3+2.8*w-vec2(0.,T*1.5));
 vec2 d=(p-c)*vec2(.8,1.15);
 float m=exp(-dot(d,d)*1.9);
 float side=exp(-pow(abs(p.x)-.95,2.)*4.)*smoothstep(.4,-.7,p.y)*.35;
 float s=pow(smoothstep(.32,1.,f),2.6)*(m+side)*k;
 vec3 o=vec3(1.,.322,.016);
 vec3 col=o*s*1.35+vec3(1.,.62,.36)*pow(s,3.)*.35;
 col*=1.-.35*length(p*vec2(.7,1.));
 gl_FragColor=vec4(max(col,0.),1.);}`;

  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.insertAdjacentHTML("afterend", '<div class="smoke-fallback"></div>'); return; }
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prog, "r"), uT = gl.getUniformLocation(prog, "t");
  const uK = gl.getUniformLocation(prog, "k"), uC = gl.getUniformLocation(prog, "c");

  const scale = 0.45; // рендеримо в низькій роздільності — дим м'який і легкий для ноутбука
  const resize = () => {
    canvas.width = Math.max(2, Math.round(innerWidth * scale));
    canvas.height = Math.max(2, Math.round(innerHeight * scale));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  resize();
  addEventListener("resize", resize);

  const isHome = !!document.querySelector(".hero");
  let k = 1, visible = true;
  document.addEventListener("visibilitychange", () => { visible = !document.hidden; if (visible) requestAnimationFrame(frame); });
  const start = performance.now();
  function frame(now) {
    if (!visible) return;
    const vh = innerHeight;
    const prog = Math.min(1, window.scrollY / vh);
    // на першому екрані дим сильніший, далі — тихий фон
    const target = isHome ? 1.05 - prog * 0.6 : 0.55;
    k += (target - k) * 0.08;
    const cy = isHome ? -0.12 - prog * 0.25 : -0.35;
    gl.uniform2f(uR, canvas.width, canvas.height);
    gl.uniform1f(uT, (now - start) / 1000 + 20);
    gl.uniform1f(uK, k);
    gl.uniform2f(uC, 0, cy);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!reduce) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  canvas.classList.add("on");
})();
