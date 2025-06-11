registerSW();

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("sw.js");
      showResult("Service Worker registered");
    } catch (error) {
      showResult("Error saat registrasi Service Worker: " + error.message);
    }
  } else {
    showResult("Service Worker tidak didukung di browser ini.");
  }
}

function showResult(text) {
  document.querySelector("output").innerHTML = text;
}