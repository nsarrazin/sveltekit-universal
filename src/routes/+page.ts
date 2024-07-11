import { PUBLIC_API_BASE } from '$env/static/public';

export const load = async ({ fetch, depends }) => {
	depends('app:random');

	const value = await fetch(PUBLIC_API_BASE + '/api/test').then(async (res) => {
		return await res.json();
	});

	return {
		value
	};
};
