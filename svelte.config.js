import adapter from '@sveltejs/adapter-node'; // 修正這裡
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
        preprocess: vitePreprocess(),
        kit: {
                adapter: adapter()
        }
};

export default config;