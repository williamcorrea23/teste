const CACHE_NAME = 'static-cache-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles/styles.css',
  '/scripts/app.js',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  '/offline.html' // Página offline
];

// Instalar o Service Worker e cachear os recursos estáticos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Ativar o Service Worker e limpar caches antigos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, DYNAMIC_CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          return caches.delete(key);
        }
      }))
    )
  );
  self.clients.claim();
});

// Buscar os recursos e aplicar a estratégia de Cache First com fallback para rede e cache dinâmico
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
          cache.put(event.request.url, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch(() => {
      return caches.match('/offline.html');
    })
  );
});
