self.addEventListener("install", async event => {
  const cache = await caches.open("siakad-riko-cache");

  // Menyimpan resource penting (offline-first)
  await cache.addAll([
    "/",
    ".index.html",
    ".beranda.html",
    ".css/style.css",
    ".img/riko.png",
    ".app.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
  ]);
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
