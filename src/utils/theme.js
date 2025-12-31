export function getTheme() {
  const t = localStorage.getItem("theme");
  return t === "light" ? "light" : "dark";
}

export function setTheme(theme) {
  if (theme !== "dark" && theme !== "light") return;

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}
