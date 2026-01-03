<script lang="ts">
	import Gallery from '$lib/components/gallery.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import { designs } from '$lib/designs';
	import Fuse from 'fuse.js';

	const fuse = new Fuse(Object.values(designs), {
		keys: ['name'],
		threshold: 0.8
	});

	let search = $state('');
	let filteredDesigns = $derived(
		search.length > 0 ? fuse.search(search).map((d) => d.item) : Object.values(designs).reverse()
	);
</script>

<svelte:head>
	<title>Open Apparel</title>
</svelte:head>

<div
	class="flex flex-col items-center gap-6 border-b-2 border-neutral-200 bg-linear-to-tl from-indigo-800 to-purple-300 px-8 py-16 text-white md:py-24"
>
	<h1
		class="max-w-3xl bg-linear-to-b from-white to-neutral-200 bg-clip-text pb-4 text-center font-platypi text-3xl font-bold text-pretty text-clip text-transparent drop-shadow md:text-4xl"
	>
		Open source library of SVG designs
	</h1>

	<p class="w-full max-w-3xl text-center font-semibold text-pretty drop-shadow md:text-xl">
		Open Apparel is a free and open source library of SVG designs for t-shirts and clothing that you
		can freely use to create custom apparel.
	</p>
</div>

<div class="relative flex flex-col items-center justify-center gap-8 p-8 md:gap-16 md:py-16">
	<div class="sticky top-4 grid w-full place-items-center">
		<Navigation>
			<input
				class="h-full w-full max-w-full rounded-md border border-neutral-200 bg-white px-2 py-1 text-sm outline-none placeholder:text-neutral-400 md:w-xs"
				placeholder="Search for a design"
				bind:value={search}
			/>
		</Navigation>
	</div>

	<div class="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
		<Gallery designs={filteredDesigns} />
	</div>
</div>
