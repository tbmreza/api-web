import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // compilerOptions: {
  //   runes: false
  // },

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    // files: {
    //   serviceWorker: "src/service-worker.js"  // default path as per https://vite-pwa-org.netlify.app/frameworks/sveltekit.html#generate-custom-service-worker
    // }
  }
};

export default config;
