importScripts('workbox-sw.prod.v2.1.0.js');

const workboxSW = new self.WorkboxSW();
workboxSW.precache([]);

workboxSW.router.registerRoute(\/js\/vendor.*\/, workboxSW.strategies.cacheFirst());
