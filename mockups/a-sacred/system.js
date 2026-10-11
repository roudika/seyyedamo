/* Variant A — shared SVG sprite (icons, arches, seal, lamps) + seat-lamp lighting.
   Loaded with a plain <script> at the top of <body> so <use> and clip-path refs resolve. */
(function () {
  var P = function (d) { return '<path d="' + d + '"/>'; };
  var icons = {
    cal: '<rect x="3.5" y="5" width="17" height="15" rx="2"/>' + P('M3.5 10h17M8 3v4M16 3v4'),
    clock: '<circle cx="12" cy="12" r="8.5"/>' + P('M12 7.5V12l3 2'),
    bus: '<rect x="4" y="3.5" width="16" height="14" rx="3"/>' + P('M4 11h16M8 17.5V20M16 17.5V20M7.5 14.5h1M15.5 14.5h1'),
    bed: P('M3 18V6M3 14h18v4M21 14v-3a3 3 0 0 0-3-3h-7v6') + '<circle cx="7" cy="10.5" r="1.8"/>',
    food: P('M4 12.5h16a8 8 0 0 1-16 0ZM12 4.5v4M8.8 5.5l.7 2.5M15.2 5.5l-.7 2.5'),
    dome: P('M5 20v-7.5a7 7 0 0 1 14 0V20M3 20h18M12 5.5V2.5M9.5 20v-3.5a2.5 2.5 0 0 1 5 0V20'),
    moon: P('M19 14.5A7.5 7.5 0 1 1 9.5 5a6 6 0 0 0 9.5 9.5Z'),
    phone: P('M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z'),
    send: P('M21 4 3 11l6 2.5L18 7l-7 8 7.5 5L21 4Z'),
    insta: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/>' + P('M17 6.9v.2'),
    chat: P('M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z'),
    home: P('M4 20V10l8-6 8 6v10ZM10 20v-4a2 2 0 0 1 4 0v4'),
    map: P('M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4ZM9 4v14M15 6v14'),
    ticket: P('M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 0 0 5V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2.5a2.5 2.5 0 0 0 0-5ZM14.5 6.5v2M14.5 11v2M14.5 15.5v2'),
    user: '<circle cx="12" cy="8" r="4"/>' + P('M4.5 20a7.5 7.5 0 0 1 15 0'),
    play: P('M8.5 5.5v13l10-6.5Z'),
    check: P('m5 12.5 4.5 4.5L19 7.5'),
    plus: P('M12 5v14M5 12h14'),
    minus: P('M5 12h14'),
    upload: P('M12 15V4M7.5 8.5 12 4l4.5 4.5M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4'),
    camera: P('M4 8h3l2-2.5h6L17 8h3v11H4Z') + '<circle cx="12" cy="13" r="3.5"/>',
    back: P('M5 12h14M13 6l6 6-6 6'),
    fwd: P('M19 12H5M11 6l-6 6 6 6'),
    shield: P('M12 3.5 5 6v5.5c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6Z') + P('m9 12 2 2 4-4'),
    heart: P('M12 20s-7-4.4-7-9.5A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.5C19 15.6 12 20 12 20Z'),
    download: P('M12 4v11M7 10l5 5 5-5M5 20h14'),
    menu: P('M4 7h16M4 12h16M4 17h16'),
    bell: P('M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15ZM10 20.5h4'),
    route: P('M7 4v13M4 14l3 3 3-3M17 20V7M14 10l3-3 3 3'),
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/>' + P('M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3'),
    people: '<circle cx="9" cy="8" r="3.5"/>' + P('M3 19a6 6 0 0 1 12 0M15.5 4.8a3.5 3.5 0 0 1 0 6.4M17 13.5a6 6 0 0 1 4 5.5'),
    passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/>' + P('M9 16h6'),
    edit: P('M4 20h4L19 9l-4-4L4 16Z'),
    receipt: P('M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21ZM9 8h6M9 12h6M9 16h3'),
    info: '<circle cx="12" cy="12" r="8.5"/>' + P('M12 11v5M12 7.8v.2'),
    alert: '<circle cx="12" cy="12" r="8.5"/>' + P('M12 7.5v5.5M12 16v.2'),
    hourglass: P('M7 3.5h10M7 20.5h10M8 3.5c0 4 4 5 4 8.5s-4 4.5-4 8.5M16 3.5c0 4-4 5-4 8.5s4 4.5 4 8.5'),
    eitaa: P('M12 3.5a8.5 8.5 0 1 0 8.5 8.5M12 8a4 4 0 1 0 4 4h4.5'),
    bale: '<circle cx="12" cy="12" r="8.5"/>' + P('M8.5 12.5l2.5 2.5 4.5-5'),
    sun: '<circle cx="12" cy="12" r="4"/>' + P('M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M5.3 18.7l1.55-1.55M17.15 6.85l1.55-1.55'),
    moon2: P('M18.5 15.2A7.5 7.5 0 0 1 8.8 5.5 7.5 7.5 0 1 0 18.5 15.2Z') + P('M16.5 4.5v3M15 6h3')
  };

  var sym = '';
  Object.keys(icons).forEach(function (k) { sym += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + icons[k] + '</symbol>'; });

  var archTall = 'M0,1 V0.42 C0,0.21 0.25,0.11 0.5,0 C0.75,0.11 1,0.21 1,0.42 V1 Z';
  var archWide = 'M0,1 V0.55 C0,0.28 0.25,0.15 0.5,0 C0.75,0.15 1,0.28 1,0.55 V1 Z';
  window.ARCH = { tall: archTall, wide: archWide };

  var sprite =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
      '<clipPath id="arch-tall" clipPathUnits="objectBoundingBox"><path d="' + archTall + '"/></clipPath>' +
      '<clipPath id="arch-wide" clipPathUnits="objectBoundingBox"><path d="' + archWide + '"/></clipPath>' +
      '<radialGradient id="lamp-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#F6DE97" stop-opacity=".55"/><stop offset="1" stop-color="#F6DE97" stop-opacity="0"/></radialGradient>' +
      /* 8-point star (khatam) */
      '<symbol id="star8" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.1"><path d="M6 6h12v12H6Z"/><path d="M12 3.5 20.5 12 12 20.5 3.5 12Z"/></g><circle cx="12" cy="12" r="1.6" fill="currentColor"/></symbol>' +
      /* step arch frame */
      '<symbol id="arch-frame" viewBox="0 0 64 80"><path d="M2 79V36C2 20 18 10 32 2c14 8 30 18 30 34v43Z" style="fill:var(--night);stroke:var(--gold)" stroke-width="1.2"/><path d="M8 79V38C8 25 21 16 32 9c11 7 24 16 24 29v41" fill="none" style="stroke:var(--gold-line)" stroke-width=".8"/></symbol>' +
      /* crimson seal */
      '<symbol id="seal" viewBox="0 0 100 100">' +
        '<circle cx="50" cy="50" r="47" fill="#8E1B22"/>' +
        '<circle cx="50" cy="50" r="42.5" fill="none" stroke="#F3EAD3" stroke-opacity=".6" stroke-width="1.4" stroke-dasharray="1.2 3.2" stroke-linecap="round"/>' +
        '<circle cx="50" cy="50" r="37" fill="none" stroke="#F3EAD3" stroke-opacity=".75" stroke-width="1"/>' +
        '<text x="50" y="60" text-anchor="middle" font-family="Aref Ruqaa, serif" font-weight="700" font-size="29" fill="#F3EAD3">تکمیل</text>' +
        '<path d="M50 20l2 4-2 4-2-4ZM50 72l2 4-2 4-2-4Z" fill="#F3EAD3" fill-opacity=".8"/>' +
      '</symbol>' +
      /* lamp (قندیل) — dim and lit states */
      '<symbol id="lamp-dim" viewBox="0 0 16 30"><g style="fill:var(--lamp-dim-fill);stroke:var(--lamp-dim-stroke)" stroke-width="1" stroke-linejoin="round">' +
        '<path d="M8 0v5" fill="none"/><path d="M5 5h6l-1.2 2.4H6.2Z"/>' +
        '<path d="M8 7.4c-3.4 0-5 2.6-5 5.4 0 3.6 2 6.6 3.4 8.2h3.2c1.4-1.6 3.4-4.6 3.4-8.2 0-2.8-1.6-5.4-5-5.4Z"/>' +
        '<path d="M6.4 21h3.2l-.6 2H7Z"/><path d="M8 23v3" fill="none"/><circle cx="8" cy="27.4" r="1.1"/></g></symbol>' +
      '<symbol id="lamp-lit" viewBox="0 0 16 30">' +
        '<ellipse cx="8" cy="14" rx="10" ry="11" fill="url(#lamp-glow)"/>' +
        '<g style="fill:var(--lamp-lit-fill);stroke:var(--lamp-lit-stroke)" stroke-width="1" stroke-linejoin="round">' +
        '<path d="M8 0v5" fill="none"/><path d="M5 5h6l-1.2 2.4H6.2Z"/>' +
        '<path d="M8 7.4c-3.4 0-5 2.6-5 5.4 0 3.6 2 6.6 3.4 8.2h3.2c1.4-1.6 3.4-4.6 3.4-8.2 0-2.8-1.6-5.4-5-5.4Z"/>' +
        '<path d="M6.4 21h3.2l-.6 2H7Z"/><path d="M8 23v3" fill="none"/><circle cx="8" cy="27.4" r="1.1"/></g>' +
        '<path d="M8 10.6c1.3 1.5 2 2.7 2 3.9a2 2 0 0 1-4 0c0-1.2.7-2.4 2-3.9Z" fill="#FFF8E2"/>' +
        '<path d="M5 12.6c.2-1.4 1-2.4 2.2-2.8" fill="none" stroke="#FFF8E2" stroke-opacity=".8" stroke-width=".8" stroke-linecap="round"/>' +
      '</symbol>' +
      sym +
    '</defs></svg>';

  document.body.insertAdjacentHTML('afterbegin', sprite);

  /* arch line overlays: <svg class="arch-line" data-arch="tall"> gets its path */
  function fillArchLines(root) {
    (root || document).querySelectorAll('svg.arch-line').forEach(function (s) {
      if (s.firstChild) return;
      s.setAttribute('viewBox', '0 0 1 1');
      s.setAttribute('preserveAspectRatio', 'none');
      s.setAttribute('aria-hidden', 'true');
      s.innerHTML = '<path d="' + (s.dataset.arch === 'tall' ? archTall : archWide) + '"/>';
    });
  }

  var FA = '۰۱۲۳۴۵۶۷۸۹';
  var fa = function (n) { return String(n).replace(/\d/g, function (d) { return FA[d]; }); };

  function buildLamps() {
    document.querySelectorAll('.lamps').forEach(function (el) {
      var left = +el.dataset.left || 0;
      var of = +el.dataset.of || 8;
      var html = '';
      for (var i = 0; i < of; i++) {
        html += '<span class="lamp" style="--i:' + i + '" data-lit="' + (i < left ? 1 : 0) + '">' +
          '<svg><use href="#lamp-dim"/></svg><svg class="lit"><use href="#lamp-lit"/></svg></span>';
      }
      el.innerHTML = html;
      el.setAttribute('role', 'img');
      if (!el.hasAttribute('aria-label')) {
        el.setAttribute('aria-label', left ? fa(left) + ' صندلی خالی' : 'ظرفیت تکمیل');
      }
    });
  }

  function lightUp() {
    document.documentElement.classList.add('lamps-ready');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.querySelectorAll('.lamp[data-lit="1"]').forEach(function (l) { l.classList.add('is-lit'); });
      });
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('[data-theme-toggle]')) return;
    var r = document.documentElement;
    r.classList.add('theme-switching');
    clearTimeout(r._tt); r._tt = setTimeout(function () { r.classList.remove('theme-switching'); }, 260);
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    fillArchLines();
    buildLamps();
    lightUp();
  });
})();
