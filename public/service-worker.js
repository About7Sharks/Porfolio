importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
// drop precache entries from previous builds — this is what was serving a
// stale JS chunk to returning visitors and crashing the React boot
workbox.precaching.cleanupOutdatedCaches();
// NOTE: no workbox.googleAnalytics.initialize() — it cached GA requests in the
// SW cache, which is both a privacy surprise and dead weight. GA loads normally.
console.log("service-worker.js has just been ran");

// new SW activates immediately when the client asks (registerer sends this)
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    self.skipWaiting();
  }
});
