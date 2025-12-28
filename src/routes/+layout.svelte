<script lang="ts">
	import favicon from '$lib/assets/logo.svg';

	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/platypi';

	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-dvh bg-neutral-50 text-neutral-950">
	{@render children()}
</div>
