import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
        plugins: [sveltekit()],
        // ─── 加上下面這段 server 設定 ───
        server: {
                allowedHosts: ['']
        }
});