// ফাইলগুলো ক্যাশে সেভ করা
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => {
      return cache.addAll(['/', '/index.html', '/style.css', '/script.js']);
    })
  );
});

// অফলাইনে ক্যাশ থেকে ফাইল লোড করা
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
