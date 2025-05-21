import { designs } from '$lib/designs';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const randomDesigns = designs.sort(() => Math.random() - 0.5).slice(0, 3);

	return {
		designs: randomDesigns
	};
}) satisfies PageServerLoad;
