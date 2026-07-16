import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        compilerOptions: {
            // 這就是你原本在 vite.config 裡的 runes 設定
            runes: ({ filename }) =>
                filename.split(/[/\\]/).includes('node_modules') ? undefined : true
        }
    }
};

export default config;