import { sveltekit } from '@sveltejs/kit/vite';
// import { SvelteKitPWA } from '@vite-pwa/sveltekit'  // doesn't work out of the box
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    // SvelteKitPWA(
    //   // { // https://vite-pwa-org.netlify.app/frameworks/sveltekit.html#generate-custom-service-worker
    //   //   strategies: 'injectManifest',
    //   //   srcDir: 'src',
    //   //   filename: 'service-worker.js',
    //   // }
    // )
  ]
});
