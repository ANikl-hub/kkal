const CACHE_NAME = 'calorie-goal-v1';
const urlsToCache = [
  '/kkal/',
  '/kkal/index.html',
  '/kkal/manifest.json',
  '/kkal/icon-192.png',
  '/kkal/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
