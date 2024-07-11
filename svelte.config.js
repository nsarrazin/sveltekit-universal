import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// set default adapter
process.env.VITE_ADAPTER ??= 'node';

const adapterStaticConfigured = adapterStatic({
	fallback: 'index.html',
	pages: 'build-static',
	assets: 'build-static'
});

const adapterNodeConfigured = adapterNode({
	out: 'build-node'
});

// if node adapter, set PUBLIC_API_BASE to '' and update the env variable
// or also if in dev mode

if (process.env.VITE_ADAPTER === 'node') {
	process.env.PUBLIC_API_BASE = '';
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: process.env.VITE_ADAPTER === 'node' ? adapterNodeConfigured : adapterStaticConfigured,
		outDir:
			process.env.VITE_ADAPTER === 'node' ? '.svelte-kit/build-node' : '.svelte-kit/build-static'
	} // this is important so building one adapter doesnt overwrite the other
};

export default config;
