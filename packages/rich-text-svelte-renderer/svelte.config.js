import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	compilerOptions: {
		generate: 'ssr',
	},
	build: {
		ssr: true,
		dynamicImports: true,
	},
	kit: {
		adapter: adapter(),
	}
};

export default config;
