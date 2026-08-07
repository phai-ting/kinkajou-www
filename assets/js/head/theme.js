// Site override of Hextra head theme bootstrap.
// Prefer an explicit light/dark choice; otherwise use params.theme.default.
// Legacy "system" entries (from before dark became the site default) are cleared
// so OS light mode cannot keep the docs site stuck white.

function setTheme(theme) {
  document.documentElement.classList.remove("light", "dark");

  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

(function () {
  const configured =
    '{{ site.Params.theme.default | default `system` }}';
  const stored = localStorage.getItem("color-theme");
  let theme;
  if (stored === "light" || stored === "dark") {
    theme = stored;
  } else {
    if (stored === "system") localStorage.removeItem("color-theme");
    theme = configured;
  }
  setTheme(theme);
})();
