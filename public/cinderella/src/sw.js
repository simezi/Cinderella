import WorkboxSW from 'workbox-sw'

const workboxSW = new WorkboxSW();
workboxSW.precache([]);

workboxSW.router.registerRoute(\/js\/vendor.*\/, workboxSW.strategies.cacheFirst());
