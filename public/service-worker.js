/* eslint-disable no-restricted-globals */

// Cache version - bump this on each deploy to clear old caches
// The build script will auto-update this via timestamp
const CACHE_VERSION = Date.now();
const CACHE_NAME = `abishek-portfolio-${CACHE_VERSION}`;
const IMAGE_CACHE = 'abishek-images-v1';

// Only cache static assets that rarely change
const urlsToCache = [
  '/manifest.json',
  '/images/image-placeholder.svg',
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
  // Activate immediately, don't wait for old SW to finish
  self.skipWaiting();
});

// Activate event - clean up ALL old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete any cache that isn't the current version or image cache
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch event - network-first for pages/JS/CSS, cache-first for images
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Skip external requests (analytics, fonts, etc.)
  if (!url.origin.includes(self.location.origin)) {
    return;
  }

  // Images: cache-first (they rarely change)
  if (request.destination === 'image' ||
      request.url.includes('/images/') ||
      request.url.match(/\.(webp|jpg|jpeg|png|gif|svg|ico)$/)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(IMAGE_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      }).catch(() => caches.match('/images/image-placeholder.svg'))
    );
    return;
  }

  // Everything else (HTML, JS, CSS): network-first
  // Always try to get fresh content, fall back to cache if offline
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Got a fresh response - cache it for offline use
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => {
        // Network failed - try cache
        return caches.match(request).then((cached) => {
          if (cached) return cached;

          // Offline fallback for pages
          if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
            return caches.match('/').then((response) => {
              if (response) return response;
              return new Response(
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Offline - Abishek Ganesh</title>
                  <style>
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      height: 100vh;
                      margin: 0;
                      background: #f5f5f5;
                    }
                    .offline-message {
                      text-align: center;
                      padding: 2rem;
                    }
                    h1 { color: #333; }
                    p { color: #666; }
                  </style>
                </head>
                <body>
                  <div class="offline-message">
                    <h1>You're Offline</h1>
                    <p>Please check your internet connection and try again.</p>
                  </div>
                </body>
                </html>`,
                { headers: { 'Content-Type': 'text/html' } }
              );
            });
          }
        });
      })
  );
});
