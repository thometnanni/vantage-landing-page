import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter(),
		vite: {
			define: {
				__WS_TOKEN__: JSON.stringify(process.env.WS_TOKEN || '')
			}
		}
	}
};
