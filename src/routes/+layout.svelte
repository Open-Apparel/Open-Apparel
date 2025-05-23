<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.css';

	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	import Footer from '$lib/components/footer.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	let { children } = $props();
</script>

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
