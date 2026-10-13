# ProstoChess — сайт

Статичний сайт (HTML, CSS, JS без збірки): `index.html` (Головна), `about.html` (Про мене), `reviews.html` (Відгуки).
Дизайн-система: `DESIGN_SYSTEM.md`. Референси: `design/references/`.

## Що замінити перед публікацією
1. **Посилання для запису:** `BOOKING_URL` на початку `js/main.js` (Telegram, Instagram або форма). Всі кнопки «Записатись» беруть його звідси.
2. **Фото:** покласти PNG з прозорим фоном у `assets/hero-portrait.png` (Головна) і `assets/about-portrait.png` (Про мене). Поки файлів немає, показується силует пішака.
3. **Відгуки:** справжні відгуки додаються в `js/reviews-data.js`, записи з `placeholder: true` видалити.

## Локальний запуск
`npx http-server .` і відкрити http://localhost:8080
