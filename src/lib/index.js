// place files you want to import through the `$lib` alias in this folder.
import { dev } from '$app/environment';

navigator.serviceWorker.register('/service-worker.js', {
  type: dev ? 'module' : 'classic'
});
