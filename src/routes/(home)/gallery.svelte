<script lang="ts">
	import DesignCard from '$lib/components/design-card.svelte';
	import type { Design } from '$lib/types';

	let { designs }: { designs: Design[] } = $props();
</script>

<section id="gallery" class="scroll-mt-24 bg-gray-100 py-16">
	<div class="container mx-auto px-6">
		<h2 class="mb-4 text-center text-3xl font-bold">Design Gallery</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
			Browse our collection of free SVG designs for t-shirts, hoodies, and other apparel.
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each designs as design (design.id)}
				<DesignCard {design} />
			{/each}
		</div>

		<div class="mt-12 text-center">
			<a
				href="/designs"
				class="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
			>
				View All Designs
			</a>
		</div>
	</div>
</section>
