<script lang="ts">
	import DesignCard from '$lib/components/design-card.svelte';
	import Navigation from '$lib/components/navigation.svelte';
	import { designs } from '$lib/designs';
</script>

<Navigation />

<div
	class="container mx-auto grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:py-16 lg:grid-cols-3"
>
	{#each designs as design}
		<DesignCard {design} />
	{/each}
</div>
