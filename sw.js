// Mobil Kasa — internetsiz çalışma.
// İnternet varsa her açılışta en yeni sürümü alır; yoksa telefondaki kopyayı açar.
const CACHE = 'mobil-kasa-v3';
const DOSYALAR = ['./', './index.html', './manifest.json', './icon-180.png', './icon-192.png', './icon-512.png', './html5-qrcode.min.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(DOSYALAR))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    try {
      const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 4000);
      const r = await fetch(e.request, { cache: 'no-store', signal: ctrl.signal }); clearTimeout(t);
      if (r.ok) c.put(e.request, r.clone());
      return r;
    } catch (err) {
      return (await c.match(e.request, { ignoreSearch: true })) || (await c.match('./index.html')) || Response.error();
    }
  })());
});
