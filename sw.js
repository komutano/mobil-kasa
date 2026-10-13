// Mobil Kasa — internetsiz çalışma. Önce önbellekten açar, arka planda yeni sürümü indirir.
const CACHE = 'mobil-kasa';
const DOSYALAR = ['./', './index.html', './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(DOSYALAR))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const eski = await c.match(e.request, { ignoreSearch: true });
    const yeni = fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => eski);
    return eski || yeni;
  }));
});
