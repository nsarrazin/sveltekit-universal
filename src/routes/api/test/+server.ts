export const GET = async ({ request }) => {
	return new Response(
		JSON.stringify({
			val: Math.random().toString(),
			origin: request.headers.get('Origin')
		}),
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
};
