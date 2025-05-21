<script lang="ts">
	import type { Design } from '$lib/types';

	let { design }: { design: Design } = $props();
</script>

<div class="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg">
	<div class="flex aspect-video items-center justify-center bg-gray-200 p-4">
		{#if design.pictures[0]}
			<img src={design.pictures[0]} alt={design.name} />
		{/if}
	</div>

	<div class="p-6">
		<h3 class="mb-2 text-xl font-bold">{design.name}</h3>
		<p class="mb-4 text-gray-600">{design.summary}</p>
		<div class="flex items-center justify-between">
			<span class="text-sm text-gray-500">
				{#if design.categories.length}
					Categories: {design.categories.join(', ')}
				{/if}
			</span>

			<a href="/{design.id}" class="font-medium text-indigo-600 hover:text-indigo-800">
				View Design
			</a>
		</div>
	</div>
</div>
