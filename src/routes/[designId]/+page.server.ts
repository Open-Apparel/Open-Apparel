import { designs } from '$lib/designs';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { designId } = params;
	const design = designId in designs ? designs[designId as keyof typeof designs] : null;

	if (!design) {
		redirect(307, '/');
	}

	return {
		design
	};
}) satisfies PageServerLoad;
