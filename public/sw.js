const CACHE_NAME = "alyvero-shell-v2";
const CACHE_PREFIX = "alyvero-shell-";
const APP_SHELL = ["/", "/icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Never cache conversion/API requests or user-uploaded files.
  if (url.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cachedHome = await caches.match("/");
        return cachedHome || Response.error();
      })
    );
    return;
  }

  // Only explicitly cached shell assets can be served from cache.
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
