<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.css';

	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="Open Apparel is a free and open-source library of SVG designs for t-shirts and clothing that you can freely use to create custom apparel."
	/>
	<meta name="theme-color" content="#9810fa" />
</svelte:head>

<main class="flex h-full min-h-dvh flex-col justify-between">
	<div>
		<Navigation />

		{#key page.url}
			<div in:fade={{ duration: 250 }}>
				{@render children?.()}
			</div>
		{/key}
	</div>

	<Footer />
</main>
