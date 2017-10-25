importScripts('https://cdn.jsdelivr.net/npm/workbox-sw@2.1.0/build/importScripts/workbox-sw.prod.v2.1.0.min.js')

const workboxSW = new WorkboxSW();
workboxSW.precache([]);

workboxSW.router.registerRoute(\/js\/vendor.*\/, workboxSW.strategies.cacheFirst());
