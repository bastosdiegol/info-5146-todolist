const CACHE_NAME = "to-do-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/info-5146-todolist/",
  "/info-5146-todolist/index.html",
  "/info-5146-todolist/style.css",
  "/info-5146-todolist/app.js",
  "/info-5146-todolist/manifest.json",
  "/info-5146-todolist/icons/icon-128.png",
  "/info-5146-todolist/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
