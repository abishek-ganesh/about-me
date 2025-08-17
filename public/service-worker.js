/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'abishek-portfolio-v1';
const urlsToCache = [
  '/',
  '/resume',
  '/voiceover',
  '/stats',
  '/about',
  '/contact',
  '/static/css/main.8b4fdf55.chunk.css',
  '/static/js/0.46ba17f1.chunk.js',
  '/static/js/main.6b26ac56.chunk.js',
  '/static/js/4.ec4a9877.chunk.js',
  '/static/js/6.4c3209e6.chunk.js',
  '/manifest.json',
  '/images/image-placeholder.svg',
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache when available
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip chrome-extension and non-http(s) requests
  if (url.protocol === 'chrome-extension:' || !url.protocol.startsWith('http')) {
    return;
  }

  // Skip external requests (analytics, fonts, etc.)
  if (!url.origin.includes(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache images and static assets
          if (request.url.includes('/images/') || 
              request.url.includes('/static/') ||
              request.url.includes('.webp') ||
              request.url.includes('.jpg') ||
              request.url.includes('.jpeg') ||
              request.url.includes('.png')) {
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseToCache);
              });
          }

          return response;
        });
      })
      .catch(() => {
        // Offline fallback for images
        if (request.destination === 'image') {
          return caches.match('/images/image-placeholder.svg');
        }
        
        // Offline fallback for pages
        if (request.headers.get('accept').includes('text/html')) {
          return caches.match('/').then(response => {
            if (response) {
              return response;
            }
            // Return a basic offline page
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
                  <p>You can still access cached pages.</p>
                </div>
              </body>
              </html>`,
              {
                headers: { 'Content-Type': 'text/html' }
              }
            );
          });
        }
      })
  );
});