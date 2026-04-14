const CACHE_NAME = 'fireworks-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js'
];

// Installa il Service Worker e salva i file in cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Gestisce le richieste quando sei offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
