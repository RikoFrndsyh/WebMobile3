// install service worker
self.addEventListener("install", event => {
  // skipWaiting akan langsung mengaktifkan service worker baru tanpa menunggu versi lama nonaktif
  self.skipWaiting();

  // Menunggu hingga proses caching selesai sebelum install sukses
  event.waitUntil((async () => {
    // Membuat/buka cache baru dengan nama 'siakad-riko-cache'
    const cache = await caches.open("siakad-riko-cache");

    try {
      // Menyimpan cache semua file di bawah ini
      await cache.addAll([
        "./",
        "./index.html",
        "./beranda.html",
        "./css/style.css",
        "./img/riko.png",
        "./app.js",
        // Meng-cache resource eksternal Bootstrap CSS dan JS
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
      ]);
    } catch (err) {
      // Menampilkan pesan error jika gagal menyimpan file ke cache
      console.error("Gagal menyimpan cache:", err);
    }
  })());
});

// Event listener untuk tahap 'activate' service worker
self.addEventListener("activate", event => {
  // Menunggu  proses pembersihan cache lama selesai
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        // Menghapus semua cache lama
        keys.filter(key => key !== "siakad-riko-cache")
            .map(key => caches.delete(key))
      );
    })
  );
});
