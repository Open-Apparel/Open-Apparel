<script lang="ts">
	import DesignCard from '$lib/components/design-card.svelte';
	import { designs } from '$lib/designs';
</script>

<svelte:head>
	<title>Designs | Open Apparel</title>
</svelte:head>

<div
	class="container mx-auto grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:py-16 lg:grid-cols-3"
	data-test-id="design-gallery"
>
	{#each Object.entries(designs).reverse() as [id, design] (id)}
		<DesignCard {design} />
	{/each}
</div>
