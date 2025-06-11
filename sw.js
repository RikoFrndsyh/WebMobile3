self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open("pwa-assets");
    try {
      await cache.addAll([
      "/",
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

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
