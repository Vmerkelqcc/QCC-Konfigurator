/* QCC-Kundenversion: Navigation immer online aktualisieren, offline letzten Stand nutzen. */
const CACHE='qcc-customer-pages-v2';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('qcc-customer-pages-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener('fetch',event=>{const req=event.request;if(req.mode!=='navigate'||new URL(req.url).origin!==self.location.origin)return;event.respondWith((async()=>{try{const response=await fetch(req,{cache:'no-store'});if(response.ok){const cache=await caches.open(CACHE);await cache.put(req,response.clone());}return response;}catch(err){const cache=await caches.open(CACHE);return (await cache.match(req))||Response.error();}})());});
