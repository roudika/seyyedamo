// Shared dark/light theme for every mockup page.
// Load in <head> (not deferred) so the theme applies before first paint:
//   <html ... data-default-theme="dark|light"> <script src="../assets/theme.js"></script>
// Any element with [data-theme-toggle] becomes a toggle button.
// The choice is stored under one key, so it carries across the gallery and all variants.
(function () {
  var KEY = 'rd-theme';
  var root = document.documentElement;
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function current() { return root.getAttribute('data-theme'); }
  function apply(t) {
    root.setAttribute('data-theme', t);
    root.style.colorScheme = t;
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      var dark = t === 'dark';
      b.setAttribute('aria-pressed', String(dark));
      b.setAttribute('aria-label', dark ? 'رفتن به حالت روشن' : 'رفتن به حالت تیره');
      b.setAttribute('title', dark ? 'حالت روشن' : 'حالت تیره');
    });
  }
  apply(stored() || root.getAttribute('data-default-theme') || 'light');
  document.addEventListener('DOMContentLoaded', function () {
    apply(current());
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-theme-toggle]');
      if (!b) return;
      var next = current() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (err) {}
      apply(next);
    });
  });
})();
