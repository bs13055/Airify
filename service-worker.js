// Retire the earlier Airify cache at this reused Pages URL.
// Saved profiles, places and history in localStorage remain untouched.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await caches.delete('airify-v1-static');
    await self.clients.claim();
    const scope = new URL(self.registration.scope);
    const windows = await self.clients.matchAll({type: 'window'});
    await Promise.all(windows.map(client => {
      const url = new URL(client.url);
      if (url.origin === scope.origin && (url.pathname === scope.pathname || url.pathname === scope.pathname + 'index.html')) {
        return client.navigate(new URL('?airify=20261101', scope).href);
      }
    }));
  })());
});
// Use normal network requests; do not cache pages or model readings.
