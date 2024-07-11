import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = async ({ error, status, message }) => {
	if ((error as Error).message.startsWith('NetworkError')) {
		return {
			message: 'Couldnt connect to API',
			status: 500
		};
	}

	return {
		message: message,
		status: status
	};
};
