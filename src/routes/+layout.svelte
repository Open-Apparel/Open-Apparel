<script lang="ts">
	import favicon from '$lib/assets/logo.svg';

	import '@fontsource-variable/jetbrains-mono';
	import '@fontsource-variable/platypi';

	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<!-- Privacy-friendly analytics by Plausible -->
	<script async src="https://analytics.boris.foo/js/pa-Ul6KBzU414tYXDh26k8ME.js"></script>
	<script>
		((window.plausible =
			window.plausible ||
			function () {
				(plausible.q = plausible.q || []).push(arguments);
			}),
			(plausible.init =
				plausible.init ||
				function (i) {
					plausible.o = i || {};
				}));
		plausible.init();
	</script>
</svelte:head>

<div class="min-h-dvh bg-neutral-50 text-neutral-950">
	{@render children()}
</div>
