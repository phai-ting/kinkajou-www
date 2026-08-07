// Runs before Hextra's core/theme.js (alphabetical concat order).
// Drop legacy "system" preference so params.theme.default: dark takes effect.
(function () {
  const configured =
    '{{ site.Params.theme.default | default `system` }}';
  if (configured !== "dark" && configured !== "light") return;
  if (localStorage.getItem("color-theme") === "system") {
    localStorage.removeItem("color-theme");
  }
})();
