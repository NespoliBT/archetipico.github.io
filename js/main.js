setTheme();

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const openMenu = document.getElementById("openMenu");
  const themeSwitch = document.getElementById("themeSwitch");
  const clearWebStorage = document.getElementById("clearWebStorage");
  const clearWebStoragePopup = document.getElementById("clearWebStoragePopup");

  openMenu.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  themeSwitch.addEventListener("click", function () {
    console.log(document.cookie);
    if (document.cookie.includes("theme=dark")) {
      document.cookie = "theme=light";
    } else {
      document.cookie = "theme=dark";
    }
    themeSwitch.innerHTML = document.cookie.includes("theme=dark") ? "" : "";
    setTheme();
  });

  clearWebStorage.addEventListener("click", function () {
    localStorage.clear();
    sessionStorage.clear();

    clearWebStoragePopup.classList.add("open");

    setTimeout(() => {
      clearWebStoragePopup.classList.remove("open");
    }, 2000);
  });

  themeSwitch.innerHTML = document.cookie.includes("theme=dark") ? "" : "";
  setTheme();
});

function setTheme() {
  if (document.cookie.includes("theme=dark")) {
    document.documentElement.style.setProperty("--color-1", "#141414");
    document.documentElement.style.setProperty("--color-2", "#242424");
    document.documentElement.style.setProperty("--color-3", "#fda0a0");
    document.documentElement.style.setProperty("--color-4", "#fcfcfc");
  } else {
    document.documentElement.style.setProperty("--color-1", "#fcfcfc");
    document.documentElement.style.setProperty("--color-2", "#eeeeee");
    document.documentElement.style.setProperty("--color-3", "#2f00ff");
    document.documentElement.style.setProperty("--color-4", "#141414");
  }
}
