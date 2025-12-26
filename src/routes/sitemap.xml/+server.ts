import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';

/**
 * Generates a sitemap for the application.
 * @param {object} request - The request object.
 * @param {string} request.request - The request object.
 * @returns {Promise<Response>} A response containing the sitemap.
 */
export const GET: RequestHandler = async ({ request }) => {
	const origin = new URL(request.url).origin;
	return await sitemap.response({
		origin: origin,
		paramValues: {
			'/': ['']
		}
	});
};
