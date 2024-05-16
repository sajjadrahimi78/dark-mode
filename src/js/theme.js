// icons select
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const themeSwitcherBtns = document.querySelectorAll(".theme-switcher");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (userTheme === "dark" || (!userTheme && systemTheme)) {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

function iconSwitch(theme) {
  if ((theme = "dark")) {
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  } else if ((theme = "light")) {
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  }
}

// switcher
themeSwitcherBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme;
    switch (theme) {
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconSwitch("light");
        break;

      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconSwitch("dark");
        break;

      case "system":
        localStorage.removeItem("theme");
        if (systemTheme) {
          document.documentElement.classList.remove("dark");
          iconSwitch("light");
        } else {
          document.documentElement.classList.add("dark");
          iconSwitch("dark");
        }
        break;

      default:
        break;
    }
  });
});
