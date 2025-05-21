<script lang="ts">
	import Navigation from '$lib/components/navigation.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.design.name} | Open Apparel</title>
</svelte:head>

<Navigation />

<div class="container mx-auto">
	<div class="grid gap-4 px-6 py-8 md:grid-cols-3 md:py-16">
		<div class="col-span-2 bg-neutral-300">
			<img src={data.design.pictures[0]} alt={data.design.name} />
		</div>

		<div class="bg-neutral-300">hoi</div>

		<div class="col-span-full flex flex-col gap-4">
			<div class="flex flex-col justify-between md:flex-row md:items-center">
				<h1 class="text-4xl font-semibold">{data.design.name}</h1>
				<p class="text-sm text-gray-600">{data.design.categories.join(', ')}</p>
			</div>

			<p>{data.design.description}</p>
		</div>
	</div>
</div>
