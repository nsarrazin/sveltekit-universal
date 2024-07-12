import { dev } from '$app/environment';
import { PUBLIC_API_BASE } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

const ALLOWED_ORIGINS = [
	...(dev
		? [
				'http://localhost:4173', // vite preview
				'http://localhost:5173', // vite dev
				'http://localhost:3000' // sveltekit prod
			]
		: []),
	'tauri://localhost', // tauri
	'capacitor://localhost', // capacitor on iOS
	'http://localhost', // capacitor on android,
	PUBLIC_API_BASE
];

function isAllowedOrigin(origin: string | null): origin is string {
	if (!origin) return false;
	return ALLOWED_ORIGINS.includes(origin);
}

export const handle: Handle = async ({ event, resolve }) => {
	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/api')) {
		// disable API if a remote API is used
		if (PUBLIC_API_BASE) {
			return new Response('API is disabled', { status: 403 });
		}

		const headers = new Headers();
		const origin = event.request.headers.get('Origin');

		console.log('API request from ' + origin);
		if (isAllowedOrigin(origin)) {
			if (event.request.method === 'OPTIONS') {
				return new Response(null, {
					headers: {
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
						'Access-Control-Allow-Origin': origin,
						'Access-Control-Allow-Headers': '*'
					}
				});
			}

			const response = await resolve(event);
			response.headers.append('Access-Control-Allow-Origin', origin);

			headers.set('Access-Control-Allow-Origin', origin);
			return response;
		}
	}

	return resolve(event);
};
