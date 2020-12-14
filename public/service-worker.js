importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
//enables google analytics offline support
workbox.googleAnalytics.initialize();
console.log("service-worker.js has just been ran");

//add listener for skip waiting event from registerServiceWorker.js
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") {
    console.log("skip waiting invoked");
    self.skipWaiting();
  }
});
