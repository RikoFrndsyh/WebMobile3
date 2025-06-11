self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open("siakad-riko-cache");
    try {
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
      console.error("Gagal menyimpan cache:", err);
    }
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== "siakad-riko-cache").map(key => caches.delete(key))
      );
    })
  );
});
