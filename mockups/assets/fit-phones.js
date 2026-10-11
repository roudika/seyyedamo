// Scale the phone mockups down so each one fits a narrow screen.
(function () {
  function fit() {
    var avail = document.documentElement.clientWidth - 24;
    document.querySelectorAll('.shot').forEach(function (s) {
      s.style.zoom = '';
      var w = s.offsetWidth;
      s.style.zoom = w > avail ? (avail / w).toFixed(3) : '';
    });
  }
  window.addEventListener('resize', fit);
  if (document.readyState !== 'loading') fit(); else document.addEventListener('DOMContentLoaded', fit);
})();
