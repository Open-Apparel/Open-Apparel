<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Design } from '$lib/types';
	import Eye from '@lucide/svelte/icons/eye';

	let { designs }: { designs: Design[] } = $props();
</script>

{#each Object.values(designs) as design (design.id)}
	<a
		href={resolve('/[designId]', {
			designId: design.id
		})}
		class="group cursor-pointer overflow-hidden rounded-xl border border-neutral-200 transition-all hover:shadow-lg/3"
	>
		<div class="flex aspect-video items-center justify-center bg-gray-100">
			{#if design.pictures[0]}
				<img class="size-full object-contain" src={design.pictures[0]} alt={design.name} />
			{:else if design.downloads[0]}
				<img class="size-full object-contain p-8" src={design.downloads[0].url} alt={design.name} />
			{/if}
		</div>

		<div class="flex items-center justify-between p-4 px-6">
			<p class="font-medium text-neutral-700 transition-all group-hover:text-neutral-900">
				{design.name}
			</p>

			<div class="text-neutral-300 transition-all group-hover:text-neutral-900">
				<Eye size="1.2rem" />
			</div>
		</div>
	</a>
{/each}
