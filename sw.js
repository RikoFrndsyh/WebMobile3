self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open("siakad-riko-cache-v2");
    try {
      await cache.addAll([
        "./",
        "./index.html",
        "./beranda.html",
        "./css/style.css",
        "./img/riko.png",
        "./app.js"
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
        keys.filter(key => key !== "siakad-riko-cache-v2").map(key => caches.delete(key))
      );
    })
  );
});
