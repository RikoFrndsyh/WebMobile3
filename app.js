// Memanggil fungsi untuk meregistrasi Service Worker
registerSW();

// Fungsi async untuk mendaftarkan service worker
async function registerSW() {
  // Mengecek apakah browser mendukung Service Worker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan file service worker "sw.js"
      const registration = await navigator.serviceWorker.register("sw.js");

    } catch (error) {
      // Jika terjadi error saat registrasi, tampilkan pesan kesalahan
      showResult("Error saat registrasi Service Worker: " + error.message);
    }
  } else {
    // Jika browser tidak mendukung service worker
    showResult("Service Worker tidak didukung di browser ini.");
  }
};

// Fungsi untuk menampilkan hasil atau pesan ke elemen <output>
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
