// install service worker dan mengaktifkan service worker baru tanpa menunggu versi lama
self.addEventListener("install", event => {
  self.skipWaiting();
  // Menunggu hingga proses caching selesai dan membuka/membuat cache baru
  event.waitUntil((async () => {
    const cache = await caches.open("siakad-riko-cache");
    try {
       // Menyimpan cache semua file dibawah ini
      await cache.addAll([
        "./",
        "./index.html",
        "./beranda.html",
        "./css/style.css",
        "./img/riko.png",
        "./app.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
      ]);
    } catch (err) {
      // Menampilkan pesan error jika gagal menyimpan file
      console.error("Gagal menyimpan cache:", err);
    }
  })());
});

self.addEventListener("activate", event => {
  // Menunggu sampai proses pembersihan cache lama selesai
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        // Menghapus semua cache lama yang namanya tidak cocok dengan versi sekarang
        keys.filter(key => key !== "siakad-riko-cache").map(key => caches.delete(key))
      );
    })
  );
});
