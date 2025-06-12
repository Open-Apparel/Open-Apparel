import { designs } from '$lib/designs';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const randomDesigns = Object.keys(designs)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);

	const selectedDesigns = randomDesigns.reduce((acc, designId) => {
		acc[designId] = designs[designId];
		return acc;
	}, {});

	return {
		designs: selectedDesigns
	};
}) satisfies PageServerLoad;
