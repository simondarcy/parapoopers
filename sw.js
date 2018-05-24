/*
 *
 *  ParaPoopers 
 *
 */

const version = "0.1.10";
const cacheName = `parapoopers-${version}`;
self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html?timestamp=${timeStamp}`,
        `/assets/js/phaser.min.js?timestamp=${timeStamp}`,
        `/assets/js/clouds.js?timestamp=${timeStamp}`,
        `/assets/js/game.js?timestamp=${timeStamp}`,
        `/assets/js/game-over.js?timestamp=${timeStamp}`,
        `/assets/js/instructions.js?timestamp=${timeStamp}`,
        `/assets/js/preloader.js?timestamp=${timeStamp}`,
        `/assets/js/settings.js?timestamp=${timeStamp}`,
        `/assets/js/splash.js?timestamp=${timeStamp}`,
        `/assets/js/main.js?timestamp=${timeStamp}`,
        `/assets/audio/baby.mp3?timestamp=${timeStamp}`,
        `/assets/audio/fart.mp3?timestamp=${timeStamp}`,
        `/assets/audio/music.mp3?timestamp=${timeStamp}`,
        `/assets/audio/baby.ogg?timestamp=${timeStamp}`,
        `/assets/audio/fart.ogg?timestamp=${timeStamp}`,
        `/assets/audio/music.ogg?timestamp=${timeStamp}`,
        `/assets/img/brown-drop.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Baby.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Bottle.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Cloud1.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Cloud2.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Cloud3.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Cloud4.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Instructions.png?timestamp=${timeStamp}`,
        `/assets/img/DD_PlayButton.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Poo_Animated.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Start.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Soother.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Star.png?timestamp=${timeStamp}`,
        `/assets/img/DD_Title.png?timestamp=${timeStamp}`,
        `/assets/img/card.png?timestamp=${timeStamp}`,
        `/assets/img/share_facebook.png?timestamp=${timeStamp}`,
        `/assets/img/share_twitter.png?timestamp=${timeStamp}`,
        `/assets/img/share_whatsapp.png?timestamp=${timeStamp}`,
        `/assets/img/share_link.png?timestamp=${timeStamp}`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
