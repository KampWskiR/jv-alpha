function loadTheme() {
  var theme = localStorage.getItem("theme");
  switch (theme) {
    case "dark":
      loadCSS("darkmode.css", function() {
        showContent();
      });
      break;
    case "custom":
      var customCssCode = localStorage.getItem("customCssCode");
      applyCustomCss(customCssCode);
      showContent();
      break;
    // Add cases for other themes if needed
    default:
      showContent();
      break;
  }
}

function switchTheme(theme) {
  localStorage.setItem("theme", theme);
  if (theme === "custom") {
    var customCssCode = localStorage.getItem("customCssCode");
    applyCustomCss(customCssCode);
    showContent();
  } else {
    location.reload(); // Reload the page to apply the new theme
  }
}

function loadCSS(filename, callback) {
  var cssLink = document.createElement("link");
  cssLink.href = filename;
  cssLink.rel = "stylesheet";
  cssLink.onload = callback; // Call the callback function once CSS is loaded
  document.head.appendChild(cssLink);
}

function showContent() {
  var loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.opacity = "0";
    setTimeout(function() {
      loadingScreen.remove();
    }, 500);
  }
}

function applyCustomCss() {
  var customCssCode = document.getElementById("customCssInput").value;
  if (customCssCode.trim() !== "") {
    var customStyleTag = document.createElement("style");
    customStyleTag.innerHTML = customCssCode;
    document.head.appendChild(customStyleTag);
    localStorage.setItem("theme", "custom");
    localStorage.setItem("customCssCode", customCssCode);
    showContent();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadTheme();
});