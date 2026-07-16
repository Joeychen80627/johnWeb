import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        compilerOptions: {
            // 將 filename 明確宣告為 string
            runes: (options: { filename: string }) =>
                options.filename.split(/[/\\]/).includes('node_modules') ? undefined : true
        }
    }
};

export default config;