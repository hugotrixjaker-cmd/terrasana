/* TERRASANA SOS IA — service worker
   Estrategia:
     · index.html  -> primero la red (así los cambios se ven al abrir), caché como respaldo
     · imágenes y demás -> caché instantánea + actualización silenciosa en segundo plano
   Con esto la app se actualiza sola: no hay que desinstalarla ni forzar el cierre.
*/

const VERSION = '2026.09.17.5';
const CACHE   = 'terrasana-' + VERSION;
const CORE = [
  './', './index.html', './manifest.json',
  './icon-192.png', './icon-512.png', './icon-maskable.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (e.data && e.data.type === 'VERSION' && e.source)
    e.source.postMessage({ type: 'VERSION', version: VERSION });
});

const esHTML = req =>
  req.mode === 'navigate' ||
  req.destination === 'document' ||
  /\.html($|\?)/.test(new URL(req.url).pathname);

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  if (esHTML(req)) {
    // Primero la red: si hay señal, siempre se ve la última versión publicada
    e.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // Recursos: se entrega lo guardado al instante y se refresca por detrás
  e.respondWith(
    caches.match(req).then(hit => {
      const red = fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => hit);
      return hit || red;
    })
  );
});
