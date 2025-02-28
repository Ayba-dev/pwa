if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((req)  => console.log('Service Worker register', req))
        .catch((error) => console.log('Service Worker', error))
}